# Sarah Johnson - Life Coach Portfolio Website

A modern, responsive portfolio website for a professional life coach built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with soft color palette and smooth animations
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Modular components for easy maintenance and reusability
- **Contact Form**: Fully functional contact form with validation and loading states
- **Smooth Navigation**: Sticky navigation with smooth scrolling to sections
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Project Structure

```
src/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── contact/
│   │   ├── ContactForm.tsx   # Contact form with validation
│   │   ├── ContactHero.tsx   # Contact page hero section
│   │   └── ContactInfo.tsx   # Contact information display
│   ├── layout/
│   │   ├── Footer.tsx        # Site footer
│   │   └── Navigation.tsx    # Main navigation
│   └── sections/
│       ├── About.tsx         # About section
│       ├── CTABanner.tsx     # Call-to-action banner
│       ├── Hero.tsx          # Hero section
│       ├── Process.tsx       # How it works section
│       ├── Services.tsx      # Services section
│       └── Testimonials.tsx  # Client testimonials
```

## Pages

### Home Page (`/`)
- Hero section with compelling headline
- About section with coach introduction
- Services showcase
- Client testimonials
- Process explanation
- Call-to-action banner
- Footer with contact information

### Contact Page (`/contact`)
- Hero section with contact information
- Comprehensive contact form with validation
- Contact methods and office hours
- Response time guarantee

## Technologies Used

- **Next.js 15.5.2** - React framework with App Router
- **TypeScript** - Type safety (without explicit type annotations as requested)
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Hooks** - State management and side effects
- **Responsive Design** - Mobile-first approach

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contact Form Features

- **Form Validation**: Client-side validation for all required fields
- **Email Validation**: Proper email format checking
- **Loading States**: Visual feedback during form submission
- **Success Messages**: Confirmation after successful submission
- **Error Handling**: Clear error messages for validation failures
- **Accessibility**: Proper ARIA labels and error announcements

## Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Customization

The design system uses CSS custom properties for easy theming:
- Primary colors: Blue tones (#4299e1, #3182ce)
- Secondary color: Teal (#38b2ac)
- Accent color: Orange (#ed8936)
- Typography: Inter font family

## Deployment

This project can be deployed on any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker containers

## License

This project is for demonstration purposes. All rights reserved.
