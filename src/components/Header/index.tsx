import React from 'react'
import Link from 'next/link'
import { getGlobal } from '@/lib/data'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'

export const Header: React.FC = async () => {
  const header = await getGlobal('header')

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {header?.logo && typeof header.logo === 'object' && (
              <Media resource={header.logo} className="h-10 w-auto" priority />
            )}
            <span className="text-xl font-bold">CardioCare Analyser</span>
          </Link>

          {header?.navItems && header.navItems.length > 0 && (
            <nav className="hidden md:flex items-center gap-6">
              {header.navItems.map((item: NonNullable<HeaderType['navItems']>[number], index: number) => {
                const href =
                  item.link.type === 'reference' &&
                  typeof item.link.reference?.value === 'object'
                    ? `/${item.link.reference.value.slug}`
                    : item.link.url || '#'

                return (
                  <Link
                    key={index}
                    href={href}
                    target={item.link.newTab ? '_blank' : undefined}
                    rel={item.link.newTab ? 'noopener noreferrer' : undefined}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.link.label}
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}



