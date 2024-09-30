import ReactDOM from "react-dom/client";
import Root from './router'
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <Root />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);