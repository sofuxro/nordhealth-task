import * as z from 'zod'

import type { AuthForm } from '~~/shared/types/auth'

const formSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(64, 'Password must not exceed 64 characters')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[\W_]/, 'Password must contain at least one special character'),
});

export default async (isSignup: boolean, form: AuthForm): Promise<Partial<formSchemaType>> => {
  // Validate form data
  const result = formSchema.safeParse(form)
  if (!result.success) {
    return z.flattenError(result.error).fieldErrors as Partial<formSchemaType>
  }

  const { error } = isSignup
                      ? await useAsyncData(() => $fetch(
                        '/api/signup', { method: 'POST', body: form }
                      ))
                      : await useAsyncData(() => $fetch(
                        '/api/login',  { method: 'POST', body: form }
                      ))

  if (error.value)
    return { email:
      error.value?.statusCode === 422
      ? 'User already exists'
      : 'An error occurred'
    }

  return {}
}

export type formSchemaType = z.infer<typeof formSchema>
