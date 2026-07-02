import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Fetch the current high score
export async function getHighScore() {
  const { data, error } = await supabase
    .from('high_score')
    .select('wpm')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error && error.code !== 'PGRST116') { // Ignore "no rows returned" error
    console.error('Error fetching high score:', error)
    return null
  }
  return data ? data.wpm : null
}

// Update the high score (simple update, no authentication required for now)
export async function updateHighScore(wpm) {
  const { data, error } = await supabase
    .from('high_score')
    .insert([{ wpm: wpm }])
    .select()

  if (error) {
    console.error('Error updating high score:', error)
    return null
  }
  return data
}