import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Colors, Loader } from "@design-system";
import { QueryClient, QueryClientProvider } from "react-query";
import { router } from "./routes";

const App: React.FunctionComponent = () => {
  const queryClient = new QueryClient();

  return (
      <>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <React.Suspense fallback={<Loader />}>
              <ThemeProvider theme={Colors}>
                <RouterProvider router={router} />
              </ThemeProvider>
          </React.Suspense>
        </QueryClientProvider>
      </>
    )
  };

export default App;
