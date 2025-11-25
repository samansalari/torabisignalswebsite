import React from 'react'
import type { PricingBlock as PricingBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utils/cx'

export const PricingBlock: React.FC<PricingBlockType> = (props) => {
  const { heading, description, tiers } = props

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {(heading || description) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {heading && (
              <h2 className="text-4xl font-bold tracking-tight mb-4">{heading}</h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
            )}
          </div>
        )}

        {tiers && tiers.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={cn(
                  'bg-white dark:bg-gray-800 p-8 rounded-lg',
                  tier.highlighted
                    ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                    : 'shadow-md',
                )}
              >
                {tier.highlighted && (
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      {tier.period}
                    </span>
                  )}
                </div>
                {tier.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{tier.description}</p>
                )}
                {tier.features && (
                  <ul className="space-y-3 mb-8">
                    {tier.features.split('\n').map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {tier.link && <CMSLink {...tier.link} className="w-full" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}



