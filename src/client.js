import { createClient } from '@supabase/supabase-js'

const URL = 'https://dvgztnocaoprnrktvzsq.supabase.co'
const API_KEY = 'sb_publishable_o7--NRX7bnDJnuf2dgIz_g_e7HaPQxf'

export const supabase = createClient(URL, API_KEY);
const supabase = createClient(URL, API_KEY);

