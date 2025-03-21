'use client'

import { DESKTOP_IMPACT_DATA, MOBILE_IMPACT_DATA } from './data'

export const Impacts: React.FC = () => {
  return (
    <section className="bg-white px-4 py-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-7xl lg:gap-16">
        <article className="flex w-full flex-col gap-2 lg:items-center">
          <h2 className="animate__animated animate__fadeIn text-left text-2xl font-semibold lg:text-center lg:text-4xl">
            Nosso Impacto{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-green-600 bg-clip-text text-2xl text-transparent lg:text-4xl">
              Sustentável é Gigante
            </span>
          </h2>
          <p className="text-left lg:text-center">
            Cada prato que servimos é uma contribuição para um futuro mais
            saudável e sustentável. Estamos comprometidos em fornecer alimentos
            frescos, orgânicos e com o menor impacto ambiental possível. Nosso
            compromisso com a sustentabilidade vai além do que servimos.
          </p>
        </article>
        <ul className="mt-4 flex w-full flex-col items-stretch gap-4 lg:grid lg:hidden lg:grid-cols-4 lg:gap-0">
          {MOBILE_IMPACT_DATA.map((impact, index: number) => (
            <li
              className="flex w-full flex-col items-start gap-3 last:border-transparent md:flex-col lg:gap-2 lg:border-r lg:border-neutral-400 lg:p-4"
              key={`${impact.title}-${index}`}
            >
              <p className="text-base font-medium sm:text-2xl md:text-3xl lg:text-4xl">
                {impact.title}
              </p>
              <p className="text-sm text-neutral-500">{impact.description}</p>
            </li>
          ))}
        </ul>
        <ul className="hidden w-full flex-col items-stretch gap-4 lg:flex lg:grid lg:grid-cols-4 lg:gap-0">
          {DESKTOP_IMPACT_DATA.map((impact, index: number) => (
            <li
              className="flex w-full flex-row items-center gap-3 last:border-transparent md:flex-col lg:gap-2 lg:border-r lg:border-neutral-400 lg:p-4"
              key={`${impact.title}-${index}`}
            >
              <p className="text-center text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
                {impact.title}
              </p>
              <p className="text-center">{impact.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
