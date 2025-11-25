import { HeroBlock } from './Hero/Component'
import { FeaturesBlock } from './Features/Component'
import { CTABlock } from './CTA/Component'
import { TestimonialsBlock } from './Testimonials/Component'
import { PricingBlock } from './Pricing/Component'
import { FAQBlock } from './FAQ/Component'
import { ContentBlock } from './Content/Component'
import { MediaBlock } from './Media/Component'
import { StatsBlock } from './Stats/Component'
import { FormBlock } from './Form/Component'

export const blockComponents: Record<string, React.FC<any>> = {
  hero: HeroBlock,
  features: FeaturesBlock,
  cta: CTABlock,
  testimonials: TestimonialsBlock,
  pricing: PricingBlock,
  faq: FAQBlock,
  content: ContentBlock,
  media: MediaBlock,
  stats: StatsBlock,
  form: FormBlock,
}



