# Quick Reference Guide

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
npm run payload migrate

# Start development server
npm run dev

# Generate TypeScript types
npm run generate:types

# Build for production
npm run build

# Start production server
npm start
```

## 📍 Important URLs

- Frontend: `http://localhost:3000`
- Admin Panel: `http://localhost:3000/admin`
- API: `http://localhost:3000/api`

## 📦 Available Blocks

| Block | Purpose | Variants |
|-------|---------|----------|
| Hero | Main banner | Default, Centered, Split |
| Features | Feature showcase | 2, 3, 4 columns |
| CTA | Call-to-action | Default, Centered, Banner |
| Testimonials | Reviews | Grid, Carousel, Single |
| Pricing | Pricing tables | - |
| FAQ | Questions | Accordion |
| Content | Rich text | sm, md, lg, xl, full width |
| Media | Images/Videos | Auto, Square, Video, Wide |
| Stats | Key metrics | 4-column |
| Form | Lead capture | Custom fields |

## 🗂️ Key Files

| File | Purpose |
|------|---------|
| `src/payload.config.ts` | Main Payload configuration |
| `src/collections/Pages.ts` | Pages collection definition |
| `src/blocks/*/config.ts` | Block field definitions |
| `src/blocks/*/Component.tsx` | Block React components |
| `src/globals/Header.ts` | Header configuration |
| `src/globals/Footer.ts` | Footer configuration |
| `src/lib/data.ts` | Data fetching utilities |
| `.env` | Environment variables |

## 🎨 Styling Quick Tips

### Tailwind Classes
```tsx
// Common patterns used in blocks
className="py-24 px-6"              // Section padding
className="container mx-auto"       // Container
className="text-4xl font-bold"      // Heading
className="bg-gray-50 dark:bg-gray-900" // Background with dark mode
```

### Component Variants
```tsx
// Use cn() utility for conditional classes
className={cn(
  'base-classes',
  variant === 'primary' && 'primary-classes',
  variant === 'secondary' && 'secondary-classes'
)}
```

## 🔧 Common Tasks

### Add a New Block
1. Create `src/blocks/NewBlock/config.ts`
2. Create `src/blocks/NewBlock/Component.tsx`
3. Add to `src/blocks/index.ts`
4. Add to `src/collections/Pages.ts`
5. Run `npm run generate:types`

### Add a New Collection
1. Create `src/collections/NewCollection.ts`
2. Add to `src/payload.config.ts`
3. Run `npm run generate:types`

### Add a New Global
1. Create `src/globals/NewGlobal.ts`
2. Add to `src/payload.config.ts`
3. Run `npm run generate:types`

### Update Existing Block
1. Edit `src/blocks/[BlockName]/config.ts` for fields
2. Edit `src/blocks/[BlockName]/Component.tsx` for display
3. Run `npm run generate:types`

## 📝 Content Management

### Creating a Page
1. Admin → Collections → Pages → Create New
2. Add title (e.g., "Home")
3. Add slug (e.g., "home")
4. Add blocks via Layout Builder
5. Configure SEO in Meta section
6. Save & Publish

### Updating Header
1. Admin → Globals → Header
2. Upload logo (optional)
3. Add/edit navigation items
4. Save changes

### Updating Footer
1. Admin → Globals → Footer
2. Upload logo (optional)
3. Add footer columns with links
4. Set copyright text
5. Save changes

## 🐛 Troubleshooting

### Database Connection Failed
- Check `DATABASE_URI` in `.env`
- Ensure database is running
- Verify credentials

### TypeScript Errors
```bash
npm run generate:types
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
PORT=3001 npm run dev
```

## 📚 Environment Variables

```env
# Required
DATABASE_URI=postgresql://user:pass@localhost:5432/dbname
PAYLOAD_SECRET=your-secret-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional
S3_BUCKET=your-bucket
S3_REGION=us-east-1
S3_ACCESS_KEY_ID=your-key
S3_SECRET_ACCESS_KEY=your-secret
```

## 🔑 Key Concepts

### Blocks
Reusable content sections that can be arranged in any order on a page.

### Collections
Data structures for content types (Pages, Media, Users, etc.)

### Globals
Site-wide settings that appear once (Header, Footer, Settings)

### Relationships
Link between collections (e.g., Page → Media, Link → Page)

### Depth
How deep to fetch related data (0 = IDs only, 1 = one level, 2 = two levels)

## 🎯 Next Steps

1. ✅ Install and setup
2. ✅ Create first admin user
3. ✅ Create "Home" page
4. ✅ Configure header navigation
5. ✅ Configure footer
6. ✅ Add content blocks
7. ✅ Upload media
8. ✅ Configure SEO
9. ✅ Test responsive design
10. ✅ Deploy to production

## 📞 Getting Help

- 📖 Read [SETUP.md](./SETUP.md) for detailed setup
- 📖 Read [README.md](./README.md) for overview
- 📖 Read [THEME_OVERVIEW.md](./THEME_OVERVIEW.md) for architecture
- 🌐 Visit [Payload Docs](https://payloadcms.com/docs)
- 💬 Join [Payload Discord](https://discord.gg/payload)

---

**Happy Building! 🚀**



