# Site Erectus Plus Documentation

Welcome to the Site Erectus Plus documentation!

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Development Guide](#development-guide)
4. [Deployment](#deployment)

## Getting Started

Please refer to the main [README.md](../README.md) for installation and setup instructions.

## Project Structure

### Directory Overview

- **`src/`**: Contains all source code
  - **`css/`**: Stylesheet files
  - **`js/`**: JavaScript files
  - **`images/`**: Image assets

- **`public/`**: Public-facing files
  - Contains the main `index.html` and other static assets

- **`docs/`**: Project documentation
  - Contains guides, API documentation, and other project docs

- **`tests/`**: Test files
  - Contains unit tests, integration tests, and test utilities

## Development Guide

### Adding New Pages

1. Create a new HTML file in the `public/` directory
2. Link to existing CSS in `src/css/`
3. Add any page-specific styles as needed
4. Include JavaScript from `src/js/` as needed

### Styling Guidelines

- Main styles are in `src/css/main.css`
- Follow the existing naming conventions
- Use responsive design principles
- Test across different screen sizes

### JavaScript Best Practices

- Keep functions small and focused
- Use meaningful variable and function names
- Add comments for complex logic
- Follow ES6+ standards

## Deployment

### Prerequisites

- A web server (Apache, Nginx, etc.) or hosting service
- Node.js for build tools (if needed)

### Steps

1. Build the project (if using a build process)
2. Upload the `public/` directory to your web server
3. Ensure `src/` files are accessible if linked directly
4. Configure your server to serve `index.html` as the default page

### Recommended Hosting

- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting services

## Need Help?

- Check the [CONTRIBUTING.md](../CONTRIBUTING.md) guide
- Open an issue on GitHub
- Review existing documentation in this folder

---

Last updated: 2026-02-01
