/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLProps, PropsWithChildren } from 'react'

type ClassName = HTMLProps<HTMLElement>['className']

export interface ContainerProps
  extends PropsWithChildren,
    HTMLProps<HTMLElement> {
  as?: any
  className?: ClassName
  container?: 'fluid' | 'fixed'
  'data-cid': string
  disableSidePadding?: boolean
  wrapperClassName?: ClassName
}
