import React from 'react'
import type { TestimonialsBlock as TestimonialsBlockType } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utils/cx'

export const TestimonialsBlock: React.FC<TestimonialsBlockType> = (props) => {
  const { heading, testimonials, variant = 'grid' } = props

  const renderStars = (rating?: number | null) => {
    if (!rating) return null
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              'w-5 h-5',
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300',
            )}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {heading && (
          <h2 className="text-4xl font-bold text-center mb-16">{heading}</h2>
        )}

        {testimonials && testimonials.length > 0 && (
          <div
            className={cn(
              variant === 'grid' && 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
              variant === 'single' && 'max-w-4xl mx-auto',
            )}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              >
                {renderStars(testimonial.rating)}
                <blockquote className="text-lg mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  {testimonial.avatar && (
                    <Media
                      resource={testimonial.avatar}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    {testimonial.role && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}



