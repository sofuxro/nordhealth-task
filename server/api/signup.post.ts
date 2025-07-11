import supabase from './utils/supabase'
import type { AuthForm } from '~~/shared/types/auth'

export default eventHandler(async (event) => {
  const { email, password, checkbox: opt_in }: AuthForm = await readBody(event)

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { // Metadata which goes into the user profile table
      data: {
        opt_in
      }
    }
  })

  if (error)
    throw createError({
      statusCode: error.status,
      statusMessage: error.code
    })

  return { data }
})
