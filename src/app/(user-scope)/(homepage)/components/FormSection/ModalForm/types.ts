import { DefaultFormsFieldsCopy } from '@/types/components/defaultFormsFieldsCopy copy'

export interface ModalFormHubspotData {
  email: string
  firstname: string
  lastname: string
  page?: string
  phone: string
}

interface FreeDemoFormCopy {
  formFields: Pick<
    DefaultFormsFieldsCopy,
    | 'email'
    | 'name'
    | 'phone'
    | 'requiredFieldsMessages'
    | 'fieldsErrors'
    | 'page'
  >
}

export interface FreeDemoFormInputs
  extends Partial<Record<keyof FreeDemoFormCopy['formFields'], string>> {}
