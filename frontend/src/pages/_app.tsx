import "../styles/global.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/store";
import Header from "@/components/header";
// html Body 부분

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
