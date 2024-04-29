import { createClient } from '@supabase/supabase-js'

const URL = 'https://ewfohtuptuljzjtoknzu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3Zm9odHVwdHVsanpqdG9rbnp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyODczNzgsImV4cCI6MjAyOTg2MzM3OH0._edtv7QN5gMheWhCGIqYoAn5WNcv3zJ0ptOroBzHE3g';

export const supabase = createClient (URL, API_KEY);