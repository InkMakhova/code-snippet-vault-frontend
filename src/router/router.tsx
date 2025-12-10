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
import { SnippetPageSkeleton } from "../pages/SnippetPage/SnippetPageSkeleton/SnippetPageSkeleton.tsx";

function SnippetsPageWithSuspense() {
  return (
    <Suspense fallback={<SnippetsPageSkeleton />}>
      <SnippetsPage />
    </Suspense>
  );
}

function SnippetPageWithSuspense() {
  return (
    <Suspense fallback={<SnippetPageSkeleton />}>
      <SnippetPage />
    </Suspense>
  );
}

// Root route uses PageLayout
export const rootRoute = createRootRoute({
  component: PageLayout,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SnippetsPageWithSuspense,
});

export const snippetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'snippets/$snippetId',
  component: SnippetPageWithSuspense,
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
