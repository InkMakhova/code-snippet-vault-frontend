import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router/router.tsx";
import "./App.css";
import { ToastProvider } from "./components/Toast/Toast.tsx";

export function App() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}
