'use client'

import React, { useEffect, useRef } from 'react'
import { FEATURES_DATA } from './data'

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
    <div id="cards" ref={cardsRef}>
      {FEATURES_DATA.map((feature, index: number) => (
        <div className="card" key={`${feature.title}-${index}`}>
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-apartment"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-apartment"></i>
                <div className="card-info-title">
                  <h3>{feature.title}</h3>
                  <h4>{feature.description}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
