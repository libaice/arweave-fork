import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Popover } from "@headlessui/react";

const sections = [{ id: "/", title: "Discover", icon: "🏠" }];

export function NavBar({ currentPathname }) {
  let navBarRef = useRef();
  let miniMenuRef = useRef();
  let [isOpen, setIsOpen] = useState(false);

  let currentTitle =
    currentPathname &&
    sections.find((section) => section.id === currentPathname)?.title;
  if (!currentTitle) currentTitle = "Menu."; // default

  return <div></div>;
}
