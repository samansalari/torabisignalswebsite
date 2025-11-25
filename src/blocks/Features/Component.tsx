import React from 'react'
import type { FeaturesBlock as FeaturesBlockType } from '@/payload-types'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cx'

export const FeaturesBlock: React.FC<FeaturesBlockType> = (props) => {
  const { heading, description, features, columns = 'three' } = props

  const gridClasses = {
    two: 'md:grid-cols-2',
    three: 'md:grid-cols-3',
    four: 'md:grid-cols-2 lg:grid-cols-4',
  }

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

        {features && features.length > 0 && (
          <div
            className={cn(
              'grid gap-8',
              gridClasses[columns as keyof typeof gridClasses],
            )}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {feature.icon && (
                  <div className="mb-4">
                    <Icon name={feature.icon} className="w-12 h-12 text-blue-600" />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}



