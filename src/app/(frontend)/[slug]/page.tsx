import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPageBySlug, getAllPages } from '@/lib/data'
import { RenderBlocks } from '@/components/RenderBlocks'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const pages = await getAllPages()
  return pages.map((page) => ({
    slug: page.slug || '',
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    return {}
  }

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description || undefined,
    openGraph: {
      images:
        page.meta?.image && typeof page.meta.image === 'object'
          ? [{ url: page.meta.image.url || '' }]
          : [],
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return (
    <main>
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}



