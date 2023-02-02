import "../styles/global.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/store";
// html Body 부분

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
