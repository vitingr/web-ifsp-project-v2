'use client'

import { useState } from 'react'

import { Drawer } from '@/components/toolkit/Drawer'

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
            className="duration-default bg-transparent-500 w-10 cursor-pointer rounded-sm p-2.5"
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
          <div className="flex flex-col gap-6 px-4 pt-16">teste</div>
        </Drawer>
      </div>
    </nav>
  )
}
