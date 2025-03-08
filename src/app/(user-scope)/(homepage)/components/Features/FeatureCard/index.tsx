'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { FeatureCardProps } from './types'

export const FeatureCard: React.FC<FeatureCardProps> = ({ copy, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const { ref: mobileRef, inView: mobileInView } = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationDelay = 0.25
  const mobileAnimationDelay = 0.085

  return (
    <>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        className="card hidden lg:flex"
        custom={index}
        initial="hidden"
        ref={ref}
        transition={{ delay: index * animationDelay }}
        variants={imageVariants}
      >
        <div className="card-content">
          <div className="card-image">
            <i className="fa-duotone fa-apartment"></i>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>{copy.title}</h3>
                <h4>{copy.description}</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={mobileInView ? 'visible' : 'hidden'}
        className="card flex lg:hidden"
        custom={index}
        initial="hidden"
        ref={mobileRef}
        transition={{ delay: index * mobileAnimationDelay }}
        variants={imageVariants}
      >
        <div className="card-content">
          <div className="card-image">
            <i className="fa-duotone fa-apartment"></i>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>{copy.title}</h3>
                <h4>{copy.description}</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
