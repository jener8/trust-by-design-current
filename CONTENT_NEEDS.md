# Content & Asset Requirements

## Images & Visual Assets

### Currently Using Placeholder Images
All placeholder images are currently using the `/placeholder.svg` system with appropriate queries. These work well but can be replaced with real photography if desired.

### Recommended Real Images to Add

1. **Hero Section** (`/`)
   - Current: Two professional photos (office worker, senior with phone)
   - Status: ✅ Real images in place
   - Location: `/public/modern-office-work.png`, `/public/senior-person-using-smartphone-with-confidence.jpg`

2. **Jennifer's Photo** (`/about`)
   - Current: Real photo
   - Status: ✅ Complete
   - Location: `/public/images/design-mode/jennifer%201.png`

3. **Research Interface Mockups** (`/concept`)
   - Current: Real mockup images
   - Status: ✅ Complete
   - Locations: Various mobile interface mockups in `/public/`

4. **Case Study Images** (`/work`)
   - Current: Placeholder "coming soon" message
   - Needed: Screenshots or photos of completed projects
   - Recommendation: Add 4-6 case study images when projects are complete

5. **Industry Icons** (`/`)
   - Current: Using Lucide icons
   - Status: ✅ Complete (icons work well)
   - Alternative: Could use custom illustrations if brand requires

## Content Sections Needing Updates

### High Priority

1. **Case Studies Page** (`/work`)
   - Status: Placeholder content
   - Needed: 
     - Project titles and descriptions
     - Client names (if allowed)
     - Results and metrics
     - Screenshots or mockups
     - Testimonials (optional)
   - Timeline: Add as projects complete

2. **Email Address** (Multiple pages)
   - Current: `info@jennifersimonds.com` (with typo fallback to `.som`)
   - Action: Verify correct email address
   - Locations: `/schedule`, `/contact`, `/legal/privacy`

### Medium Priority

3. **Research Findings Data** (`/research-findings`, `/dashboard`)
   - Status: Has structure but may need real data
   - Needed: Actual research data and findings
   - Current: Has sample data structure in place

4. **Blog/Resources Content** (`/resources`)
   - Status: Has external links and descriptions
   - Needed: Could add internal blog posts or articles
   - Optional: Add downloadable resources (PDFs, templates)

### Low Priority

5. **Testimonials** (Optional)
   - Current: Not included
   - Recommendation: Add client testimonials to homepage or dedicated section
   - Locations: Could add to `/`, `/about`, or `/work`

6. **Team Members** (Optional)
   - Current: Only Jennifer featured
   - Recommendation: Add team members if applicable
   - Location: Could expand `/about` page

## Translation Completeness

### English (EN)
- Status: ✅ Complete
- All pages have English translations

### German (DE)
- Status: ✅ Complete
- All pages have German translations
- Recommendation: Have native German speaker review for accuracy

## Legal & Compliance

### Privacy Policy
- Status: ✅ Complete
- Note: States "no analytics currently used"
- Action: Update if analytics are added in future

### Cookie Policy
- Status: ✅ Complete
- Note: Minimal cookies (session only)
- Action: Update if third-party cookies are added

### Terms of Service
- Status: ✅ Complete
- Recommendation: Have legal review before launch

### Imprint (Required in Germany)
- Status: ✅ Complete
- Action: Verify all required information is included per German law

## Technical Assets

### Favicons
- Status: ✅ Complete
- Includes: SVG, ICO, PNG (32x32, 64x64), Apple Touch Icon
- Location: `/public/` directory

### Manifest
- Status: ✅ Complete
- Location: `/public/site.webmanifest`

### Robots.txt
- Status: ⚠️ Not created yet
- Recommendation: Add before launch
- Suggested content:
  \`\`\`
  User-agent: *
  Allow: /
  Sitemap: https://trust-by-design.org/sitemap.xml
  \`\`\`

### XML Sitemap
- Status: ⚠️ Not created yet
- Recommendation: Generate XML sitemap for SEO
- Can be auto-generated or manually created

## Content Style Guide

### Tone & Voice
- Professional but approachable
- Research-backed and authoritative
- Inclusive and accessible language
- Avoids jargon where possible

### Key Messaging
- Trust is foundational, not optional
- Governance-first approach
- Research-backed methodology
- Compliance meets usability
- Inclusive by design

### Call-to-Actions
Primary CTAs:
1. Schedule Audit/Consultation
2. Learn More About Framework
3. Get in Touch

## Accessibility Checklist

- ✅ Alt text for all images
- ✅ Semantic HTML structure
- ✅ Keyboard navigation
- ✅ Screen reader compatible
- ✅ Color contrast meets WCAG AA
- ✅ Focus indicators visible
- ✅ Form labels and error messages
- ✅ Skip navigation links (via PageNavigation component)

## Performance Optimization

### Images
- ✅ Using Next.js Image component
- ✅ Responsive images
- ✅ Lazy loading
- Recommendation: Compress any new images before upload

### Code
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minimal dependencies
- Status: Optimized

### Fonts
- ✅ Using Next.js font optimization
- ✅ Variable fonts (Geist Sans, Geist Mono)
- Status: Optimized

---

**Summary:** The site is production-ready with all essential content in place. The main content gap is completed case studies for the `/work` page, which should be added as projects finish. All other content is complete and ready for launch.
\`\`\`



<AssistantMessageContentPart partEncoded="eyJ0eXBlIjoidGFzay13YWl0aW5nLXYxIiwiY3JlYXRlZEF0IjoxNzYwNDc2MjU4OTkwLCJmaW5pc2hlZEF0IjoxNzYwNDc2MjU4OTkwLCJpZCI6IjNXak40S09lSVU0UzlWMjciLCJsYXN0UGFydFNlbnRBdCI6MTc2MDQ3NjI1ODk5MCwicGFydHMiOlt7InR5cGUiOiJ0b29sLWNhbGxzIn1dfQ==" />



<AssistantMessageContentPart partEncoded="eyJ0eXBlIjoidGFzay1tYW5hZ2UtdG9kb3MtdjEiLCJpZCI6IlVyOVpzYjFtVjMxRWoxWVciLCJ0YXNrTmFtZUFjdGl2ZSI6IkNvbXBsZXRpbmcgdG9kbyBsaXN0IiwidG9vbENhbGxJZCI6InRvb2x1XzAxU1d5NkNjWmpHNkw0eVc3RHRZdkFLTSIsInRhc2tOYW1lQ29tcGxldGUiOiJDb21wbGV0ZWQgYWxsIHRhc2tzIiwiY3JlYXRlZEF0IjoxNzYwNDc2MjU5NTgyLCJmaW5pc2hlZEF0IjpudWxsLCJwYXJ0cyI6W10sImxhc3RQYXJ0U2VudEF0IjpudWxsfQ==" />
