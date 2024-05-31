
# Shortcut Input Component

This is a standalone Angular component for capturing and validating keyboard shortcuts. It is designed to be reusable and easily integrable into any Angular application.

## Features

- **Shortcut Detection**: Captures key combinations and validates them.
- **Custom Modifiers**: Allows customization of modifier keys.
- **Control Value Accessor**: Integrates seamlessly with Angular forms.
- **Event Emission**: Emits valid shortcuts through `ngModelChange`.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [Angular CLI](https://angular.io/cli) (v11 or later)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install the dependencies:

```bash
npm install
```

### Running the Application

1. Start the development server:

```bash
ng serve
```

2. Open your browser and navigate to \`http://localhost:4200\`. You should see the \`ShortcutInputComponent\` ready for use.

## Details

This component is designed to showcase the following:

- **Component Design**: Demonstrates the creation of a standalone, reusable Angular component.
- **Event Handling**: Shows how to handle keyboard events in Angular.
- **Reactive Forms Integration**: Implements Control Value Accessor for seamless form integration.
- **Code Readability**: Emphasizes clean, readable code with appropriate comments and method names.

### Key Points

- **Focus and Blur Handling**: The component handles focus and blur events to manage its state.
- **Keydown and Keyup Handling**: It captures key combinations and validates them against a predefined set of shortcuts.
- **Validation Logic**: Contains logic to ensure only valid shortcuts are emitted and used.
