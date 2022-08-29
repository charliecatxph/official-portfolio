import "../styles/globals.css";

// react
import { useEffect } from "react";

// router
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
