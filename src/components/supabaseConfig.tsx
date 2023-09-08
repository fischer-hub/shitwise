import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yekqkiprkmqujznpjowv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlla3FraXBya21xdWp6bnBqb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMDAzMjMsImV4cCI6MjAwOTc3NjMyM30.TgElVw6jbVi4Bvze7tR9hVvOU_lax1bILcoCzAVGGPA'


export const shitwiseDB = createClient(supabaseUrl, supabaseKey);