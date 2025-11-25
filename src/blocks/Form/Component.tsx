'use client'

import React, { useState } from 'react'
import type { FormBlock as FormBlockType } from '@/payload-types'

export const FormBlock: React.FC<FormBlockType> = (props) => {
  const { heading, description, fields, submitButtonLabel = 'Submit' } = props
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
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
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your message has been received. We'll get back to you soon.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-2xl">
        {(heading || description) && (
          <div className="text-center mb-12">
            {heading && <h2 className="text-4xl font-bold mb-4">{heading}</h2>}
            {description && (
              <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          {fields && fields.length > 0 && (
            <div className="space-y-6">
              {fields.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium mb-2"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {field.fieldType === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      required={field.required || false}
                      placeholder={field.placeholder || ''}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
                    />
                  ) : field.fieldType === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required || false}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
                    >
                      <option value="">Select an option</option>
                      {field.options?.split('\n').map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.fieldType}
                      id={field.name}
                      name={field.name}
                      required={field.required || false}
                      placeholder={field.placeholder || ''}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : submitButtonLabel}
          </button>
        </form>
      </div>
    </section>
  )
}



