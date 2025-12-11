# Snippet Vault — Frontend

A modern React + TypeScript frontend for the **Snippet Vault** project.  
This UI allows users to browse, search, create, edit, and delete code snippets using a clean, GitHub-style dark interface.  
The frontend communicates with the backend REST API using React Query and Axios, and includes accessibility-ready components powered by React Aria.

## 🚀 Live Deployment

Live (Vercel):  
👉 https://code-snippet-vault-frontend.vercel.app/

Backend Live (Render):  
👉 https://snippet-api-ulwt.onrender.com/

Backend API Repository:  
👉 https://github.com/InkMakhova/snippet-api

## 📦 Repository Setup

### 1. Clone the repository

**Using HTTPS:**
```bash
git clone https://github.com/InkMakhova/code-snippet-vault-frontend.git
```

**Using SSH:**
```bash
git clone git@github.com:InkMakhova/code-snippet-vault-frontend.git
```

**Using GitHub CLI:**
```bash
gh repo clone InkMakhova/code-snippet-vault-frontend
```

### 2. Enter the project folder
```bash
cd code-snippet-vault-frontend
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run development server
```bash
npm run dev
```

Open http://localhost:5173/

### 5. Build for production
```bash
npm run build
```

### 6. Preview production build
```bash
npm run preview
```

## ✨ Features

### ✔ Full CRUD UI
- Create, read, edit, delete snippets
- Edit title, language, tags, description, code
- Modal for creating snippets
- Dedicated edit page per snippet

### ✔ Filtering & Search
- Filter snippets by language
- Requests `/api/snippets?lang=value`

### ✔ Reusable Components
Includes:
- Breadcrumbs
- Header with GitHub link
- Card
- Button
- CopyButton
- Link
- Footer
- SearchForm with React Hook Form
- Toast notifications
- Accessible Modal UI
- Skeleton

### ✔ Loading States
Skeletons for:
- Snippets list
- Snippet detail page

### ✔ Accessibility & UI
- React Aria Components for accessible UI
- CSS Modules with GitHub-dark theme

## 🧭 Pages

### `/`
Snippets page with:
- search
- create modal
- listing

### `/snippets/:snippetId`
Edit snippet page with form and breadcrumbs.

### `Modal: CreateSnippetModal`
Form to create snippet.

### `Modal: DeleteSnippetModal`
Confirmation dialog.

## 🛠 Technology Stack

### **React + TypeScript**
Component architecture, type safety.

### **Tanstack query** 
https://tanstack.com/query/v5/docs/framework/react/overview

Server state management:
- Caching
- Mutations
- Suspense fetching
- Automatic invalidation

### **Tanstack router**
https://tanstack.com/router/latest/docs/framework/react/overview

Routing with loaders, params, and nested layouts.

### **React Aria Components**
https://react-spectrum.adobe.com/react-aria/components.html

Accessible UI building blocks (Buttons, Inputs, Dialogs, Tables, etc.)

### **React Hook Form**
https://react-hook-form.com/

Form state management with validation.

### **Axios**
https://axios-http.com/docs/intro

HTTP requests with error handling and interceptors.

### **Dayjs**
https://day.js.org/docs/en/installation/installation

Date formatting (`DD.MM.YYYY, HH:mm`).

### **CSS Modules**
Scoped styling, dark theme.

### **vite-plugin-svgr**
https://github.com/pd4d10/vite-plugin-svgr#readme

Import SVGs as React components.

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| npm run dev | Start dev server |
| npm run build | Production build |
| npm run lint | Run ESLint |
| npm run preview | Preview production build |

## 🔮 Future Improvements

- Pagination
- Advanced filters
- User authentication
- Tag chips UI
- Light/dark theme switcher
- Backend TypeScript transition
- Docker support
- CI/CD pipelines

## 📘 Summary

This frontend part of Snippet Vault is built using TypeScript to ensure a modern, scalable, and type-safe development workflow. Type safety dramatically reduces runtime errors, improves maintainability, and provides a much clearer development experience—especially in a multi-page application with complex forms, shared components, and server-state management.

A major architectural decision was to adopt @tanstack/react-query and @tanstack/react-router, two extremely powerful libraries that together provide robust data management and routing capabilities. React Query handles server state with caching, invalidation, background refetching, and fine-grained mutation control. To keep the codebase clean, reusable, and predictable, all API interactions are wrapped into custom hooks (e.g., useGetSnippetsQuery, useCreateSnippetMutation, useDeleteSnippetMutation). This makes each data operation declarative and isolates data logic from UI components.

The project also uses React Suspense for seamless loading states. Instead of manually tracking loading flags in every component, Suspense guarantees that a page renders only when the required data is available, keeping the UI predictable and preventing undefined or partial renders. Combined with custom skeleton components, this provides a smooth user experience.

For UI structure and accessibility, React Aria Components play a key role. They ensure consistent, accessible interactions for buttons, forms, modals, dialogs, and tables—paired with CSS Modules for a lightweight, GitHub-inspired dark theme.

Finally, a lightweight global Toast context was implemented to display success, error, and status messages throughout the app. This allows mutation hooks to report feedback without tightly coupling UI logic to the components that trigger the actions.

Overall, this project demonstrates a modern, type-secured approach to building a scalable frontend using React, TypeScript, TanStack’s ecosystem, and accessible UI primitives—resulting in a clean architecture and a highly maintainable codebase.
