import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  labels: {
    singular: 'Features',
    plural: 'Features',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Icon name from @untitledui/icons (e.g., "heart", "chart-breakout-circle")',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: 'three',
      options: [
        { label: 'Two Columns', value: 'two' },
        { label: 'Three Columns', value: 'three' },
        { label: 'Four Columns', value: 'four' },
      ],
    },
  ],
}



