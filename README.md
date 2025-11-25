# CardioCare Analyser - Payload CMS Theme

A modern, flexible landing page theme built with Payload CMS 3.0, Next.js 15, and Tailwind CSS.

## Features

- 🎨 **10 Pre-built Blocks**: Hero, Features, CTA, Testimonials, Pricing, FAQ, Content, Media, Stats, and Form
- 🚀 **Payload CMS 3.0**: Code-first headless CMS with Next.js native integration
- ⚡ **Next.js 15**: Latest App Router with React Server Components
- 💎 **TypeScript**: Fully typed with strict mode
- 🎭 **Tailwind CSS**: Modern styling with dark mode support
- 📝 **Lexical Editor**: Rich text editing experience
- 🔍 **SEO Ready**: Meta tags, OpenGraph, and dynamic sitemap support
- 📱 **Responsive**: Mobile-first design approach

## Quick Start

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database (or MongoDB)

### Installation

1. **Clone and install dependencies:**

```bash
cd cardiocareanalyser
npm install
# or
bun install
```

2. **Set up environment variables:**

Copy `.env.example` to `.env` and configure:

```bash
DATABASE_URI=postgresql://user:password@localhost:5432/cardiocare
PAYLOAD_SECRET=your-secret-key-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

3. **Run database migrations:**

```bash
npm run payload migrate
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Access the admin panel:**

Navigate to `http://localhost:3000/admin` and create your first user.

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public-facing pages
│   │   ├── [slug]/page.tsx  # Dynamic page routes
│   │   ├── page.tsx         # Home page
│   │   └── layout.tsx       # Frontend layout
│   └── (payload)/           # Admin panel
│       └── admin/
├── blocks/                  # Block components
│   ├── Hero/
│   ├── Features/
│   ├── CTA/
│   ├── Testimonials/
│   ├── Pricing/
│   ├── FAQ/
│   ├── Content/
│   ├── Media/
│   ├── Stats/
│   └── Form/
├── collections/             # Payload collections
│   ├── Pages.ts
│   ├── Media.ts
│   └── Users.ts
├── components/              # Reusable components
│   ├── Media/
│   ├── Link/
│   ├── RichText/
│   ├── Icon/
│   ├── Header/
│   └── Footer/
├── globals/                 # Global configurations
│   ├── Header.ts
│   └── Footer.ts
├── lib/                     # Utilities
│   └── data.ts
└── payload.config.ts        # Payload CMS config
```

## Available Blocks

### 1. Hero Block
Main banner with headline, subheadline, CTA buttons, and background media.
- Variants: Default, Centered, Split

### 2. Features Block
Grid of feature cards with icons, titles, and descriptions.
- Column options: 2, 3, or 4 columns

### 3. CTA (Call-to-Action) Block
Conversion-focused sections with buttons.
- Variants: Default, Centered, Banner

### 4. Testimonials Block
Customer quotes with attribution and ratings.
- Variants: Grid, Carousel, Single

### 5. Pricing Block
Pricing tiers with feature comparison.
- Highlighted tier support

### 6. FAQ Block
Accordion-style questions and answers.

### 7. Content Block
Rich text content sections with Lexical editor.
- Max width options: sm, md, lg, xl, full

### 8. Media Block
Images and videos with captions.
- Aspect ratio options: Auto, Square, Video, Wide

### 9. Stats Block
Key metrics and numbers display.

### 10. Form Block
Contact/lead capture forms with customizable fields.

## Usage

### Creating a New Page

1. Go to `/admin/collections/pages`
2. Click "Create New"
3. Add a title and slug
4. Use the Layout Builder to add blocks
5. Configure SEO metadata
6. Save and publish

### Customizing Globals

**Header:**
- Navigate to `/admin/globals/header`
- Upload a logo
- Add navigation items
- Save changes

**Footer:**
- Navigate to `/admin/globals/footer`
- Upload a logo
- Configure footer columns with links
- Add copyright text
- Save changes

## Development

### Generate TypeScript Types

After making changes to collections or blocks:

```bash
npm run generate:types
```

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Adding a New Block

1. Create `src/blocks/YourBlock/config.ts`
2. Create `src/blocks/YourBlock/Component.tsx`
3. Add to `src/blocks/index.ts`
4. Add to Pages collection in `src/collections/Pages.ts`
5. Run `npm run generate:types`

### Styling

All blocks use Tailwind CSS. Customize colors and styles in `tailwind.config.js` and component files.

## Technologies

- [Payload CMS](https://payloadcms.com/) - Headless CMS
- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lexical](https://lexical.dev/) - Rich Text Editor
- [PostgreSQL](https://www.postgresql.org/) - Database

## License

MIT

## Support

For issues and questions, please refer to the [Payload CMS documentation](https://payloadcms.com/docs).
