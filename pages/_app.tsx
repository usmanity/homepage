import "../styles/globals.css";
import type { AppProps } from "next/app";

import { usePanelbear } from "@panelbear/panelbear-nextjs";

function Homepage({ Component, pageProps }: AppProps) {
  usePanelbear("ELPQ56PqXy5");
  return <Component {...pageProps} />;
}

export default Homepage;
