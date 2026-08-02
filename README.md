# NavYug — Premium Digital Experiences

NavYug is a modern web agency crafting high-performance, design-first websites and AI-powered digital products for ambitious businesses.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) + React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: React Icons + Tabler Icons
- **UI Primitives**: Radix UI / shadcn

## Project Structure

```
├── app/                  # Next.js App Router pages and layout
│   ├── globals.css       # NavYug design system & tokens
│   ├── layout.tsx        # Root layout with Google Fonts
│   └── page.tsx          # NavYug homepage composition
├── components/           # UI components
│   ├── contact/          # Cinematic contact section
│   ├── faq/              # FAQ accordion
│   ├── footer/           # Dark contrast footer
│   ├── hero/             # Hero with animated text reveal
│   ├── navbar/           # Header navbar with frosted glass
│   ├── process/          # Step-by-step process cards
│   ├── services/         # Soft tinted service cards
│   ├── showcase/         # Browser frame showcase cards
│   ├── stats/            # Value props strip
│   ├── team/             # "Meet the people behind NavYug"
│   └── ui/               # Radix/shadcn primitives
├── lib/                  # Shared utilities and constants
└── public/               # Static assets & favicons
```

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
