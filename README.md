# Site Erectus Plus

A modern web project with a clean, organized structure.

## Project Structure

```
siteerectusplus/
├── src/                # Source files
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── images/        # Image assets
├── public/            # Public static files
├── docs/              # Documentation
├── tests/             # Test files
├── package.json       # Project metadata and dependencies
├── .gitignore        # Git ignore rules
├── .editorconfig     # Editor configuration
└── LICENSE           # Project license
```

## Getting Started

### Prerequisites

- Node.js (recommended version 14.x or higher)
- npm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/devpeu83/siteerectusplus.git
   cd siteerectusplus
   ```

2. No additional dependencies installation needed! The server will run using npx.

### Usage

Start the development server (automatically opens in your browser):
```bash
npm start
```

Or run without auto-opening:
```bash
npm run serve
```

The site will be available at `http://localhost:8080`

### Alternative Methods

You can also serve the site using Python:
```bash
cd public
python3 -m http.server 8080
```

Or using any other static file server pointed at the `public/` directory.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on GitHub.
