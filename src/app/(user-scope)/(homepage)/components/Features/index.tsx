'use client'

import React, { useEffect, useRef } from 'react'

import { FEATURES_DATA } from './data'
import { FeatureCard } from './FeatureCard'

export const Features: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardsRef.current) {
        const cards = cardsRef.current.getElementsByClassName('card')

        for (const card of cards) {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          const cardElement = card as HTMLElement

          cardElement.style.setProperty('--mouse-x', `${x}px`)
          cardElement.style.setProperty('--mouse-y', `${y}px`)
        }
      }
    }

    const currentCardsRef = cardsRef.current
    if (currentCardsRef) {
      currentCardsRef.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (currentCardsRef) {
        currentCardsRef.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      className="flex w-full flex-col items-center border-y border-neutral-200 bg-neutral-100 to-white px-4 py-12 lg:py-20"
      data-cid="features-homepage"
    >
      <div
        className="justifify-center mx-auto flex w-full max-w-2xl flex-nowrap gap-4 lg:max-w-5xl"
        id="cards"
        ref={cardsRef}
      >
        {FEATURES_DATA.map((feature, index: number) => (
          <FeatureCard
            copy={feature}
            index={index}
            key={`${feature.title}-${index}`}
          />
        ))}
      </div>
    </section>
  )
}
