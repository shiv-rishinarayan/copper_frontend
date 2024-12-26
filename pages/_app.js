import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Loader from "@/components/Loader";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleStart = () => setLoading(true);
//     const handleComplete = () => setLoading(false);
//     const handleError = () => setLoading(false);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleError);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleError);
//     };
//   }, [router]);

//   if (loading) {
//     return <Loader />;
//   }

//   return <Component {...pageProps} />;
// }
