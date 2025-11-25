import React, { Fragment } from 'react'
import { blockComponents } from '@/blocks'

interface Block {
  blockType: string
  [key: string]: any
}

interface RenderBlocksProps {
  blocks?: Block[] | null
}

export const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const Block = blockComponents[block.blockType]
        if (!Block) {
          console.warn(`Block type "${block.blockType}" not found`)
          return null
        }
        return <Block key={index} {...block} />
      })}
    </Fragment>
  )
}



