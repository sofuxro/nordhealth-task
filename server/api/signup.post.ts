import supabase from './utils/supabase'
import type { AuthForm } from '~~/shared/types/auth'

export default eventHandler(async (event) => {
  const { email, password, optIn: opt_in }: AuthForm = await readBody(event)

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

  // Successful signup, set the user session
  await setUserSession(event, {
    user: {
      email: data.user?.email,
      optIn: data.session?.user.user_metadata.opt_in
    },
    secure: {
      accessToken: data.session?.access_token,
      refreshToken: data.session?.refresh_token
    }
  })

  return { data }
})
