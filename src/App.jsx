import { useEffect, useMemo, useState } from 'react';
import { useArchivePosts } from './hooks/useArchivePosts';
import PixelSnow from './PixelSnow';
import ArchivePage from './archive/ArchivePage';

const wordmark = ['k', 'i', 'r', 'i', '.'];

function formatLastNoteDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(date);
}

export default function App() {
  const [typedCount, setTypedCount] = useState(0);
  const archive = useArchivePosts();
  const displayDate = archive.posts[0] ? formatLastNoteDate(archive.posts[0].created_at) : '';
  const lastNote = displayDate ? `last note / ${displayDate}` : 'last note';
  const lastNoteReady = !archive.loading;
  const reduceMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
    []
  );
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    const resetToHomepage = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const frame = window.requestAnimationFrame(resetToHomepage);

    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    let transitionLocked = false;
    let unlockTimer = 0;
    let touchStartY = null;

    function moveToSection(section) {
      transitionLocked = true;
      section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      unlockTimer = window.setTimeout(() => {
        transitionLocked = false;
      }, reduceMotion ? 80 : 720);
    }

    function handleSectionWheel(event) {
      if (document.querySelector('.article-dialog[open]')) return;
      const archive = document.querySelector('#archive');
      const homepage = document.querySelector('#top');
      const archiveScroller = document.querySelector('.archive-content');
      const homepageThreshold = window.innerHeight * 0.35;
      const archiveTop = archive?.offsetTop ?? 0;
      const nearArchiveTop = Math.abs(window.scrollY - archiveTop) <= window.innerHeight * 0.24;
      const archiveAtStart = (archiveScroller?.scrollTop ?? 0) <= 2;

      if (!archive || !homepage || transitionLocked) {
        return;
      }

      if (event.deltaY > 6 && window.scrollY <= homepageThreshold) {
        event.preventDefault();
        archiveScroller?.scrollTo({ top: 0, behavior: 'auto' });
        moveToSection(archive);
      } else if (event.deltaY < -6 && nearArchiveTop && archiveAtStart) {
        event.preventDefault();
        moveToSection(homepage);
      }
    }

    function handleTouchStart(event) {
      if (document.querySelector('.article-dialog[open]')) return;
      touchStartY = event.touches[0]?.clientY ?? null;
    }

    function handleTouchEnd(event) {
      if (document.querySelector('.article-dialog[open]')) { touchStartY = null; return; }
      const archive = document.querySelector('#archive');
      const homepage = document.querySelector('#top');
      const archiveScroller = document.querySelector('.archive-content');
      const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY;
      const distance = touchStartY === null ? 0 : touchStartY - touchEndY;
      const archiveTop = archive?.offsetTop ?? 0;
      const nearHomepage = window.scrollY <= window.innerHeight * 0.35;
      const nearArchiveTop = Math.abs(window.scrollY - archiveTop) <= window.innerHeight * 0.24;
      const archiveAtStart = (archiveScroller?.scrollTop ?? 0) <= 2;

      if (!archive || !homepage || touchStartY === null || transitionLocked) {
        touchStartY = null;
        return;
      }

      if (distance > 12 && nearHomepage) {
        archiveScroller?.scrollTo({ top: 0, behavior: 'auto' });
        moveToSection(archive);
      } else if (distance < -12 && nearArchiveTop && archiveAtStart) {
        moveToSection(homepage);
      }

      touchStartY = null;
    }

    window.addEventListener('wheel', handleSectionWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.clearTimeout(unlockTimer);
      window.removeEventListener('wheel', handleSectionWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      setTypedCount(wordmark.length);
      return undefined;
    }

    const pauses = [680, 190, 280, 210, 760];
    const timers = [];
    let elapsed = 0;

    pauses.forEach((pause, index) => {
      elapsed += pause;
      timers.push(window.setTimeout(() => setTypedCount(index + 1), elapsed));
    });

    return () => timers.forEach(window.clearTimeout);
  }, [reduceMotion]);

  return (
    <>
      <PixelSnow
        color="#ffffff"
        flakeSize={0.012}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.3}
        density={0.3}
        direction={125}
        brightness={2.5}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
      />

      <main className="page" id="top" aria-label="Kiri private archive homepage">
        <div className="corner-label">est. 2026</div>


        <section className="hero" aria-label="Archive introduction">
          <h1 className="wordmark" aria-label="kiri.">
            <span className="typewriter" aria-hidden="true">
              {wordmark.map((char, index) => {
                const visible = typedCount > index;
                const cursor = typedCount === index;

                return (
                  <span
                    className={`type-slot${visible ? ' visible' : ''}${cursor ? ' cursor' : ''}`}
                    key={`${char}-${index}`}
                  >
                    {visible ? char : ''}
                  </span>
                );
              })}
            </span>
          </h1>
          <p className="subtitle">A private archive of moments</p>
          <div className="divider" aria-hidden="true" />
        </section>

        <p className="microcopy">a quiet place for images and memories</p>

        <a className="enter" href="#archive">enter the archive</a>
        <div className={`status${lastNoteReady ? ' is-ready' : ''}`} data-last-note>
          {lastNote}
        </div>
      </main>

      <ArchivePage {...archive} />

    </>
  );
}
