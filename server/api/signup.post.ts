import { createClient } from '@supabase/supabase-js'

export default eventHandler(async (event) => {

  const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
  )

  const postBody = await readBody(event)

  const { data, error } = await supabase.auth.signUp(postBody)

  if (error)
    throw createError({
      statusCode: error.status,
      statusMessage: error.code
    })

  return { data }
})
