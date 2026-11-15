
"use client";
import { usePathname } from "next/navigation";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";
import { Suspense } from "react";
export interface MenuItem {
  url: string;
  name: string;
}

const NavbarComponent = () => {
  return (
    <Suspense fallback={<div className="container min-h-16" />}>
      <NavbarContent />
    </Suspense>
  );
};

const NavbarContent = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/dashboard')) return null;

  return (
    <section>
      <div className="container">
        <DesktopNavbarComponent />
        <MobileNavbarComponent />
      </div>
    </section>
  );
};

export { NavbarComponent };
