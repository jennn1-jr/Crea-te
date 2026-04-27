# TODO: 
## Problem
External links (WhatsApp, TikTok, Email, GitHub, Instagram) cause the website to lose data/state when users navigate back. This happens because external links are not consistently using `target="_blank"` and `rel="noopener noreferrer"`, and some incorrectly use Next.js `<Link>` component for external URLs.

## Steps

### 1. Fix `components/contact-cta.tsx`
- [x] Replace `<Link>` for WhatsApp with `<a>` + `target="_blank"` + `rel="noopener noreferrer"`
- [x] Replace `<Link>` for Email with `<a>` + `target="_blank"` + `rel="noopener noreferrer"`

### 2. Fix `components/site-footer.tsx`
- [x] Add `target="_blank"` and `rel="noopener noreferrer"` to Email `<a>` link

### 3. Fix `components/team-section.tsx`
- [x] Add `target="_blank"` and `rel="noopener noreferrer"` to GitHub `<a>` links
- [x] Add `target="_blank"` and `rel="noopener noreferrer"` to Instagram `<a>` links

## Status: ✅ COMPLETED

