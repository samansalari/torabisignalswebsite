# Setup Guide - CardioCare Analyser Payload CMS Theme

## Installation Steps

### 1. Install Dependencies

```bash
npm install
# or
bun install
# or
pnpm install
```

### 2. Database Setup

**For PostgreSQL:**

```bash
# Create a new database
createdb cardiocare

# Or using psql
psql -U postgres
CREATE DATABASE cardiocare;
\q
```

**For MongoDB:**

```bash
# Start MongoDB
mongosh
use cardiocare
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Database Connection
DATABASE_URI=postgresql://postgres:password@localhost:5432/cardiocare
# For MongoDB: mongodb://localhost:27017/cardiocare

# Payload Secret (generate a random string)
PAYLOAD_SECRET=your-very-long-random-secret-key-here

# Server URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**Generate a secure secret:**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Run Database Migrations

```bash
npm run payload migrate
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Admin Panel: `http://localhost:3000/admin`

### 6. Create First Admin User

1. Navigate to `http://localhost:3000/admin`
2. Fill in the registration form
3. Create your first admin account

### 7. Create Your First Page

1. Go to **Collections → Pages**
2. Click **Create New**
3. Set title to "Home" and slug to "home"
4. Add blocks using the Layout Builder
5. Configure SEO metadata
6. Click **Save** and **Publish**

### 8. Configure Header & Footer

**Header:**
1. Go to **Globals → Header**
2. Upload logo (optional)
3. Add navigation items
4. Save changes

**Footer:**
1. Go to **Globals → Footer**
2. Upload logo (optional)
3. Configure footer columns
4. Add copyright text
5. Save changes

## Development Workflow

### Generate TypeScript Types

After making changes to collections, blocks, or globals:

```bash
npm run generate:types
```

### Build for Production

```bash
npm run build
npm start
```

## Creating Content

### Page Structure

Each page can contain multiple blocks arranged in any order:

1. **Hero** - Main banner section
2. **Features** - Product/service features
3. **CTA** - Call-to-action sections
4. **Testimonials** - Customer reviews
5. **Pricing** - Pricing plans
6. **FAQ** - Frequently asked questions
7. **Content** - Rich text content
8. **Media** - Images and videos
9. **Stats** - Key statistics
10. **Form** - Contact forms

### Block Configuration

Each block has its own configuration options:

- **Variants**: Different visual layouts
- **Styling**: Colors, spacing, alignment
- **Content**: Text, images, links
- **Behavior**: Interactive elements

## Troubleshooting

### Database Connection Issues

If you see database connection errors:

1. Check your `DATABASE_URI` in `.env`
2. Ensure PostgreSQL/MongoDB is running
3. Verify database credentials
4. Check if the database exists

### Port Already in Use

If port 3000 is already in use:

```bash
# Use a different port
PORT=3001 npm run dev
```

### Build Errors

1. Delete `.next` folder and `node_modules`
2. Clear cache: `npm cache clean --force`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

### TypeScript Errors

Generate fresh types:

```bash
npm run generate:types
```

## Next Steps

1. **Customize Blocks**: Edit block components in `src/blocks/`
2. **Add Collections**: Create new collections in `src/collections/`
3. **Styling**: Update Tailwind config and component styles
4. **Deploy**: Deploy to Vercel, Netlify, or your hosting provider

## Resources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

For issues specific to this theme, check the README.md file.
For Payload CMS issues, visit the [Payload Discord](https://discord.gg/payload).



