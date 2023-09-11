"use client";
import { useState } from "react";
import Link from "next/link";
// import { Icon } from "./icon.component";
import Image from "next/image";

export default function SideNavigation() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="fixed top-0 bottom-0 w-[220px] bg-black02">
        {/** Logo + logo Text */}
        <div>
          <Link className="block py-3 px-[15px]" href="/">
            <div className="flex items-center h-[30px]">
              <span className="mr-1">
                <Image
                  src="/images/svg/logo.svg"
                  width={26}
                  height={26}
                  alt="Logo"
                />
              </span>
              <span>
                <Image
                  src="/images/svg/logo-text.svg"
                  width={126}
                  height={30}
                  alt="Logo text"
                />
              </span>
            </div>
          </Link>
        </div>

        {/** Bouton `Nouveau` */}
        <div className="px-5 py-2">
          <button
            type="button"
            className={`flex justify-center gap-2 w-full text-white text-[12px] font-medium leading-5 border-2 rounded-3xl hover:shadow-btn transition-width duration-[450ms] ease-out delay-0 ${
              active && "w-5 border-none text-black bg-white font-bold"
            }`}
          >
            <span>+</span>
            <span className={`${active && "hidden"}`}>Nouveau</span>
          </button>
        </div>

        <button
          type="button"
          className="text-white bg-black px-2 py-1 mt-20"
          onClick={() => setActive((prev) => !prev)}
        >
          Swipe
        </button>
      </div>
      <div
        className={`absolute top-0 bottom-0 left-[220px] w-0 bg-black01 z-10 transition-width duration-[450ms] ease-out delay-0 ${
          active && "left-[60px] w-[160px]"
        }`}
      ></div>
    </>
  );
}
