import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'media',
  interfaceName: 'MediaBlock',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'aspectRatio',
      type: 'select',
      defaultValue: 'auto',
      options: [
        { label: 'Auto', value: 'auto' },
        { label: 'Square (1:1)', value: 'square' },
        { label: 'Video (16:9)', value: 'video' },
        { label: 'Wide (21:9)', value: 'wide' },
      ],
    },
  ],
}



