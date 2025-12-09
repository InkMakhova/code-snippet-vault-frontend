import {
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';
import { PageLayout } from '../layouts/PageLayout';
import { SnippetsPage } from '../pages/SnippetsPage/SnippetsPage.tsx';
import { SnippetPage } from "../pages/SnippetPage/SnippetPage.tsx";
import { Suspense } from "react";
import { SnippetsPageSkeleton } from "../pages/SnippetsPage/SnippetsPageSkeleton/SnippetsPageSkeleton.tsx";

function SnippetsPageWithSuspense() {
  return (
    <Suspense fallback={<SnippetsPageSkeleton />}>
      <SnippetsPage />
    </Suspense>
  );
}

// Root route uses PageLayout
const rootRoute = createRootRoute({
  component: PageLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SnippetsPageWithSuspense,
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
