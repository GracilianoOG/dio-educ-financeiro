import type { LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'ghost'
  icon?: LucideIcon
}

const baseClasses =
  'flex cursor-pointer items-center justify-center font-medium text-sm gap-2 px-4 py-2 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-80 h-fit'

const variantClasses = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  ghost: 'button-ghost',
}

export const Button = ({ variant, icon: Icon, children, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={[baseClasses, variantClasses[variant], className].join(' ')}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  )
}
