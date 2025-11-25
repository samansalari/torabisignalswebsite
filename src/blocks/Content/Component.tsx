import React from 'react'
import type { ContentBlock as ContentBlockType } from '@/payload-types'
import { RichText } from '@/components/RichText'
import { cn } from '@/utils/cx'

export const ContentBlock: React.FC<ContentBlockType> = (props) => {
  const { content, maxWidth = 'md' } = props

  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <section className="py-24 px-6">
      <div className={cn('mx-auto prose dark:prose-invert', maxWidthClasses[maxWidth as keyof typeof maxWidthClasses])}>
        <RichText content={content} />
      </div>
    </section>
  )
}



