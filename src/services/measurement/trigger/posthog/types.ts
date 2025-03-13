export type PostHogEventsNames = keyof PostHogEvents

export interface PostHogEvents {
  default: DefaultPosthogEvent
}

export interface DefaultPosthogEvent {
  email: string
}

export type PostHogTrack = <T extends PostHogEventsNames>(
  eventName: T,
  eventProperties?: PostHogEvents[T]
) => void
