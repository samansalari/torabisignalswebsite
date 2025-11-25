import type { CollectionConfig } from 'payload'
import { HeroBlock } from '@/blocks/Hero/config'
import { FeaturesBlock } from '@/blocks/Features/config'
import { CTABlock } from '@/blocks/CTA/config'
import { TestimonialsBlock } from '@/blocks/Testimonials/config'
import { PricingBlock } from '@/blocks/Pricing/config'
import { FAQBlock } from '@/blocks/FAQ/config'
import { ContentBlock } from '@/blocks/Content/config'
import { MediaBlock } from '@/blocks/Media/config'
import { StatsBlock } from '@/blocks/Stats/config'
import { FormBlock } from '@/blocks/Form/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        FeaturesBlock,
        CTABlock,
        TestimonialsBlock,
        PricingBlock,
        FAQBlock,
        ContentBlock,
        MediaBlock,
        StatsBlock,
        FormBlock,
      ],
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}



