'use client'

import React, { useState } from 'react'
import type { FAQBlock as FAQBlockType } from '@/payload-types'
import { cn } from '@/utils/cx'

export const FAQBlock: React.FC<FAQBlockType> = (props) => {
  const { heading, questions } = props
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        {heading && (
          <h2 className="text-4xl font-bold text-center mb-16">{heading}</h2>
        )}

        {questions && questions.length > 0 && (
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  <svg
                    className={cn(
                      'w-5 h-5 transition-transform',
                      openIndex === index && 'rotate-180',
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}



