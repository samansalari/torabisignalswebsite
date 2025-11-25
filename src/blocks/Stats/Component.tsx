import React from 'react'
import type { StatsBlock as StatsBlockType } from '@/payload-types'

export const StatsBlock: React.FC<StatsBlockType> = (props) => {
  const { heading, stats } = props

  return (
    <section className="py-24 px-6 bg-blue-600 text-white">
      <div className="container mx-auto">
        {heading && (
          <h2 className="text-4xl font-bold text-center mb-16">{heading}</h2>
        )}

        {stats && stats.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                {stat.description && (
                  <div className="text-blue-100 text-sm">{stat.description}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}



