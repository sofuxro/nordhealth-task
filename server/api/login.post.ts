import supabase from './utils/supabase'

export default eventHandler(async (event) => {
  const { email, password } = await readBody(event)

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error)
    throw createError({
      statusCode: error.status,
      statusMessage: error.code
    })

  return { data }
})
