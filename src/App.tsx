import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Styles, Loader } from "@design-system";
import { QueryClient, QueryClientProvider } from "react-query";
import { router } from "./routes";

const App: React.FunctionComponent = () => {
  const queryClient = new QueryClient();

  return (
      <>
        <Styles.GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <React.Suspense fallback={<Loader />}>
              <ThemeProvider theme={Styles.Theme}>
                <RouterProvider router={router} />
              </ThemeProvider>
          </React.Suspense>
        </QueryClientProvider>
      </>
    )
  };

export default App;
