# Max-Width Standardization Guide

## Overview
This application uses a standardized max-width system for consistent layout across all components.

## CSS Custom Properties

### Layout Max Widths
```scss
--max-width-container: 1000px;  // Main content container (navigation, hero, sections)
--max-width-content: 800px;     // Text content areas (about, footer, forms)
--max-width-narrow: 600px;      // Narrow content like forms and focused content
```

### Layout Padding
```scss
--padding-container: 1.25rem;   // Standard horizontal padding for containers (20px)
--padding-content: 1rem;        // Reduced padding for content areas (16px)
```

### Responsive Breakpoints
```scss
--breakpoint-sm: 480px;         // Small devices (phones)
--breakpoint-md: 768px;         // Medium devices (tablets)
--breakpoint-lg: 1024px;        // Large devices (desktops)
--breakpoint-xl: 1200px;        // Extra large devices
```

## Utility Classes

### Container Classes
```scss
.container-wide     // max-width: var(--max-width-container) + var(--padding-container)
.container-content  // max-width: var(--max-width-content) + var(--padding-content)
.container-narrow   // max-width: var(--max-width-narrow) + var(--padding-content)
```

## Padding Strategy

### Standard Container Padding (`--padding-container: 1.25rem`):
- Navigation bars
- Main content sections
- Hero sections
- Wide layout containers

### Content Padding (`--padding-content: 1rem`):
- Text content areas
- Narrow content sections
- Mobile responsive breakpoints

## Usage Guidelines

### When to use `--max-width-container` (1000px):
- Navigation bars
- Hero sections
- Main content sections
- Portfolio grids
- Tab interfaces

### When to use `--max-width-content` (800px):
- About page content
- Footer content
- Blog posts
- Text-heavy sections

### When to use `--max-width-narrow` (600px):
- Contact forms
- Login/signup forms
- Focused content areas
- Sidebar content

## Implementation Examples

### In Component SCSS:
```scss
.my-component {
  max-width: var(--max-width-container);
  margin: 0 auto;
  padding: 0 var(--padding-container);
}
```

### Using Utility Classes in HTML:
```html
<div class="container-content">
  <!-- Your content here -->
</div>
```

### Current Implementation Status:
- ✅ Header navigation: `var(--max-width-container)`
- ✅ Page container: `var(--max-width-container)`
- ✅ Footer content: `var(--max-width-content)`
- ✅ About page: `var(--max-width-content)`
- ✅ Home page sections: Uses inherited container widths

## Responsive Design
All max-width values are responsive and work with the defined breakpoints. Components should use the utility classes or CSS custom properties to maintain consistency.