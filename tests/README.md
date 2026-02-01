# Tests Directory

This directory contains test files for the Site Erectus Plus project.

## Test Structure

Organize tests to mirror your source structure:

```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
├── e2e/           # End-to-end tests
└── fixtures/      # Test data and fixtures
```

## Running Tests

```bash
npm test
```

## Writing Tests

### Guidelines

- Write clear, descriptive test names
- Test one thing per test case
- Use setup and teardown appropriately
- Mock external dependencies
- Aim for good test coverage

### Example Test Structure

```javascript
describe('Feature Name', () => {
  beforeEach(() => {
    // Setup
  });

  it('should do something specific', () => {
    // Arrange
    // Act
    // Assert
  });

  afterEach(() => {
    // Cleanup
  });
});
```

## Testing Tools

Common testing frameworks you might use:
- Jest
- Mocha + Chai
- Jasmine
- Cypress (for E2E)
- Puppeteer (for browser testing)

## Continuous Integration

Tests should run automatically in CI/CD pipelines before merging code.
