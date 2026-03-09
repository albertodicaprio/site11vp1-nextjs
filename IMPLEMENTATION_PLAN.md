# Implementation Plan - School Class Website

## Quick Reference: 6 Phases

| Phase | Focus | Deliverable | Testing |
|-------|-------|-------------|---------|
| 1 | Setup & Foundation | Project initialized, local dev works | Dev server runs, no errors |
| 2 | Layout & Navigation | Responsive layout, hamburger menu | Menu works on mobile/desktop |
| 3 | Pages | All 5 pages created (static content) | All pages load, responsive layout |
| 4 | Data Layer | Events & trip data hardcoded | Data displays correctly |
| 5 | API Integration | Weather API connected | Weather data fetches, displays |
| 6 | Deployment | Live on Vercel | Production URL works identically |

---

## Phase 1: Project Setup & Foundation

### Goal
Initialize Next.js project with all necessary tools and configurations. Local development environment fully functional.

### Steps

**1.1: Initialize Next.js Project**
- Create project with `create-next-app`
- Configuration:
  - ✅ Use TypeScript
  - ✅ Use ESLint
  - ✅ Use Tailwind CSS
  - ✅ Use App Router (not Pages Router)
  - ✅ Do NOT use src/ directory (keep app/ at root)
- Install dependencies and verify no errors

**1.2: Set Up Git & GitHub Integration**
- Initialize Git repo (should already exist: verify with `git status`)
- Create `.env.local.example` template:
  ```
  NEXT_PUBLIC_WEATHER_API=none (placeholder)
  ```
- Add `.env.local` to `.gitignore` (should be already present)
- Test local dev server: `npm run dev`
- Should run on `http://localhost:3000` without errors

**1.3: Create Project Directory Structure**
Create the following folders (as needed):
```
/app
/components
/lib
/data
/public
/docs (for documentation)
```

**1.4: Configure Tailwind & Typography**
- Verify `tailwind.config.ts` exists
- Add responsive breakpoints (sm: 640px, md: 768px, lg: 1024px)
- Configure default fonts and colors (can be neutral for now)
- Verify Tailwind classes work: test with `bg-blue-500` on a simple element

**1.5: Verify Everything Locally**
- Run `npm run dev`
- Open `http://localhost:3000`
- Should show Next.js welcome page (or blank if already modified)
- No console errors

### Verification Tasks
1. ✅ `npm run dev` successfully starts server on port 3000
2. ✅ No TypeScript compilation errors
3. ✅ `.env.local` setup and ignored in git
4. ✅ Tailwind CSS is working (check via DevTools)
5. ✅ Directory structure created
6. ✅ Git repo ready (`.gitignore` configured)

### Deliverables
- Project initialized and running locally
- Development environment ready
- Git repo configured

---

## Phase 2: Core Layout & Navigation

### Goal
Create responsive layout with working navigation. Hamburger menu on mobile, navbar on desktop. All navigation items linked (even if pages are empty).

### Steps

**2.1: Create Root Layout Component**
- File: `app/layout.tsx`
- Contains:
  - Header with branding/logo area
  - Navigation component (to be created)
  - Footer (optional, basic)
  - Responsive padding/spacing using Tailwind
  - Metadata (title: "Class 11VP1 - School Website")

**2.2: Create Navigation Component**
- File: `components/Navigation.tsx`
- Functionality:
  - Hamburger menu button (visible only on mobile: `md:hidden`)
  - Toggle state for menu open/close
  - Responsive: hamburger on mobile, horizontal nav on desktop
  - Nav items:
    1. Home `/`
    2. Weather `/weather`
    3. Class Trip `/class-trip`
    4. Private Space `/private`
    5. TeamUp (external link)

**2.3: Create Mobile Menu Drawer Component**
- File: `components/MobileMenu.tsx`
- Functionality:
  - Slide-out drawer (or dropdown) menu
  - Shows when hamburger is clicked
  - Close button or click-outside to dismiss
  - Same menu items as desktop
  - Smooth animations (Tailwind transitions)

**2.4: Create Placeholder Pages**
- `app/page.tsx` (Homepage) - Empty for now, just heading
- `app/weather/page.tsx` - Empty for now
- `app/class-trip/page.tsx` - Empty for now
- `app/private/page.tsx` - Empty for now
- Each page extends the root layout

**2.5: Test Navigation Flow**
- All links navigate correctly
- Hamburger menu toggles on mobile viewport
- Active page highlighting (optional: use `usePathname()`)
- No broken links

### Verification Tasks
1. ✅ `npm run dev` runs without errors
2. ✅ Desktop view (1440px): horizontal navbar visible, hamburger NOT visible
3. ✅ Mobile view (375px, DevTools): hamburger menu visible, nav items accessible
4. ✅ Tablet view (768px): smooth transition from hamburger to navbar
5. ✅ All 5 navigation items clickable and navigate to correct pages
6. ✅ External TeamUp link opens in new tab
7. ✅ Current page indicator visible (highlighting or similar)

### Deliverables
- Responsive layout with working navigation
- Hamburger menu functional on mobile
- All placeholder pages created and linked

---

## Phase 3: Page Creation - Static Content

### Goal
Build all 5 pages with static content, data, and responsive layouts. Each page functional but not yet connected to APIs or database.

### Steps

**3.1: Build Landing Page (`app/page.tsx`)**
- Display:
  - **Exam Countdown**: Days until next exam (placeholder: 2024-03-15)
  - **Holidays**: List of upcoming school holidays (placeholder dates)
  - **Class Trip Teaser**: Card with trip image placeholder, "Learn more" button
- Layout: Responsive cards (1 column mobile, 2-3 columns desktop)
- Styling: Use Tailwind, light backgrounds, shadow effects

**3.2: Build Weather Page (`app/weather/page.tsx`)**
- Placeholder for now (actual API integration in Phase 5)
- Display:
  - Current weather conditions (static mockup)
  - 24-hour forecast (static mockup)
  - Location: "Nyon, Switzerland"
- Layout: Responsive grid (1 column mobile, 2+ desktop)

**3.3: Build Class Trip Page (`app/class-trip/page.tsx`)**
- Display:
  - Trip location: "Locarno, Switzerland"
  - Daily itinerary (5-7 placeholder days)
  - Each day has: date, activities, timeline
- Layout: Timeline or card-based layout, responsive
- Data: Pull from `data/tripDays.ts` (to be created in Phase 4)

**3.4: Build Private Space Page (`app/private/page.tsx`)**
- Placeholder login form (from Phase 4)
- After login, show:
  - Activity proposal form (text input, date picker)
  - List of proposed activities
- No real authentication yet, just placeholder

**3.5: Verify Responsive Layout on All Pages**
- Test at breakpoints: 375px, 768px, 1440px
- Ensure content readable and well-spaced on all sizes
- Verify images/content scale appropriately

### Verification Tasks
1. ✅ All 5 pages load without errors
2. ✅ Landing page displays exam, holidays, trip info
3. ✅ Weather page displays mockup data
4. ✅ Trip page displays daily itinerary
5. ✅ Private page displays login form placeholder
6. ✅ All pages responsive at 375px, 768px, 1440px
7. ✅ Navigation works between all pages

### Deliverables
- All 5 pages built with static content
- Responsive layouts tested and confirmed
- Data ready for integration (next phases)

---

## Phase 4: Data Layer

### Goal
Create hardcoded data structures for events, trip details, and activities. Set up component state for private space activities.

### Steps

**4.1: Create Events Data (`data/events.ts`)**
- Structure:
  ```typescript
  export const exams = [{ subject: string; date: Date }];
  export const holidays = [{ name: string; startDate: Date; endDate: Date }];
  ```
- Placeholder dates: next exam in 14 days, holidays scattered through year

**4.2: Create Trip Data (`data/tripDays.ts`)**
- Structure:
  ```typescript
  export const tripDays = [
    { day: 1; date: Date; activities: string[]; details: string }
  ];
  ```
- Placeholder itinerary: 5 days in Locarno (dates in future)

**4.3: Update Landing Page to Use Events Data**
- Import `exams` and `holidays` from `data/events.ts`
- Display real countdown calculation
- Calculate days until next exam

**4.4: Update Trip Page to Use Trip Data**
- Import `tripDays` from `data/tripDays.ts`
- Loop through days, display each day's details

**4.5: Set Up Activity State in Private Page**
- Use React `useState` to store activities
- Add activity form submission handler
- Display activities list
- Note: Data resets on page refresh (sessionStorage upgrade in Phase 5+ if needed)

### Verification Tasks
1. ✅ Data files created with placeholder data
2. ✅ Landing page displays calculated exam countdown
3. ✅ Landing page displays holidays from data
4. ✅ Trip page displays days from data
5. ✅ Private page form accepts input and displays activities
6. ✅ No TypeScript errors with data imports

### Deliverables
- Hardcoded data structures created
- All pages using real data from files
- Private space activity submission functional (local state only)

---

## Phase 5: API Integration - Weather

### Goal
Connect to Open-Meteo API. Fetch real weather data for Nyon and display on weather page.

### Steps

**5.1: Create Weather API Client (`lib/weather.ts`)**
- Function: `getWeatherForNyon()`
- API endpoint: Open-Meteo (https://open-meteo.com/)
- Coordinates for Nyon: 46.38°N, 6.24°E
- Return: current conditions + forecast data
- Error handling: return fallback/cached data on failure

**5.2: Set Up API Route (optional)**
- File: `app/api/weather/route.ts` (if needed for server-side caching)
- Or: call API directly from page component with `fetch`

**5.3: Update Weather Page**
- Import and call `getWeatherForNyon()`
- Handle loading state (spinner or skeleton)
- Handle error state (fallback message)
- Display: current temp, conditions, forecast

**5.4: Cache Strategy**
- Use Next.js ISR (Incremental Static Regeneration) or React Server Components
- Revalidate weather data every 30-60 minutes
- Prevent API rate limiting

**5.5: Test Weather Integration**
- Local dev: verify API calls work
- Check browser DevTools Network tab
- Verify weather displays correctly

### Verification Tasks
1. ✅ `npm run dev` runs, no errors
2. ✅ Weather page loads (may take a moment for API call)
3. ✅ Current weather displays for Nyon
4. ✅ Forecast displays (at least 24 hours)
5. ✅ DevTools Network shows successful API call to Open-Meteo
6. ✅ Refresh page, weather updates (or uses cache)
7. ✅ No API key in frontend code (Open-Meteo is free, public)

### Deliverables
- Weather API client created
- Real weather data integrated on weather page
- Caching strategy implemented

---

## Phase 6: Deployment & Go Live

### Goal
Deploy to Vercel with GitHub integration. Auto-deploy on push. Verify production environment works identically to local.

### Steps

**6.1: Prepare for Deployment**
- Ensure all environment variables are set (if any)
- Verify `.env.local` is NOT in Git (should be in `.gitignore`)
- Test production build locally: `npm run build`
- Verify no warnings or errors

**6.2: Connect GitHub to Vercel**
- Go to Vercel dashboard
- Connect GitHub repo (`site11vp1-nextjs`)
- Configure branch: main (auto-deploy on push)
- Leave other settings as default

**6.3: Deploy**
- Push current code to GitHub main branch: `git push origin main`
- Vercel should automatically trigger build
- Monitor build in Vercel dashboard (should take 1-3 minutes)
- Get production URL (e.g., `https://site11vp1.vercel.app`)

**6.4: Test Production**
- Open production URL in browser
- Navigate all 5 pages
- Test hamburger menu on mobile emulation
- Test weather page (should fetch real data)
- Verify responsive layout at different breakpoints

**6.5: Verify Git Workflow**
- Make small change locally
- Test with `npm run dev`
- Commit and push: `git add .`, `git commit -m "..."`, `git push origin main`
- Verify Vercel auto-deploys (watch dashboard)
- Refresh production URL, confirm change is live

### Verification Tasks
1. ✅ Local production build succeeds: `npm run build` (no errors/warnings)
2. ✅ Vercel auto-deploy triggered on GitHub push
3. ✅ Vercel build succeeds (check dashboard)
4. ✅ Production URL loads without 404/500 errors
5. ✅ All 5 pages accessible on production
6. ✅ Navigation and hamburger menu work on production
7. ✅ Weather data fetches on production
8. ✅ Responsive layout works on production

### Deliverables
- Live website on Vercel
- Auto-deployment from GitHub working
- Production environment verified

---

## File Structure Summary

```
site11vp1-nextjs/
├── app/
│   ├── layout.tsx (root layout with navigation)
│   ├── page.tsx (landing page)
│   ├── weather/
│   │   └── page.tsx
│   ├── class-trip/
│   │   └── page.tsx
│   ├── private/
│   │   └── page.tsx
│   ├── api/ (optional, for weather route)
│   │   └── weather/
│   │       └── route.ts
│   └── globals.css (Tailwind styles)
├── components/
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   └── [other reusable components]
├── lib/
│   └── weather.ts (Open-Meteo API client)
├── data/
│   ├── events.ts (exams, holidays)
│   └── tripDays.ts (Locarno itinerary)
├── public/ (static assets: images, favicon)
├── docs/
│   ├── PROJECT_GOAL.md
│   ├── IMPLEMENTATION_PLAN.md
│   └── PHASES_QUICK_REFERENCE.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local.example
├── .gitignore
└── package.json

```

---

## Environment Variables

### `.env.local.example`
```
NEXT_PUBLIC_WEATHER_API=none
```

No API keys needed for MVP (Open-Meteo is free and public).

---

## Testing Checklist - All Phases

After each phase, before moving to the next:

- [ ] `npm run dev` runs without errors
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] No ESLint warnings: `npx eslint .`
- [ ] All pages load and display expected content
- [ ] Responsive design works at 375px, 768px, 1440px
- [ ] Navigation between pages works
- [ ] Mobile hamburger menu works
- [ ] Commit to Git: `git add .`, `git commit -m "..."`
- [ ] Ready for next phase

---

## Additional Notes

- **Placeholders**: Replace exam dates, holidays, and trip dates with real values as provided
- **Authentication upgrade**: Current MVP uses simple localStorage. Upgrade path: add NextAuth.js or similar in future
- **Data persistence**: Activities currently use component state. Upgrade path: add Prisma + PostgreSQL when ready
- **Styling**: Tailwind defaults are minimal. Can add custom brand colors/logo later
- **Images**: Use placeholder images for now, replace with real photos later
