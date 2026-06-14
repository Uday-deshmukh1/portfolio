# 🚀 Deployment Guide - Portfolio on Cloudflare

## Prerequisites

1. **Node.js** (v18+) - [Download here](https://nodejs.org/)
2. **Cloudflare Account** (free) - [Sign up](https://dash.cloudflare.com/sign-up)
3. **Git** - [Download here](https://git-scm.com/)

---

## Step 1: Install Dependencies

```bash
cd portfolio
npm install
```

## Step 2: Test Locally

```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## Step 3: Set Up Cloudflare

### 3a. Cloudflare Turnstile (Bot Protection)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Turnstile** in the sidebar
3. Click **Add Site**
4. Enter your domain (or `localhost` for testing)
5. Choose **Managed** widget type
6. Copy the **Site Key** and **Secret Key**

### 3b. Cloudflare Web Analytics

1. Go to **Analytics & Logs** → **Web Analytics**
2. Click **Add a site**
3. Enter your domain
4. Copy the **token** from the JS snippet

### 3c. Create `.env.local` File

Copy the example and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-actual-site-key
TURNSTILE_SECRET_KEY=your-actual-secret-key
NEXT_PUBLIC_CF_ANALYTICS_TOKEN=your-analytics-token
NEXT_PUBLIC_CONTACT_WORKER_URL=https://portfolio-contact-worker.your-subdomain.workers.dev
CONTACT_EMAIL=your-email@example.com
```

---

## Step 4: Deploy to Cloudflare Pages

### Option A: Using Git (Recommended)

1. Push your code to GitHub/GitLab
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
6. Add environment variables from your `.env.local`
7. Click **Save and Deploy**

### Option B: Direct Upload

```bash
npm run build
npx wrangler pages deploy .next
```

---

## Step 5: Deploy Contact Form Worker

```bash
# Login to Cloudflare
npx wrangler login

# Set secrets (never put these in code!)
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put CONTACT_EMAIL
npx wrangler secret put ALLOWED_ORIGIN

# Deploy the worker
npx wrangler deploy worker/contact-form.ts
```

After deploying, update `NEXT_PUBLIC_CONTACT_WORKER_URL` in your Cloudflare Pages environment variables with the Worker URL.

---

## Step 6: Optional - Set Up KV for Rate Limiting

```bash
# Create a KV namespace
npx wrangler kv namespace create "RATE_LIMIT_KV"

# Copy the ID from the output and add it to wrangler.toml
# Then redeploy the worker
npx wrangler deploy worker/contact-form.ts
```

---

## 📝 Environment Variables Summary

| Variable | Where to Set | Description |
|----------|-------------|-------------|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Pages env vars | Turnstile widget key (public) |
| `TURNSTILE_SECRET_KEY` | Pages env vars + Worker secrets | Turnstile verification key |
| `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` | Pages env vars | Cloudflare Analytics token |
| `NEXT_PUBLIC_CONTACT_WORKER_URL` | Pages env vars | Your Worker URL |
| `CONTACT_EMAIL` | Worker secrets | Your email for notifications |
| `ALLOWED_ORIGIN` | Worker secrets | Your portfolio domain |

---

## 🔧 Troubleshooting

**Build fails on Cloudflare?**
- Ensure Node.js version is set to 18+ in Pages settings
- Check that no Vercel-only features are used

**Turnstile not loading?**
- Verify the site key is correct
- Check CSP headers allow `challenges.cloudflare.com`

**Contact form not working?**
- Verify the Worker URL is correct
- Check Worker logs: `npx wrangler tail`

---

## 🎯 Custom Domain

1. Go to your Pages project settings
2. Click **Custom domains**
3. Add your domain
4. Update DNS records as instructed
