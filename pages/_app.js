/** @format */

import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={route.asPath} />;
    </AnimatePresence>
  );
}

export default MyApp;
