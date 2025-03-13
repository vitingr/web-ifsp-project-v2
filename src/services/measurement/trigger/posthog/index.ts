import posthog from 'posthog-js'

import { PostHogEvents, PostHogEventsNames } from './types'

export class Posthog {
  public track<T extends PostHogEventsNames>(
    eventName: T,
    eventProperties: PostHogEvents[T]
  ): void {
    const shouldIdentify =
      eventProperties.email &&
      eventProperties.email !== posthog.get_distinct_id()

    if (shouldIdentify) {
      const { email, ...additionalProperties } = eventProperties

      const domain = email.split('@')[1]

      posthog.identify(email, {
        ...additionalProperties,
        domain
      })
    }

    posthog.capture(eventName, eventProperties)
  }
}
