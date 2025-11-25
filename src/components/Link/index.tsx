import React from 'react'
import Link from 'next/link'
import type { Page } from '@/payload-types'
import { cn } from '@/utils/cx'

interface CMSLinkProps {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages'
    value: number | Page
  } | null
  url?: string | null
  label: string
  appearance?: 'primary' | 'secondary' | 'outline' | null
  className?: string
  invertColors?: boolean
}

export const CMSLink: React.FC<CMSLinkProps> = ({
  type,
  newTab,
  reference,
  url,
  label,
  appearance = 'primary',
  className,
  invertColors = false,
}) => {
  const href =
    type === 'reference' && typeof reference?.value === 'object'
      ? `/${reference.value.slug}`
      : url || '#'

  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noopener noreferrer' : undefined

  const appearanceClasses = {
    primary: invertColors
      ? 'bg-white text-blue-600 hover:bg-gray-100'
      : 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: invertColors
      ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
      : 'bg-gray-600 text-white hover:bg-gray-700',
    outline: invertColors
      ? 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  }

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'inline-block px-6 py-3 rounded-lg font-semibold transition-colors',
        appearanceClasses[appearance as keyof typeof appearanceClasses],
        className,
      )}
    >
      {label}
    </Link>
  )
}



