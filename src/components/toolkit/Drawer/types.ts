export interface DrawerProps {
  children: React.ReactNode
  className?: string
  fullScreenOnMobile?: boolean
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
