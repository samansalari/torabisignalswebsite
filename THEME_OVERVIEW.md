# CardioCare Analyser - Payload CMS Theme Overview

## 🎯 Theme Description

A production-ready, fully-featured Payload CMS 3.0 theme designed for building modern landing pages and marketing websites. Built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Key Features

### 📦 10 Pre-built Landing Page Blocks

1. **Hero Block** - Eye-catching main banner
    - 3 Variants: Default, Centered, Split
    - Media support (images/videos)
    - Multiple CTA buttons
    - Configurable appearance

2. **Features Block** - Showcase product features
    - 2-4 column layouts
    - Icon support (@untitledui/icons)
    - Grid or list display

3. **CTA Block** - Call-to-action sections
    - 3 Variants: Default, Centered, Banner
    - Multiple button styles
    - Background customization

4. **Testimonials Block** - Customer reviews
    - Grid, Carousel, or Single layout
    - Star ratings
    - Avatar images
    - Author attribution

5. **Pricing Block** - Pricing tables
    - Highlighted tier support
    - Feature lists
    - Custom CTAs per tier

6. **FAQ Block** - Accordion questions
    - Interactive expand/collapse
    - SEO-friendly structure

7. **Content Block** - Rich text content
    - Lexical editor integration
    - Configurable max-width
    - Typography support

8. **Media Block** - Images and videos
    - Multiple aspect ratios
    - Captions
    - Optimized loading

9. **Stats Block** - Key metrics
    - 4-column layout
    - Large number display
    - Descriptions

10. **Form Block** - Lead capture
    - Dynamic field types
    - Validation
    - Success states

### 🏗️ Architecture

#### Collections

- **Pages**: Dynamic page builder with layout blocks
- **Media**: Image/video uploads with optimization
- **Users**: Authentication and admin access

#### Globals

- **Header**: Site-wide navigation and branding
- **Footer**: Multi-column footer with links

#### Components

- **Media**: Next.js Image optimization wrapper
- **CMSLink**: Smart link component (internal/external)
- **RichText**: Lexical content renderer
- **Icon**: Dynamic icon loader
- **RenderBlocks**: Block renderer system
- **Header/Footer**: Global components

### 🎨 Design System

#### Typography

- Display headings (XS to 2XL)
- Body text variants
- Custom Tailwind classes

#### Colors

- Primary: Blue-600
- Secondary: Gray-600
- Success: Green-500
- Warning: Yellow-400
- Error: Red-500
- Dark mode support

#### Components

- Buttons: Primary, Secondary, Outline
- Forms: Input, Textarea, Select
- Cards: Shadow variants
- Grid: Responsive columns

### 🔧 Technical Stack

```json
{
    "CMS": "Payload CMS 3.8.1",
    "Framework": "Next.js 15",
    "Language": "TypeScript 5.9",
    "Styling": "Tailwind CSS 4.1.11",
    "Database": "PostgreSQL (or MongoDB)",
    "Editor": "Lexical",
    "Image Optimization": "Next.js Image + Sharp"
}
```

### 📁 Project Structure

```
cardiocareanalyser/
├── src/
│   ├── app/
│   │   ├── (frontend)/          # Public pages
│   │   │   ├── [slug]/          # Dynamic routes
│   │   │   ├── page.tsx         # Home page
│   │   │   ├── layout.tsx       # Frontend layout
│   │   │   └── not-found.tsx    # 404 page
│   │   └── (payload)/           # Admin panel
│   │       ├── admin/
│   │       │   ├── [[...segments]]/page.tsx
│   │       │   └── importMap.js
│   │       └── layout.tsx
│   │
│   ├── blocks/                  # Block components
│   │   ├── Hero/
│   │   │   ├── config.ts        # Block definition
│   │   │   └── Component.tsx    # React component
│   │   ├── Features/
│   │   ├── CTA/
│   │   ├── Testimonials/
│   │   ├── Pricing/
│   │   ├── FAQ/
│   │   ├── Content/
│   │   ├── Media/
│   │   ├── Stats/
│   │   ├── Form/
│   │   └── index.ts             # Block registry
│   │
│   ├── collections/             # CMS collections
│   │   ├── Pages.ts             # Pages collection
│   │   ├── Media.ts             # Media collection
│   │   └── Users.ts             # Users collection
│   │
│   ├── components/              # Reusable components
│   │   ├── Media/index.tsx
│   │   ├── Link/index.tsx
│   │   ├── RichText/index.tsx
│   │   ├── Icon/index.tsx
│   │   ├── RenderBlocks/index.tsx
│   │   ├── Header/index.tsx
│   │   └── Footer/index.tsx
│   │
│   ├── globals/                 # Global configs
│   │   ├── Header.ts
│   │   └── Footer.ts
│   │
│   ├── lib/                     # Utilities
│   │   ├── data.ts              # Data fetching
│   │   ├── utils.ts             # Helper functions
│   │   └── seed.ts              # Sample data seeder
│   │
│   ├── utils/                   # Utility functions
│   │   └── cx.ts                # Class name merger
│   │
│   ├── styles/                  # Global styles
│   │   ├── globals.css
│   │   ├── theme.css
│   │   └── typography.css
│   │
│   ├── payload.config.ts        # Payload configuration
│   └── payload-types.ts         # Generated types
│
├── public/                      # Static assets
├── .env.example                 # Environment template
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── README.md                    # Quick start guide
├── SETUP.md                     # Detailed setup
├── CHANGELOG.md                 # Version history
└── THEME_OVERVIEW.md           # This file
```

### 🚀 Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Configure environment:**

    ```bash
    cp .env.example .env
    # Edit .env with your database credentials
    ```

3. **Run migrations:**

    ```bash
    npm run payload migrate
    ```

4. **Start development:**

    ```bash
    npm run dev
    ```

5. **Access admin panel:**
    ```
    http://localhost:3000/admin
    ```

### 📝 Content Management

#### Creating Pages

1. Go to Admin → Collections → Pages
2. Click "Create New"
3. Add title and slug
4. Use Layout Builder to add blocks
5. Configure block settings
6. Set SEO metadata
7. Publish

#### Managing Globals

- **Header**: Logo, navigation items
- **Footer**: Logo, columns, copyright

### 🎨 Customization

#### Adding New Blocks

1. Create block config in `src/blocks/[BlockName]/config.ts`
2. Create component in `src/blocks/[BlockName]/Component.tsx`
3. Register in `src/blocks/index.ts`
4. Add to Pages collection
5. Generate types: `npm run generate:types`

#### Styling

- Edit Tailwind config: `tailwind.config.ts`
- Customize block styles in component files
- Add global styles in `src/styles/`

#### Collections

- Create new collections in `src/collections/`
- Update `payload.config.ts`
- Generate types

### 🔐 Security Features

- CSRF protection
- XSS prevention
- SQL injection protection (via Payload ORM)
- Password hashing
- Rate limiting
- Secure headers

### 📊 SEO Features

- Dynamic meta tags
- OpenGraph support
- Structured data ready
- Sitemap generation
- robots.txt support
- Image optimization

### 🌐 Deployment

#### Vercel (Recommended)

```bash
vercel --prod
```

#### Other Platforms

- Set environment variables
- Build: `npm run build`
- Start: `npm start`

### 📚 Resources

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

### 🤝 Contributing

This is a theme template. Fork and customize for your needs!

### 📄 License

MIT License - See LICENSE file for details

### 🆘 Support

- Check SETUP.md for installation help
- Read README.md for quick start
- Visit Payload Discord for CMS-specific questions

---

**Built with ❤️ using Payload CMS By Saman**
