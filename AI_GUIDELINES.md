# AI Development Guidelines for Pegasus UI

This document provides essential guidelines for any AI agent making changes to the Pegasus UI project. Adhering to these rules is crucial to maintain code quality, prevent breaking changes, and ensure a consistent user experience.

## 1. Project Overview

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with shadcn/ui components.
- **Architecture:** The application is structured with a main layout (`src/app/layout.tsx`) that uses a `PageWrapper` component to conditionally render different UI elements based on the current page. This is the core mechanism for creating distinct experiences between pages like the Dashboard and the Editor.

## 2. Core Components & Logic

Before making any changes, it is vital to understand these key components:

- **`src/components/ui/page-wrapper.tsx`**: This is the most critical component for layout logic. It controls which sidebars and UI elements are visible on a given page.
  - **Rule:** Any request to add or remove a major UI element (like a sidebar) from a specific page should be implemented here. Do **not** add layout logic directly into individual page files.

- **`src/components/ui/code-editor.tsx`**: This is a versatile component used on both the Dashboard and the Editor pages. It is designed to be configurable through props.
  - **Props:**
    - `display`: Controls the header (`filePath` or `stats`).
    - `contentType`: Controls the main content area (`code` or `projects`).
  - **Rule:** If you need to change the content or header of this component for a specific page, use these props. Do **not** create a new version of the component.

- **`src/lib/mock-data.ts`**: All static data used for demonstration (e.g., the project list) is stored here.
  - **Rule:** Do not hardcode data directly into components. Add it to this file and import it where needed. This keeps the components clean and ready for a real API connection.

## 3. Golden Rules for Making Changes

1.  **Don't Repeat Yourself (DRY):** Before creating a new component, check if an existing one can be made configurable with props to achieve the desired result. The `CodeEditor` is a prime example of this principle.

2.  **Respect the Layout Abstraction:** All top-level layout decisions (like showing/hiding the `RightSidebar` or `FileManager`) are handled by `PageWrapper`. Do not bypass this.

3.  **Maintain UI/UX Consistency:** The Dashboard and Editor have distinct but related UIs. Pay close attention to requests to make them look similar or different, and use the existing components and props to achieve this.

4.  **No Hardcoded Data:** All mock or static data should reside in `src/lib/mock-data.ts`.

## 4. MANDATORY: Update These Guidelines

After you have successfully completed a task that introduces a new architectural pattern, a new core reusable component, or a change in the existing logic described above, you **must** update this `AI_GUIDELINES.md` file to reflect the change.

- **Example:** If you add a new configurable sidebar, document its props and its role in the layout here.

By following these guidelines, you will ensure the project remains robust, maintainable, and easy to work with for future AI agents.
