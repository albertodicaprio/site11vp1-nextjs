# School Class Dynamic Website - Project Goals

## Overview
Build a dynamic, responsive website for a school class (class 11VP1) at a school in Nyon, Switzerland, to consolidate class information, activities, and communication.

## Target Users
- **Primary**: Class students and teachers
- **Secondary**: Class members accessing from any device (mobile, tablet, desktop)

## Key Features

### 1. Landing Page
- Countdown to next exam(s)
- Upcoming holiday dates
- Class trip teaser with link to full details
- Clean, informative card-based layout

### 2. Weather Page
- Live weather for Nyon, Switzerland
- Current conditions display
- 24-48 hour forecast
- Powered by Open-Meteo API (free, no API key needed)

### 3. Class Trip Details Page
- Location: Locarno, Switzerland
- Daily itinerary breakdown
- Trip logistics and important information
- Activity photos/images (placeholder for now)

### 4. Private Space (Login Required)
- Simple authentication for class members
- Activity proposal submission form
- View all submitted activities
- Expandable to discussion/voting later

### 5. Navigation
- Link to external class TeamUp (weekly schedule)
- Hamburger menu on mobile (top-right)
- Full horizontal navbar on desktop
- All 5 items easily accessible

## Technical Stack
- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS (responsive, mobile-first)
- **Deployment**: Vercel + GitHub (auto-deploy on push)
- **Weather API**: Open-Meteo (free)
- **Authentication MVP**: Simple localStorage (upgrade path planned)
- **Data Storage MVP**: Hardcoded JSON + sessionStorage (database migration planned)

## Design Principles
- **Responsive**: Works seamlessly on mobile (375px), tablet (768px), desktop (1440px+)
- **Modern & Clean**: Minimal styling, focus on usability
- **Mobile-First**: Design optimized for mobile, enhanced for larger screens
- **Accessible**: Clear navigation, readable fonts, good contrast

## Development Workflow
```
Local Development → Test after each phase → Commit to GitHub → Auto-deploy to Vercel
```

## Deployment
- **Host**: Vercel (free tier sufficient)
- **Repository**: GitHub
- **Auto-deployment**: Enabled on push to main
- **Local testing**: `npm run dev` before every commit

## Future Considerations
1. Upgrade authentication to production-grade (OAuth, database)
2. Migrate activities to persistent database (PostgreSQL + Prisma)
3. Add admin panel for event management
4. Dark mode option
5. Activity voting/discussion features
6. Photo gallery or embedded media for trip details
