'use client'

import { useState } from 'react'

import { Anchor } from '@/components/toolkit/Anchor'
import { Drawer } from '@/components/toolkit/Drawer'

import { NAVBAR_LINKS } from '../data'
import { CustomSandwich } from '../icons/CustomSandwich'

export const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggleDrawer = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <nav className="flex items-center justify-end gap-10 bg-[#f5f5f7c2] bg-opacity-10 px-4 py-3">
      <div className="lg:hidden">
        <div className="flex gap-6">
          <button
            aria-label="Toggle Drawer"
            className="bg-transparent-500 w-10 cursor-pointer rounded-sm p-2.5 duration-300"
            onClick={handleToggleDrawer}
          >
            <CustomSandwich className="text-neutral-700" />
          </button>
        </div>
        <Drawer
          className="bg-slate-50"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          fullScreenOnMobile
        >
          <div className="flex w-full flex-col gap-6 px-4 pt-16">
            {NAVBAR_LINKS.map((navbarLink, index) => (
              <Anchor
                className="w-full cursor-pointer text-base font-normal transition-all duration-300 hover:text-neutral-900"
                href={navbarLink.href}
                key={`${navbarLink.label}-${index}`}
                variant="custom"
              >
                {navbarLink.label}
              </Anchor>
            ))}
          </div>
        </Drawer>
      </div>
    </nav>
  )
}
