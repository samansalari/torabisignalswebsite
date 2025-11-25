import React from 'react'
import Image from 'next/image'
import type { Media as MediaType } from '@/payload-types'

interface MediaProps {
  resource: number | MediaType
  className?: string
  priority?: boolean
}

export const Media: React.FC<MediaProps> = ({ resource, className, priority }) => {
  if (typeof resource === 'number') {
    return null
  }

  const { url, alt, width, height } = resource

  if (!url) {
    return null
  }

  return (
    <Image
      src={url}
      alt={alt || ''}
      width={width || 1200}
      height={height || 800}
      className={className}
      priority={priority}
    />
  )
}



