import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="mx-auto pt-40 sm:pb-20">
      <Container className="flex flex-col items-center justify-start lg:flex-row">
        <p className="text-slate-500 mt-6 text-base lg:mt-0">
          &copy; MIT License 2023. Got something to add?{" "}
          <a
            href="https://github.com/arweaveteam/arweave-org"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {" "}
            Send a PR.
          </a>
          {""}
          <Link href="/legal-policies" className="userline">
            Legal policies
          </Link>
        </p>
      </Container>
    </footer>
  );
}
