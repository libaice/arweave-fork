import Head from "next/head";
import "@/styles/tailwind.css";
import "focus-visible";
import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";

function usePrevious(value) {
  let ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function App({ Component, pageProps, router }) {
  let previousPathName = usePrevious(router.pathname);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-183x183.png" />
        <title>Arweave - A community-driven ecosystem</title>
        <meta
          name="description"
          content="Store data permanently on the decentralized web with Arweave."
        />
      </Head>
      <Header />
      <main>
        <div className="relative pb-20 pt-10 sm:py-10">
          <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
          </div>
          <Container className="relative">
            
          </Container>
        </div>
      </main>
    </>
  );
}
