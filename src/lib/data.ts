import { getPayload } from 'payload'
import config from '@/payload.config'
import { draftMode } from 'next/headers'
import type { Page } from '@/payload-types'

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const payload = await getPayload({ config })
  const { isEnabled: isDraft } = await draftMode()

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 2,
      draft: isDraft,
    })

    return docs[0] || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function getAllPages(): Promise<Page[]> {
  const payload = await getPayload({ config })

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      depth: 0,
      limit: 100,
    })

    return docs
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

export async function getGlobal(slug: 'header' | 'footer') {
  const payload = await getPayload({ config })
  const { isEnabled: isDraft } = await draftMode()

  try {
    const global = await payload.findGlobal({
      slug,
      depth: 2,
      draft: isDraft,
    })

    return global
  } catch (error) {
    console.error(`Error fetching global ${slug}:`, error)
    return null
  }
}



