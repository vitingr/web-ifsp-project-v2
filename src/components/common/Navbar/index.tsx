import { DesktopNavbar } from './Desktop'
import { MobileNavbar } from './Mobile'

export const Navbar: React.FC = async () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  )
}
