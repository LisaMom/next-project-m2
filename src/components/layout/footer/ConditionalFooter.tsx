"use client";

import { usePathname } from "next/navigation";
import FooterComponent from "@/components/FooterComponent";

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) {
    return null;
  }

  return <FooterComponent />;
}
