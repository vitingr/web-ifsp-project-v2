import Image from 'next/image'
import React from 'react'

import { SUSTAINABILITY_SECTIONS } from './data'

export const Benefits: React.FC = async () => {
  return (
    <section className="bg-white px-4 py-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-7xl lg:gap-16">
        {SUSTAINABILITY_SECTIONS.map((section, index: number) => (
          <div
            className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-16"
            key={`${section.title}-${index}`}
          >
            <figure
              className={`flex max-h-[395px] w-full items-center justify-center ${index % 2 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <Image
                alt={section.image.alt}
                className="max-h-[395px] w-full rounded-sm object-cover lg:min-h-[340px]"
                height={1000}
                src={section.image.src}
                width={1600}
              />
            </figure>
            <article
              className={`flex w-full flex-col gap-4 ${index % 2 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <span className="flex w-full flex-col gap-2">
                <h3
                  className="text-2xl font-semibold lg:text-3xl"
                  dangerouslySetInnerHTML={{ __html: section.title }}
                />
                <hr className="hidden h-1 w-full max-w-[160px] border-green-600 lg:flex" />
              </span>
              <p className="text-sm text-neutral-600 lg:text-base">
                {section.description}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
