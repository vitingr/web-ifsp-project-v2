import { UseFormReturn } from 'react-hook-form'

import { FreeDemoFormInputs } from '@/app/(user-scope)/(homepage)/components/FormSection/ModalForm/types'

import { InputProps } from '../Input/types'

export interface PhoneNumberProps extends Omit<InputProps, 'name'> {
  formMethods: UseFormReturn<FreeDemoFormInputs>
  label?: string
  name: keyof FreeDemoFormInputs
}
