import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://roqtcurzfuzwihmurwsf.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
