import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kgjgawbobcojunvzylkw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnamdhd2JvYmNvanVudnp5bGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyOTQzMDAsImV4cCI6MjA1Mjg3MDMwMH0.hMqo_eEqrdxx_ixIranRyoOs_J6-8bKpHJJ_cmow9jg'

export const supabase = createClient(supabaseUrl, supabaseKey)
