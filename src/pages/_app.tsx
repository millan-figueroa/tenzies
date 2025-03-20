import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
