export const importMap = {
  '@/blocks/Hero/Component#HeroBlock': () =>
    import('@/blocks/Hero/Component').then((m) => m.HeroBlock),
  '@/blocks/Features/Component#FeaturesBlock': () =>
    import('@/blocks/Features/Component').then((m) => m.FeaturesBlock),
  '@/blocks/CTA/Component#CTABlock': () =>
    import('@/blocks/CTA/Component').then((m) => m.CTABlock),
  '@/blocks/Testimonials/Component#TestimonialsBlock': () =>
    import('@/blocks/Testimonials/Component').then((m) => m.TestimonialsBlock),
  '@/blocks/Pricing/Component#PricingBlock': () =>
    import('@/blocks/Pricing/Component').then((m) => m.PricingBlock),
  '@/blocks/FAQ/Component#FAQBlock': () =>
    import('@/blocks/FAQ/Component').then((m) => m.FAQBlock),
  '@/blocks/Content/Component#ContentBlock': () =>
    import('@/blocks/Content/Component').then((m) => m.ContentBlock),
  '@/blocks/Media/Component#MediaBlock': () =>
    import('@/blocks/Media/Component').then((m) => m.MediaBlock),
  '@/blocks/Stats/Component#StatsBlock': () =>
    import('@/blocks/Stats/Component').then((m) => m.StatsBlock),
  '@/blocks/Form/Component#FormBlock': () =>
    import('@/blocks/Form/Component').then((m) => m.FormBlock),
}



