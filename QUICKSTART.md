# Quick Start Guide

## Running the Site

### Option 1: Using npm (Recommended)
```bash
npm start
```
This will:
- Start a local web server on port 8080
- Automatically open the site in your default browser

### Option 2: Using npm without auto-open
```bash
npm run serve
```
Then manually navigate to: http://localhost:8080

### Option 3: Using Python
```bash
cd public
python3 -m http.server 8080
```
Then navigate to: http://localhost:8080

## Project Structure

```
public/               # All files served to the browser
├── index.html       # Main HTML file
├── css/
│   └── main.css     # Styles
├── js/
│   └── main.js      # JavaScript functionality
└── images/          # Image assets (add your images here)
```

## Making Changes

1. **Editing content**: Modify `public/index.html`
2. **Changing styles**: Edit `public/css/main.css`
3. **Adding functionality**: Update `public/js/main.js`
4. **Adding images**: Place them in `public/images/`

## Deployment

The `public/` directory contains everything needed to deploy the site. Simply upload the contents to any web hosting service:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

## Need Help?

Check the main [README.md](README.md) or open an issue on GitHub.
