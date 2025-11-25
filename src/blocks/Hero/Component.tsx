import React from 'react'
import type { HeroBlock as HeroBlockType } from '@/payload-types'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utils/cx'

export const HeroBlock: React.FC<HeroBlockType> = (props) => {
  const { heading, subheading, media, links, variant = 'default' } = props

  const variantClasses = {
    default: 'text-left',
    centered: 'text-center mx-auto max-w-4xl',
    split: 'grid lg:grid-cols-2 gap-12 items-center',
  }

  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto">
        <div className={cn(variantClasses[variant as keyof typeof variantClasses])}>
          <div className={variant === 'split' ? 'order-1' : ''}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {heading}
            </h1>
            {subheading && (
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {subheading}
              </p>
            )}
            {links && links.length > 0 && (
              <div className={cn('flex gap-4', variant === 'centered' && 'justify-center')}>
                {links.map((item, index) => (
                  <CMSLink key={index} {...item.link} />
                ))}
              </div>
            )}
          </div>
          {media && variant === 'split' && (
            <div className="order-2">
              <Media resource={media} className="rounded-lg shadow-2xl" />
            </div>
          )}
        </div>
        {media && variant !== 'split' && (
          <div className="mt-12">
            <Media resource={media} className="rounded-lg shadow-2xl" />
          </div>
        )}
      </div>
    </section>
  )
}



