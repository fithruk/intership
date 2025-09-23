import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

interface ReactQueryProviderProps {
  children: ReactNode;
}

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
      },
    },
  });

<<<<<<< HEAD
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
=======
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
};

export default ReactQueryProvider;
