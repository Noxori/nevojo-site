# Nevojo Technologies — nevojo.com

Official website for **Nevojo Technologies LLC** — a multidisciplinary tech company building the future through software, AI, design, and innovation.

## Tech Stack

| Layer       | Tech                                       |
|-------------|--------------------------------------------|
| Framework   | Next.js 14 (App Router)                    |
| Styling     | Tailwind CSS + custom Nevojo brand tokens  |
| Animations  | Framer Motion (scroll-triggered)           |
| Fonts       | Syne (display) + DM Sans (body)            |
| Email       | Resend (contact form)                      |
| Validation  | Zod + React Hook Form                      |
| Deployment  | Vercel                                     |
| Repo        | github.com/Noxori                          |

## Pages

| Route                    | Page                          |
|--------------------------|-------------------------------|
| `/`                      | Homepage                      |
| `/about`                 | About Nevojo                  |
| `/divisions`             | All 4 divisions overview      |
| `/divisions/guavamatic`  | Guavamatic division page      |
| `/divisions/oryniq`      | Oryniq division page          |
| `/divisions/kazuriq`     | Kazuriq division page         |
| `/divisions/noxori`      | Noxori division page          |
| `/services`              | All services                  |
| `/blog`                  | Nevojo Insights blog index    |
| `/blog/[slug]`           | Individual blog post          |
| `/contact`               | Contact form (Resend)         |
| `/privacy`               | Privacy Policy                |
| `/terms`                 | Terms of Service              |

## Divisions

| Division      | Focus                                                    | Accent    |
|---------------|----------------------------------------------------------|-----------|
| **Guavamatic**| Tech & Software — AI, web/mobile apps, graphics          | `#00F0B5` |
| **Oryniq**    | AI Intelligence — research, intelligence tools, AI products | `#1A6EFF` |
| **Kazuriq**   | Physical Tech — custom PCs, keyboards, chip design       | `#F59E0B` |
| **Noxori**    | Premium Intelligence — elite tools, tech investment      | `#7C3AED` |

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local — add your RESEND_API_KEY

# 3. Run dev server
npm run dev
# Open http://localhost:3000

# 4. Build for production
npm run build
npm start
```

## Setting Up Resend (Contact Form)

1. Go to [resend.com](https://resend.com) and sign up
2. Add and verify your domain `nevojo.com` under Domains
3. Create an API key → copy it
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
5. Update the `from:` field in `src/app/api/contact/route.ts`:
   ```
   from: 'Nevojo Contact <hello@nevojo.com>'
   ```
6. Update the `to:` field to your receiving address

## Deploy to Vercel

### Option A — CLI
```bash
npm i -g vercel
vercel
# Follow prompts, add env vars when asked
```

### Option B — GitHub Integration
1. Push to `github.com/Noxori/nevojo-site`
2. Import repo at vercel.com
3. Add `RESEND_API_KEY` under Project Settings → Environment Variables
4. Deploy

### Connect nevojo.com Domain (Cloudflare DNS)
In Vercel → Project → Settings → Domains → Add `nevojo.com`

Then in Cloudflare DNS:
```
Type  Name  Value                    Proxy
A     @     76.76.21.21              DNS only
CNAME www   cname.vercel-dns.com     DNS only
```

## Updating Content

### Add / Edit Divisions
All division data lives in one file: `src/lib/divisions.ts`
Edit any entry — changes propagate to every page automatically.

### Add Blog Posts
Add entries to `src/lib/posts.ts`.
For full MDX support, install `next-mdx-remote` and create files in `src/content/blog/`.

### Add / Edit Services
All service data lives in `src/lib/services.ts`.

## Brand Tokens

```
Background:  #0B0D1A  (nv-dark)  — Midnight
Navy:        #12142B  (nv-navy)  — Deep Surface
Border:      #1E2047  (nv-border) — Indigo Border
Muted:       #6B6F9E  (nv-muted)  — Indigo Muted
Text:        #E8E8FF  (nv-txt)    — Soft Indigo White
Accent:      #06D6C7  (Aurora teal — primary accent)
Blue:        #1A6EFF  (Oryniq)
Gold:        #F59E0B  (Kazuriq)
Purple:      #7C3AED  (Noxori)
```

---

**Nevojo Technologies LLC** · Tech for a Connected World · Building the Future  
Wyoming, USA · hello@nevojo.com · github.com/Noxori
