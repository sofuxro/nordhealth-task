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

  await setUserSession(event, {
    user: {
      email: data.user.email,
      optIn: data.session.user.user_metadata.opt_in
    },
    secure: {
      accessToken: data.session.access_token,
      refreshToken: data.session.refresh_token
    }
  })
  console.log('Login successful:', data)
  return { data }
})
