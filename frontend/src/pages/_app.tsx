import "@/styles/globals.css";
import type { AppProps } from "next/app";
// html Body 부분

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
