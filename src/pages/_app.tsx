import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import jotaiStore from "@/store";
import { Provider } from "jotai";


const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <Provider store={jotaiStore}>
          <Component {...pageProps} />
        </Provider>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  )
}
