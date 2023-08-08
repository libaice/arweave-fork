import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  const useStateWithLocalStorage = (localStorageKey) => {
    let localStorage;
    if (typeof window !== "undefined") {
      localStorage = window.localStorage;
    } else {
      localStorage = null;
      console.log("localStorage is not available");
    }

    const [value, setValue] = useState(
      localStorage
        ? localStorage.getItem(localStorageKey) === null
          ? null
          : localStorage.getItem(localStorageKey) === "null"
          ? null
          : localStorage.getItem(localStorageKey) === "true"
          ? true
          : false
        : null
    );
    useEffect(() => {
      if (localStorage) {
        localStorage.setItem(localStorageKey, value);
      }
    }, [value, localStorageKey, localStorage]);

    return [value, setValue];
  };

  const [userPreference, setUserPreference] =
    useStateWithLocalStorage("user-preference");

  useEffect(() => {
    if (userPreference === null) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [userPreference]);

  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-20 sm:py-40"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end"></div>
      </div>
    </>
  );
}
