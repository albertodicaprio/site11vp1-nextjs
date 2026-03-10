# Phases Quick Reference

Quick lookup guide for each phase. Use this checklist to track progress.

## Phase 1: Setup & Foundation ✅ COMPLETED
**Goal**: Initialize project, local dev works
**Time estimate**: 30-45 minutes

Quick tasks:
- [x] Run `create-next-app` with TypeScript, Tailwind, App Router
- [x] Verify `npm run dev` works on localhost:3000
- [x] Create folder structure (`app/`, `components/`, `lib/`, `data/`, `public/`)
- [x] Set up `.env.local` template
- [x] Verify Tailwind CSS working

**Done when**: Dev server runs, no errors, ready for Phase 2 ✅

---

## Phase 2: Layout & Navigation
**Goal**: Responsive layout with working hamburger menu
**Time estimate**: 1-1.5 hours

Quick tasks:
- [ ] Create `app/layout.tsx` (root layout)
- [ ] Create `components/Navigation.tsx` (logic for nav)
- [ ] Create `components/MobileMenu.tsx` (hamburger drawer)
- [ ] Create 4 placeholder pages (home, weather, trip, private)
- [ ] Test navigation on mobile (375px) and desktop (1440px)
- [ ] Verify hamburger menu appears/disappears at breakpoint

**Done when**: All pages linked, hamburger works, responsive tested

---

## Phase 3: Pages - Static Content
**Goal**: All 5 pages built with static content
**Time estimate**: 2-2.5 hours

Quick tasks for each page:
- [ ] **Landing**: Exam countdown, holidays list, trip teaser
- [ ] **Weather**: Static mockup weather display
- [ ] **Trip**: Placeholder daily itinerary
- [ ] **Private**: Login form placeholder, activity form
- [ ] Test responsive layout (375px, 768px, 1440px)

**Done when**: All pages display content, responsive layout verified

---

## Phase 4: Data Layer
**Goal**: Hardcoded data, pages use real data from files
**Time estimate**: 1-1.5 hours

Quick tasks:
- [ ] Create `data/events.ts` (exams, holidays)
- [ ] Create `data/tripDays.ts` (Locarno itinerary)
- [ ] Update landing page to use events data
- [ ] Update trip page to use trip data
- [ ] Add activity state to private page
- [ ] Verify data displays correctly

**Done when**: All pages use real data, activity form works

---

## Phase 5: API Integration
**Goal**: Weather API connected, real data displayed
**Time estimate**: 1-1.5 hours

Quick tasks:
- [ ] Create `lib/weather.ts` (Open-Meteo client)
- [ ] Update weather page to fetch live data
- [ ] Handle loading & error states
- [ ] Set up caching (ISR or similar)
- [ ] Test API calls, verify network requests
- [ ] Test on production build locally

**Done when**: Weather page displays real Nyon weather

---

## Phase 6: Deployment
**Goal**: Live on Vercel, auto-deploy working
**Time estimate**: 30-45 minutes

Quick tasks:
- [ ] Run `npm run build` locally, verify success
- [ ] Connect GitHub to Vercel (if not already done)
- [ ] Replace placeholder dates with real dates (exam, holidays, trip)
- [ ] Push to GitHub main branch
- [ ] Monitor Vercel build
- [ ] Test production URL
- [ ] Verify auto-deploy on next change

**Done when**: Website live on Vercel, auto-deploy working

---

## Total Time Estimate
5-7 hours of focused development time

## Testing After Each Phase
Before moving to the next phase:
1. Run locally: `npm run dev` (no errors)
2. Check TypeScript: `npx tsc --noEmit` (no errors)
3. Check ESLint: `npx eslint .` (no warnings)
4. Test responsive: DevTools at 375px, 768px, 1440px
5. Test all navigation
6. Commit to Git

---

## Key Dates to Update (Phase 6)

Replace placeholder dates in `data/events.ts` and `data/tripDays.ts`:

- [ ] Next exam date
- [ ] Holiday dates
- [ ] Class trip date range and daily itinerary
- [ ] Nyon coordinates (if school location specific)

---
