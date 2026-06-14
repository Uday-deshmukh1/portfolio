# 🚀 Portfolio - Uday Patel

A production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and Three.js. Deployed on the Cloudflare ecosystem.

## ✨ Features

- **Three.js Particle Background** - Interactive 3D particles that respond to mouse
- **Framer Motion Animations** - Smooth entrance animations and micro-interactions
- **Cloudflare Turnstile** - Bot protection without annoying CAPTCHAs
- **Cloudflare Analytics** - Privacy-friendly, no cookies needed
- **Responsive Design** - Mobile, tablet, laptop, desktop, and 4K support
- **Secure Contact Form** - XSS protection, input sanitization, rate limiting
- **Lighthouse 95+** - Optimized for performance

## 🛠️ Tech Stack

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Three.js / React Three Fiber
- Cloudflare Pages + Workers

## 🏃 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router pages and API routes
├── components/    # React components (Hero, About, Skills, etc.)
├── lib/           # Constants (your data) and utilities
└── types/         # TypeScript type definitions
worker/            # Cloudflare Worker for contact form
```

## 📝 Customization

**Edit your info:** Open `src/lib/constants.ts` and update your details - name, bio, skills, projects, experience, and social links. All in one file!

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete Cloudflare deployment instructions.

## 📄 License

MIT License
