import { IconProps } from '@/types/components/icons'

export const Check: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 11L9.5 19M1.5 11L9.5 19"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M8.5 19L22.5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
