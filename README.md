# Project Vijay Manual Dashboard

Production-grade interactive research dashboard and execution manual for Project Vijay, focused on Oracle AI Database systems evaluation, performance engineering, and in-database ML strategy.

Live site:
- https://yashcsv.github.io/Project_Vijay_Manual_Dashboard/

Repository:
- https://github.com/yashcsv/Project_Vijay_Manual_Dashboard

## 1. Product Overview

Project Vijay Manual Dashboard is a multi-page React application that transforms research artifacts into:

- An evaluator-focused analytical dashboard
- A detailed 12-stage execution manual
- A profile-driven Contact Us experience

The app is designed as a decision-support and execution system, not a static report. It prioritizes measurable outcomes, clear architecture signals, and deployment reliability.

## 2. Core Capabilities

- Multi-route SPA with hash routing for static hosting compatibility
	- Dashboard route
	- Manual route
	- Contact route
- Rich data storytelling with charts, KPI cards, risk matrix, and evidence mapping
- Dark and light theme support with persistent user preference
- Editorial design language with semantic color system and highlight surfaces
- Mobile + desktop navigation modes
- Automated CI/CD to GitHub Pages

## 3. Architecture

### 3.1 Frontend Stack

- React 18
- Vite 5
- React Router DOM 6
- Tailwind CSS 3
- Framer Motion
- Recharts
- TanStack Table
- Zustand

### 3.2 Runtime Layout

- Root shell: route-aware application shell and theme initialization
- Dashboard view: research insights, metrics, risk analysis, verdict
- Manual view: 12-stage operational playbook with acceptance gates
- Contact view: profile and collaboration intent section

### 3.3 Data Model

Single-source structured data object in src/data/dashboardData.js containing:

- meta
- sections
- kpis
- insights
- charts
- metricsTable
- risks
- hiddenSignals
- verdict
- glossary
- manualSteps

This design ensures deterministic rendering, easy validation, and low coupling between content and presentation.

## 4. Route Map

- #/
	- Main dashboard with hero, insights, quantitative evidence, architecture summary, risk section, hidden signals, verdict
- #/manual
	- End-to-end stage-based implementation manual with objectives, actions, outputs, and acceptance criteria
- #/contact
	- Contact profile with highlighted visual treatment and internship/collaboration intent

## 5. Theme System

Theme is controlled through CSS variables and Zustand state.

- Default theme: light
- Alternate theme: dark
- Persistence: localStorage key dashboard-theme
- Toggle entry point: top navigation control

Design tokens cover:

- Background layers
- Text hierarchy
- Accent and semantic colors
- Border and shadow levels
- Highlight gradients for emphasis panels

## 6. Project Structure

```text
dashboard/
	.github/workflows/deploy.yml
	src/
		components/
			charts/
			layout/
			sections/
			ui/
		data/
			dashboardData.js
		hooks/
		store/
		styles/
	vite.config.js
	package.json
```

## 7. Local Development

### 7.1 Prerequisites

- Node.js 18+
- npm 9+

### 7.2 Install and Run

```bash
npm install
npm run dev
```

Default local URL:

- http://localhost:5173/

### 7.3 Build and Preview

```bash
npm run build
npm run preview
```

## 8. Deployment Strategy

### 8.1 Hosting Target

- GitHub Pages (repository pages)

### 8.2 Base Path Configuration

Vite base is configured in vite.config.js:

- /Project_Vijay_Manual_Dashboard/

This is mandatory for correct asset resolution on repository subpath hosting.

### 8.3 CI/CD Workflow

GitHub Actions workflow:

- Trigger: push to main or manual dispatch
- Build: npm ci and npm run build
- Artifact: dist upload
- Deploy: actions/deploy-pages

Workflow file:

- .github/workflows/deploy.yml

## 9. Quality and Reliability Practices

- Deterministic content rendering via centralized data object
- Build verification before push
- Route isolation for major content surfaces
- Theme compatibility checks for both light and dark modes
- Static-host-safe routing and asset path strategy

## 10. Performance Notes

- Build is successful with large bundle warning due to rich charting and UI dependencies
- Current architecture favors feature completeness and readability over aggressive code splitting
- Future optimization options:
	- Lazy-load route-level pages
	- Split chart libraries into async chunks
	- Add bundle analysis and budget enforcement

## 11. Security and Data Handling

- No secrets or API keys embedded in runtime source
- No server-side data collection in current architecture
- External profile links open safely using rel=noreferrer

## 12. Troubleshooting Guide

### 12.1 Blank Page on GitHub Pages

Symptoms:

- HTML loads but app remains blank

Likely cause:

- Incorrect Vite base path causing JS/CSS 404 on repo subpath

Resolution:

1. Ensure vite.config.js base is /Project_Vijay_Manual_Dashboard/
2. Rebuild and push
3. Confirm GitHub Actions deployment completes successfully
4. Hard refresh browser cache

### 12.2 Route Not Opening Directly

Use hash-based URLs:

- #/
- #/manual
- #/contact

### 12.3 Theme Not Persisting

Check browser localStorage availability and verify dashboard-theme value updates.

## 13. Contribution Workflow

### 13.1 Branching

- main: deployable branch
- feature branches: preferred for non-trivial updates

### 13.2 Commit Standard

Recommended commit style:

- feat: new capability
- fix: bug or regression
- docs: documentation update
- chore: maintenance updates

### 13.3 Pull Request Expectations

- Clear change summary
- Visual proof for UI changes
- Build-pass confirmation
- Deployment impact note if applicable

## 14. Maintainer Notes

Primary owner:

- Yash Singh Thakur
- Email: yashsinghthakur69@gmail.com
- GitHub: https://github.com/yashcsv
- LinkedIn: https://www.linkedin.com/in/yash-thakur-ggits/

## 15. License

No explicit license file is currently included.

If public reuse is intended, add a LICENSE file (MIT, Apache-2.0, or equivalent) and update this section accordingly.
