# Borealis Casa - Single Page Website

A high-end single-page website for Borealis Casa, a luxury accommodation in Oulu, Finland. Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React icons.

## Features

✅ **Hero Section** - Welcoming introduction with smooth animations and CTA button ("Varaa hiti")
✅ **Virtual Guestbook** (Virtuaalinen vieraskirja) - Horizontal carousel of guest images with paper-like rotation effects
✅ **Local Guide** (Paikallinen opas) - Two sections: Activities for families (Perheet) and romantic experiences for couples (Pariskunnat)
✅ **Accommodation Details** - Capacity information and location details
✅ **Direct Booking** (Suoravaraus) - Contact form with all required fields + direct contact info
✅ **FAQ** (UKK) - Accordion-style frequently asked questions
✅ **Footer** - Social media links (Facebook, Instagram, Threads)
✅ **Responsive Design** - Fully mobile-friendly with Tailwind CSS

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Node:** 24 (Dev Container)
- **Language:** English (code), Finnish (UI content)

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
├── index.css              # Global styles with Tailwind
├── App.css                # Additional app styles
└── components/
    ├── Hero.jsx           # Hero section with CTA
    ├── Guestbook.jsx      # Virtual guestbook carousel
    ├── LocalGuide.jsx     # Local guide sections
    ├── Accommodation.jsx  # Accommodation details
    ├── Booking.jsx        # Contact form & direct booking
    ├── FAQ.jsx            # FAQ accordion
    └── Footer.jsx         # Footer with social links

public/
├── images/
│   └── guestbook/         # Guest images for carousel
└── [other assets]
```

## Setup & Installation

### Prerequisites
- Node 24+
- npm

### Installation

```bash
npm install
```

### Development

Start the dev server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Guestbook Images

To add guest images to the virtual guestbook:

1. Place images in `public/images/guestbook/`
2. Update the `images` array in `src/components/Guestbook.jsx`

## Direct Contact Information

- **Phone:** +358 40 123 4567
- **Email:** info@borealiscasa.fi

### External Booking Links

While the main site includes a direct booking form, guests can also book through:
- **Airbnb:** https://www.airbnb.fi/rooms/799941567594105309
- **Booking.com:** https://www.booking.com/Share-CdDfwb

## Content

All user-facing website content is in **Finnish**, including:
- Section titles and headings
- Button labels
- Form fields
- FAQ content
- Footer text

Code (variable names, component logic) remains in English for developer clarity.

## Location

**Borealis Casa**
Pöllönmutka 10
Kello, Oulu
Finland

## Accommodation Details

- **Optimal Capacity:** 3-5 people
- **Maximum Capacity:** 8 people

## License

© 2024 Borealis Casa. All rights reserved.
