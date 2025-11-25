import React from 'react'
import type { CTABlock as CTABlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utils/cx'

export const CTABlock: React.FC<CTABlockType> = (props) => {
  const { heading, description, links, variant = 'default' } = props

  const variantClasses = {
    default: 'bg-blue-600 text-white',
    centered: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center',
    banner: 'bg-gray-900 text-white',
  }

  return (
    <section
      className={cn(
        'py-16 px-6',
        variantClasses[variant as keyof typeof variantClasses],
      )}
    >
      <div className="container mx-auto">
        <div className={cn('max-w-4xl', variant === 'centered' && 'mx-auto')}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          {description && <p className="text-lg mb-8 opacity-90">{description}</p>}
          {links && links.length > 0 && (
            <div className={cn('flex gap-4', variant === 'centered' && 'justify-center')}>
              {links.map((item, index) => (
                <CMSLink key={index} {...item.link} invertColors />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}



