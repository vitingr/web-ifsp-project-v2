import { Fragment } from 'react'

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { Transition } from '@headlessui/react'

import { DrawerProps } from './types'

export const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  setIsOpen,
  fullScreenOnMobile,
  className = ''
}) => {
  const handleCloseDrawer = () => {
    setIsOpen(false)
  }

  useLockBodyScroll(isOpen)

  return (
    <Transition.Root as="section" show={isOpen} unmount={false}>
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            (event.target as HTMLDivElement).id === 'side-menu-backdrop' &&
            handleCloseDrawer()
          }
          className="fixed left-0 top-0 z-10 h-screen w-screen bg-slate-900/40"
          id="side-menu-backdrop"
          tabIndex={-1}
        ></div>
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-300"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 -translate-x-0"
        leave="ease-in-out duration-300"
        leaveFrom="opacity-100 -translate-x-0"
        leaveTo="opacity-0 translate-x-full"
        unmount={false}
      >
        <div
          className={`drawer-toolkit fixed left-0 top-0 z-50 h-full min-w-80 overflow-auto bg-white shadow-xl ${fullScreenOnMobile ? 'w-full lg:w-auto' : ''} ${className}`}
        >
          <div className="absolute right-3 top-3">
            <button
              aria-label="close-modal"
              className="w-10 cursor-pointer rounded-sm p-2 text-slate-500 duration-300 lg:hover:bg-slate-200 lg:hover:text-slate-500"
              onClick={handleCloseDrawer}
            >
              <svg
                data-sentry-component="XMark"
                data-sentry-element="svg"
                data-sentry-source-file="XMark.tsx"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  data-sentry-element="path"
                  data-sentry-source-file="XMark.tsx"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          {children}
        </div>
      </Transition.Child>
    </Transition.Root>
  )
}
