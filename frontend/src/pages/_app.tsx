import type { AppProps } from "next/app";
import { wrapper } from "@/store";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react";

// html Body 부분

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default wrapper.withRedux(App);
