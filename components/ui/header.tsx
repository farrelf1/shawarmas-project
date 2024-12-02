"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 w-full">
      <div className="mx-auto">
        <div className="relative flex h-14 items-center justify-between gap-3 bg-white px-3 shadow-lg">
          {/* Site branding */}
          <div className="flex flex-1 items-center ml-10">
            <Logo />
          </div>

          <ul className="flex flex-1 items-center justify-center gap-10">
            <li>
              <Link
                href="#"
                className="text-black font-normal"
              >
                  HOME
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black font-light"
              >
                  SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black font-light"
              >
                  ABOUT US
              </Link>
            </li>
          </ul>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3 mr-10">
            <li>
              <Link
                href="#"
                className="btn-sm bg-[#384B70] text-white hover:bg-[length:100%_150%] rounded-full w-32"
              >
                  Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
