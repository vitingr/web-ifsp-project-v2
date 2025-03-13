import { ModalFormHubspotData } from '@/app/(user-scope)/(homepage)/components/FormSection/ModalForm/types'

export interface HubspotFormTemplateData {
  freeDemo: ModalFormHubspotData
}

type HubspotFormType<K extends keyof HubspotFormTemplateData> =
  HubspotFormTemplateData[K]

export interface HubspotFormSubmitProps<
  THubspotFormVariant extends keyof HubspotFormTemplateData
> {
  data: HubspotFormType<THubspotFormVariant>
  formVariant: THubspotFormVariant
  url?: string
}
