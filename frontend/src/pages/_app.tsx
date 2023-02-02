import type { AppProps } from "next/app";
import { wrapper } from "@/store";
// html Body 부분

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
