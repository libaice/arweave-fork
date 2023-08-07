import "@/styles/tailwind.css";
import "focus-visible";
import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
function usePrevious(value) {
  let ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function App({ Component, pageProps }) {
  let previousPathName = usePrevious(router.pathname);

  return (
    <>
      <Head></Head>
      <Header></Header>
    </>
  );
}
