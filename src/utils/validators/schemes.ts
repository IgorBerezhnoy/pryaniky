import { z } from 'zod'

export const schemaLoginPageData = z.object({
  password: z.string().min(3),
  username: z.string().refine(value => /^\suser\d+$/.test(value), {
    message:
      'Login field must start with a space and be in the format user{N}, where N is a number',
  }),
})

export type LoginPageData = z.infer<typeof schemaLoginPageData>

export const schemaCreateCompanyItem = z.object({
  companySigDate: z.string().date(),
  companySignatureName: z.string(),
  documentName: z.string(),
  documentStatus: z.string(),
  documentType: z.string(),
  employeeNumber: z.string(),
  employeeSigDate: z.string(),
  employeeSignatureName: z.string(),
})

export type CreateCompanyItemType = z.infer<typeof schemaCreateCompanyItem>
