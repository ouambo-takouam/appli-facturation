import SideNavigation from "@components/sidenav.component";
import TopNavigation from "@components/topnav.component";
import { ReactNode } from "react";

export default function OnBoardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SideNavigation />
      <TopNavigation />
      {children}
    </>
  );
}
