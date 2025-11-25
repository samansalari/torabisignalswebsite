import React from 'react'
import type { MediaBlock as MediaBlockType } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utils/cx'

export const MediaBlock: React.FC<MediaBlockType> = (props) => {
  const { media, caption, aspectRatio = 'auto' } = props

  const aspectRatioClasses = {
    auto: '',
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
  }

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <figure>
          <div
            className={cn(
              'overflow-hidden rounded-lg',
              aspectRatioClasses[aspectRatio as keyof typeof aspectRatioClasses],
            )}
          >
            <Media resource={media} className="w-full h-full object-cover" />
          </div>
          {caption && (
            <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  )
}



