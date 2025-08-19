import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// React Query Setup
/*
   1. Create a QueryClient instance
   2. Wrap your application with QueryClientProvider
   3. Add ReactQueryDevtools for easier debugging
   4. React Query Makes Data Fetching Easy
      - Handles loading, error, and success states
      - Handled caching
      - Handles race condition
*/
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
);
