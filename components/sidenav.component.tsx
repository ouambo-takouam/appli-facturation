"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "./icon.component";
import itemsForSideNavigation from "@utils/side-navigation-items.json";

export default function SideNavigation() {
  const [active, setActive] = useState(false);

  const currentPath = usePathname();
  const pathObject = itemsForSideNavigation[currentPath];
  const hasKeys = Object.keys(pathObject).length > 0;

  useEffect(() => {
    if (hasKeys) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [hasKeys]);

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
              <div
                className={`absolute w-0 left-[220px] h-8 transition-all duration-[450ms] ease-out delay-0 ${
                  active && "w-[176px] left-[44px] bg-black02"
                }`}
              ></div>
            </div>
          </Link>
        </div>

        {/** Bouton `Nouveau` */}
        <div className="px-5 pt-4 pb-8">
          <button
            type="button"
            className={`flex justify-center gap-2 text-[12px] leading-5 border-2 rounded-3xl hover:shadow-btn transition-all duration-[450ms] ease-out delay-0 ${
              active
                ? "rounded-full text-black bg-white font-bold w-6"
                : "w-full text-white font-medium"
            }`}
          >
            <span>+</span>
            <span className={`${active && "hidden"}`}>Nouveau</span>
          </button>
        </div>

        {/** Elements de navigation */}
        <div>
          <div className="flex items-center mb-2">
            <button
              className={`ml-5 transition-all duration-[450ms] ease-out delay-0 ${
                !active && "hidden"
              }`}
            >
              <Icon name="hamburger" width={20} height={20} />
            </button>
            <div
              className={`flex items-center justify-between ml-5 mr-3 text-xs text-white w-full transition-width duration-[450ms] ease-out delay-0 ${
                active && "w-1 opacity-0"
              }`}
            >
              <span className="leading-3">MENU</span>
              <button>
                <Icon name="pen" width={20} height={20} color="white" />
              </button>
            </div>
          </div>

          <div className="text-gray01 text-sm">
            <ul>
              <li className="flex items-center h-10 cursor-pointer transition-all hover:bg-black">
                <Link href="/get-things-done" className="flex items-center">
                  <span className="py-2 pl-[18px] pr-2">
                    <Icon name="home" width={20} height={20} />
                  </span>
                  <span
                    className={`transition-opacity duration-300 ease-out delay-0 ${
                      active && "opacity-0"
                    }`}
                  >
                    A faire
                  </span>
                </Link>
              </li>
              <li className="flex items-center h-10 cursor-pointer transition-all hover:bg-black">
                <Link href="/business-overview" className="flex items-center">
                  <span className="py-2 pl-[18px] pr-2">
                    <Icon name="scale" width={20} height={20} />
                  </span>
                  <span
                    className={`transition-opacity duration-300 ease-out delay-0 ${
                      active && "opacity-0"
                    }`}
                  >
                    Mon entreprise
                  </span>
                </Link>
              </li>
              <li className="flex items-center h-10 cursor-pointer transition-all hover:bg-black">
                <Link href="/banking" className="flex items-center">
                  <span className="py-2 pl-[18px] pr-2">
                    <Icon name="calculator" width={20} height={20} />
                  </span>
                  <span
                    className={`transition-opacity duration-300 ease-out delay-0 ${
                      active && "opacity-0"
                    }`}
                  >
                    Ma gestion comptable
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/** sub-side navigation */}
      {hasKeys && (
        <div
          className={`absolute top-0 bottom-0 left-[220px] text-sm text-white w-0 bg-black01 z-10 transition-width duration-[450ms] ease-out delay-0 ${
            active && "left-[60px] w-[160px]"
          }`}
        >
          <div
            className={`p-4 font-bold transition-opacity duration-[400ms] ease-out delay-0  ${
              !active && "opacity-0 hidden"
            }`}
          >
            {pathObject.title}
          </div>

          <>
            {pathObject.items && (
              <ul>
                {pathObject.items.map((item) => (
                  <li
                    key={item.path}
                    className="flex items-center h-10 pl-4 cursor-pointer transition-all hover:bg-black02"
                  >
                    {item.slug}
                  </li>
                ))}
              </ul>
            )}

            {pathObject.data && (
              <>
                {pathObject.data.map((obj) => (
                  <div key={obj.subtitle}>
                    <div className="flex items-center h-8 pl-4 mt-2 text-[13px] font-semibold uppercase">
                      {obj.subtitle}
                    </div>
                    <ul>
                      {obj.items.map((item) => (
                        <li
                          key={item.path}
                          className="flex items-center h-10 pl-4 font-light cursor-pointer transition-all hover:bg-black02"
                        >
                          {item.slug}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </>
        </div>
      )}
    </>
  );
}
