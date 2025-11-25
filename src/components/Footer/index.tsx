import React from 'react'
import Link from 'next/link'
import { getGlobal } from '@/lib/data'
import { Media } from '@/components/Media'
import type { Footer as FooterType } from '@/payload-types'

export const Footer: React.FC = async () => {
  const footer = await getGlobal('footer')

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            {footer?.logo && typeof footer.logo === 'object' && (
              <Media resource={footer.logo} className="h-10 w-auto mb-4" />
            )}
            <p className="text-gray-400">
              Advanced cardiac care analysis and monitoring solutions
            </p>
          </div>

          {footer?.columns &&
            footer.columns.map((column: NonNullable<FooterType['columns']>[number], index: number) => (
              <div key={index}>
                {column.heading && (
                  <h3 className="font-semibold text-lg mb-4">{column.heading}</h3>
                )}
                {column.links && column.links.length > 0 && (
                  <ul className="space-y-2">
                    {column.links.map((item: NonNullable<typeof column.links>[number], i: number) => {
                      const href =
                        item.link.type === 'reference' &&
                        typeof item.link.reference?.value === 'object'
                          ? `/${item.link.reference.value.slug}`
                          : item.link.url || '#'

                      return (
                        <li key={i}>
                          <Link
                            href={href}
                            target={item.link.newTab ? '_blank' : undefined}
                            rel={item.link.newTab ? 'noopener noreferrer' : undefined}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            {item.link.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            {footer?.copyright || `© ${new Date().getFullYear()} CardioCare Analyser. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}



