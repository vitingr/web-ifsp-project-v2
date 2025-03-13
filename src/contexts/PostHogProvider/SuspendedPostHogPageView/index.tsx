import { Suspense } from 'react'

import { PostHogPageView } from '../PostHogPageView'

export function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}
