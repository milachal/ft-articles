/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */
import "../styles/styles.scss";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
