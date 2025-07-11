import supabase from './utils/supabase'
import type { AuthForm } from '~~/shared/types/auth'

export default eventHandler(async (event) => {
  const { email, password }: Partial<AuthForm> = await readBody(event)

  const { data, error } = await supabase.auth.signInWithPassword({ email, password } as AuthForm)

  if (error)
    throw createError({
      statusCode: error.status,
      statusMessage: error.code
    })

  return { data }
})
