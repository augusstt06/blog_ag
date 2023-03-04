import type { AppProps } from "next/app";
import { wrapper } from "@/store";
import { SessionProvider } from "next-auth/react";
import Layout from "@/layout";
import "../styles/nav.css";

// html Body 부분

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default wrapper.withRedux(App);
