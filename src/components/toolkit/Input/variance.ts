import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'rounded-sm',
    'lg:p-3',
    'p-2',
    'text-sm',
    'ring-0',
    'outline-none',
    'duration-300'
  ],
  {
    variants: {
      variant: {
        primary: [
          'border',
          'focus:ring-white',
          'focus:ring-1',
          'focus:border-white',
          'bg-white'
        ],
        secondary: [
          'border',
          'border-neutral-300',
          'focus:border-neutral-500',
          'bg-white'
        ]
      },
      error: {
        true: ['border-2', 'border-red-400'],
        false: []
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
