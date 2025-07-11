import type { AuthForm } from '~~/shared/types/auth'

export default async (isSignup: boolean, form: AuthForm) => {
  const { data, error } = isSignup
                      ? await useAsyncData(() => $fetch(
                        '/api/signup', { method: 'POST', body: form }
                      ))
                      : await useAsyncData(() => $fetch(
                        '/api/login',  { method: 'POST', body: form }
                      ))

  if (error.value)
    return error.value?.statusMessage === 'user_already_exists'
              ? 'User already exists'
              : 'An error occurred'

  console.log('Authentication successful:', data.value)
  return
}
