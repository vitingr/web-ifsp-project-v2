'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/toolkit/Button'
import { InputField } from '@/components/toolkit/Fields/InputField'
import { LabelField } from '@/components/toolkit/Fields/LabelField'
import { Modal } from '@/components/toolkit/Modal'
import { PhoneNumber } from '@/components/toolkit/PhoneNumber'
import { getMappedHubspotData } from '@/utils/hubspot/getMappedHubspotData'
import { hubspotFormSubmit } from '@/utils/hubspot/hubspotFormSubmit'
import { zodResolver } from '@hookform/resolvers/zod'

import { modalFormSchema } from './schema'
import { FreeDemoFormInputs } from './types'

export const ModalForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const formMethods = useForm({
    resolver: zodResolver(
      modalFormSchema({
        requiredFieldCopy: 'O campo é obrigatório'
      })
    )
  })

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = formMethods

  const sendDataToHubspot = async (payload: FreeDemoFormInputs) => {
    const hubspotMappedData = getMappedHubspotData({
      ...(payload as Required<FreeDemoFormInputs>)
    })

    await hubspotFormSubmit({
      data: {
        ...hubspotMappedData,
        email: payload.email,
        phone: payload.phone,
        page: pathname
      },
      formVariant: 'freeDemo',
      url: pathname
    })

    setIsOpen(false)
    reset()
  }

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="rounded-sm bg-white px-8 pb-12 pt-16 lg:w-[600px]">
          <form id="free-demo-form" onSubmit={handleSubmit(sendDataToHubspot)}>
            <InputField
              id="name"
              label="Informe o seu nome"
              placeholder="Seu nome aqui"
              variant="secondary"
              {...register('name')}
              errorMessage={errors?.root?.message}
            />

            <InputField
              id="email"
              label="Informe o seu email"
              placeholder="Seu email aqui"
              variant="secondary"
              {...register('email')}
              errorMessage={errors?.root?.message}
            />

            <div className="flex flex-col gap-1">
              <LabelField
                id="phone"
                label="Seu número de telefone"
                variant="secondary"
              />
              <PhoneNumber
                formMethods={formMethods}
                id="phone"
                name="phone"
                placeholder="Insira seu telefone"
              />
            </div>

            <Button
              className="mt-8 min-w-full lg:mt-10"
              isLoading={isSubmitting}
              type="submit"
              variant="primary"
            >
              Solicitar
            </Button>
          </form>
        </div>
      </Modal>
      <Button
        className="min-w-full sm:min-w-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        Solicitar demonstração
      </Button>
    </>
  )
}
