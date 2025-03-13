import { HubspotFormTemplateData } from '@/utils/hubspot/hubspotFormSubmit/types'

type HubspotFormsId = {
  [formVariantName in keyof HubspotFormTemplateData]: string
}

export const HUBSPOT_FORMS_ID: HubspotFormsId = {
  freeDemo: 'd17f023e-7c75-4da7-8b1b-245bf2da9266'
} as const
