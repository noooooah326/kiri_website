import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://nygrrrkebewzckntwonk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_8e0q7FNfdG44ePUlfgFMrg_LzzjcZcO';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabase };
