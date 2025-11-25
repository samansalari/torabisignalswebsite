/**
 * Seed Script for CardioCare Analyser
 * 
 * This script creates sample data for testing the theme.
 * Run with: npm run payload seed
 */

import { getPayload } from 'payload'
import config from '@/payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Seeding database...')

  try {
    // Create sample media (you'll need to have actual images in your media folder)
    console.log('📸 Creating sample media...')
    
    // Create sample pages
    console.log('📄 Creating sample pages...')

    const homePage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Home',
        slug: 'home',
        layout: [
          {
            blockType: 'hero',
            heading: 'Welcome to CardioCare Analyser',
            subheading: 'Advanced cardiac care analysis and monitoring solutions for healthcare professionals',
            variant: 'centered',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/contact',
                  label: 'Get Started',
                  appearance: 'primary',
                },
              },
            ],
          },
          {
            blockType: 'features',
            heading: 'Powerful Features',
            description: 'Everything you need for comprehensive cardiac care analysis',
            columns: 'three',
            features: [
              {
                icon: 'heart',
                title: 'Real-time Monitoring',
                description: 'Monitor patient vitals in real-time with advanced analytics',
              },
              {
                icon: 'chart-breakout-circle',
                title: 'Advanced Analytics',
                description: 'Get detailed insights with our AI-powered analysis tools',
              },
              {
                icon: 'shield-tick',
                title: 'HIPAA Compliant',
                description: 'Fully compliant with healthcare data security standards',
              },
            ],
          },
          {
            blockType: 'stats',
            heading: 'Trusted by Healthcare Professionals',
            stats: [
              {
                value: '10,000+',
                label: 'Patients Monitored',
                description: 'Daily active monitoring',
              },
              {
                value: '99.9%',
                label: 'Uptime',
                description: 'Reliable service',
              },
              {
                value: '50+',
                label: 'Hospitals',
                description: 'Using our platform',
              },
              {
                value: '24/7',
                label: 'Support',
                description: 'Always available',
              },
            ],
          },
          {
            blockType: 'cta',
            heading: 'Ready to Transform Your Cardiac Care?',
            description: 'Join thousands of healthcare professionals using CardioCare Analyser',
            variant: 'centered',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/contact',
                  label: 'Request Demo',
                  appearance: 'primary',
                },
              },
            ],
          },
        ],
        meta: {
          title: 'CardioCare Analyser - Advanced Cardiac Care Solutions',
          description: 'Leading cardiac care analysis and monitoring platform for healthcare professionals',
        },
        publishedAt: new Date().toISOString(),
      },
    })

    console.log('✅ Home page created:', homePage.id)

    // Create About page
    const aboutPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'About Us',
        slug: 'about',
        layout: [
          {
            blockType: 'hero',
            heading: 'About CardioCare Analyser',
            subheading: 'Revolutionizing cardiac care through technology and innovation',
            variant: 'default',
          },
          {
            blockType: 'content',
            content: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    tag: 'h2',
                    version: 1,
                    children: [
                      {
                        type: 'text',
                        text: 'Our Mission',
                        version: 1,
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    version: 1,
                    children: [
                      {
                        type: 'text',
                        text: 'We are dedicated to improving cardiac care through innovative technology solutions.',
                        version: 1,
                      },
                    ],
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            maxWidth: 'md',
          },
        ],
        meta: {
          title: 'About Us - CardioCare Analyser',
          description: 'Learn about our mission to revolutionize cardiac care',
        },
        publishedAt: new Date().toISOString(),
      },
    })

    console.log('✅ About page created:', aboutPage.id)

    // Update Header global
    console.log('🔝 Updating header...')
    await payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'reference',
              reference: { relationTo: 'pages', value: homePage.id },
              label: 'Home',
            },
          },
          {
            link: {
              type: 'reference',
              reference: { relationTo: 'pages', value: aboutPage.id },
              label: 'About',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/contact',
              label: 'Contact',
            },
          },
        ],
      },
    })

    // Update Footer global
    console.log('🔽 Updating footer...')
    await payload.updateGlobal({
      slug: 'footer',
      data: {
        columns: [
          {
            heading: 'Product',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/features',
                  label: 'Features',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/pricing',
                  label: 'Pricing',
                },
              },
            ],
          },
          {
            heading: 'Company',
            links: [
              {
                link: {
                  type: 'reference',
                  reference: { relationTo: 'pages', value: aboutPage.id },
                  label: 'About',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/contact',
                  label: 'Contact',
                },
              },
            ],
          },
          {
            heading: 'Legal',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/privacy',
                  label: 'Privacy Policy',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/terms',
                  label: 'Terms of Service',
                },
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} CardioCare Analyser. All rights reserved.`,
      },
    })

    console.log('✅ Seeding completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }

  process.exit(0)
}

seed()



