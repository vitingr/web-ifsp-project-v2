import { HTMLAttributes, PropsWithChildren } from 'react'

import { ImageCopy } from '@/types/components/imageCopy'

export interface HalfImageBannerProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  image: ImageCopy
  imageClassName?: string
}
