"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "./icon.component";
import Image from "next/image";
import items from "@utils/side-navigation-items.json";

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
              </li>
              <li className="flex items-center h-10 cursor-pointer transition-all hover:bg-black">
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
              </li>
              <li className="flex items-center h-10 cursor-pointer transition-all hover:bg-black">
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
              </li>
            </ul>
          </div>
        </div>

        {/** Pour tester l'animation */}
        <button
          type="button"
          className="text-white bg-black px-2 py-1 mt-20"
          onClick={() => setActive((prev) => !prev)}
        >
          Swipe
        </button>
      </div>

      {/** sub-side navigation */}
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
          Ma gestion commerciale
        </div>

        <>
          {/*<ul>
            <li className="flex items-center h-10 pl-4 cursor-pointer transition-all hover:bg-black02">
              Mon entreprise
            </li>
            <li className="flex items-center h-10 pl-4 cursor-pointer transition-all hover:bg-black02">
              Trésorerie
            </li>
            <li className="flex items-center h-10 pl-4 cursor-pointer transition-all hover:bg-black02">
              Rapports
            </li>
        </ul>*/}

          <div className="flex items-center h-8 pl-4 mt-2 text-[13px] font-semibold uppercase">
            Vente
          </div>
          <ul>
            <li className="flex items-center h-10 pl-4 font-light cursor-pointer transition-all hover:bg-black02">
              Clients
            </li>
            <li className="flex items-center h-10 pl-4 font-light cursor-pointer transition-all hover:bg-black02">
              Produits et services
            </li>
          </ul>

          <div className="flex items-center h-8 pl-4 mt-7 text-[13px] font-semibold uppercase">
            Depenses
          </div>
          <ul>
            <li className="flex items-center h-10 pl-4 font-light cursor-pointer transition-all hover:bg-black02">
              Fournisseurs
            </li>
          </ul>
        </>
      </div>
    </>
  );
}
