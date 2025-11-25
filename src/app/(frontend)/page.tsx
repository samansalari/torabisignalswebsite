import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/data'
import { RenderBlocks } from '@/components/RenderBlocks'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'CardioCare Analyser',
  description: 'Advanced cardiac care analysis and monitoring',
}

export default async function HomePage() {
  // Fetch the home page (slug: 'home' or empty)
  const page = await getPageBySlug('home')

  if (!page) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to CardioCare Analyser</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please create a page with slug &quot;home&quot; in the admin panel.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}



