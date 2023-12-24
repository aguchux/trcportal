import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import jotaiStore from "@/store";
import { Provider } from "jotai";
import { menusAtom, settingsAtom, testimoniesAtom } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  const { query } = useRouter();
  const [menus, setMenus] = useAtom(menusAtom);
  const [settings, setSettings] = useAtom(settingsAtom);
  const [testimonies, setTestimonies] = useAtom(testimoniesAtom);

  const slug = query.slug as string;  

  React.useEffect(() => {
    fetch('/api/pages')
      .then((res) => res.json())
      .then((data) => {
        const rawMenus = data.data || [];
        setMenus(rawMenus)
      })
  }, [setMenus])

  React.useEffect(() => {
    fetch('/api/testimonies')
      .then((res) => res.json())
      .then((data) => {
        const rawTestimonies = data.data || [];
        setTestimonies(rawTestimonies)
      })
  }, [setTestimonies])

  React.useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        const rawSettings = data.data || [];
        setSettings(rawSettings)
      })
  }, [setSettings])


  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={jotaiStore}>
        <Component {...pageProps} settings={settings} menus={menus} testimonies={testimonies} />
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  )
}
