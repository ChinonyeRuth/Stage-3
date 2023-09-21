import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jfzznbdskqqvsxlwodng.supabase.co' // Replace with your Supabase project URL
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmenpuYmRza3FxdnN4bHdvZG5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyNzM0NTIsImV4cCI6MjAxMDg0OTQ1Mn0.THH3YifJH1Vu7X2lFhgPi7sAIqCqPp1AgZLze9FTkeA' // Replace with your Supabase project API Key

const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
