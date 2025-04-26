// backend/config/supabaseClient.js
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'; // Load .env file

const supabaseUrl = process.env.SUPABASE_URL;  // Get from .env
const supabaseKey = process.env.SUPABASE_KEY;  // Get from .env

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or Key is missing in environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
