# Storybook Component Library


[![Chromatic](https://img.shields.io/badge/chromatic-tested-blue)](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com)

A collection of reusable React components built with Storybook and published on NPM.

## Features

- 🎨 8 customizable UI components
- 📖 Full documentation in Storybook
- 🧪 Visual testing via Chromatic
- 🏷 TypeScript support
- 📦 Published as NPM package

## Components

| Component | Description | Chromatic Demo |
|-----------|-------------|----------------|
| Alert | Notification messages | [View](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com/?path=/story/components-alert--success) |
| Avatar | User profile images | [View](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com/?path=/story/components-avatar--default) |
| Badge | Status indicators | [View](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com/?path=/story/components-badge--primary) |
| Button | Interactive buttons | [View](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com/?path=/story/components-button--primary) |
| Card | Content containers | [View](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com/?path=/story/components-card--default) |
| Input | Form inputs | [View](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com/?path=/story/components-input--default) |
| Modal | Dialog windows | [View](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com/?path=/story/components-modal--default) |
| Spinner | Loading indicators | [View](https://685158151a242e7107c611f5-bpcadihyno.chromatic.com/?path=/story/components-spinner--default) |

## Installation

```bash
npm install storybook-component-library
```

## Usage

```jsx
import { Button, Alert } from 'storybook-component-library';

function App() {
  return (
    <>
      <Button variant="primary">Click Me</Button>
      <Alert variant="success">Operation completed</Alert>
    </>
  );
}
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/NuzhaIrfan/storybook-component-library.git
cd storybook-component-library
```

2. Install dependencies:
```bash
npm install
```

3. Run Storybook locally:
```bash
npm run storybook
```

4. Run Chromatic tests:
```bash
npm run chromatic
```

## Publishing Updates

1. Bump version:
```bash
npm version patch # or minor/major
```

2. Build and publish:
```bash
npm run build
npm publish
```

## License

MIT © Nuzha