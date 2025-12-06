import {
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';
import { PageLayout } from '../layouts/PageLayout';
import { SnippetsPage } from '../pages/SnippetsPage/SnippetsPage.tsx';
import { SnippetPage } from "../pages/SnippetPage/SnippetPage.tsx";

// Root route uses PageLayout
const rootRoute = createRootRoute({
  component: PageLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SnippetsPage,
});

const snippetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'snippets/$snippetId',
  component: SnippetPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  snippetRoute,
]);

export const router = createRouter({ routeTree });

// 🔐 Type safety for TanStack Router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
