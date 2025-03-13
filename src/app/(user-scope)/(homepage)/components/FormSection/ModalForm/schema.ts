import { z } from 'zod'

import { fullNameValidation } from '@/utils/helpers/fullNameValidation'
import { normalEmailValidation } from '@/utils/helpers/normalEmailValidation'
import { verifyPhoneMinLength } from '@/utils/helpers/verifyPhoneMinLength'

export const modalFormSchema = ({
  requiredFieldCopy
}: {
  requiredFieldCopy: string
}) =>
  z.object({
    name: z
      .string()
      .min(3, requiredFieldCopy)
      .refine(value => fullNameValidation({ value }), {
        message: requiredFieldCopy
      }),
    email: z
      .string()
      .min(8, requiredFieldCopy)
      .email({ message: requiredFieldCopy })
      .refine(value => normalEmailValidation({ value }), {
        message: requiredFieldCopy
      }),
    phone: z
      .string()
      .min(9, requiredFieldCopy)
      .refine(value => verifyPhoneMinLength({ value }), {
        message: requiredFieldCopy
      })
  })
