import React from 'react'
import {
  JSXConvertersFunction,
  RichText as PayloadRichText,
} from '@payloadcms/richtext-lexical/react'

interface RichTextProps {
  content: any
  className?: string
}

export const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  if (!content) {
    return null
  }

  return (
    <div className={className}>
      <PayloadRichText data={content} />
    </div>
  )
}



