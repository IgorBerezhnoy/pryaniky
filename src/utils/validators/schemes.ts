import { z } from 'zod'

export const schemaLoginPageData = z.object({
  login: z.string().refine(value => /^user\d+$/.test(value), {
    message: 'Login field must be in the format user{N}, where N is a number',
  }),
  password: z.string().min(3),
})

export type LoginPageData = z.infer<typeof schemaLoginPageData>
