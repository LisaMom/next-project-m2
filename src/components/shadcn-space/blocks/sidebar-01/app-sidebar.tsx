"use client";

import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo/logo";
import { NavItem, NavMain } from "@/components/shadcn-space/blocks/sidebar-01/nav-main";
import { AlignStartVertical, PieChart, CircleUserRound, ClipboardList, Notebook, NotepadText, Table, Languages, Ticket } from "lucide-react";

export const navData: NavItem[] = [
  // Dashboards Section
  { label: "Dashboards", isSection: true },
  { title: "Analytics", icon: PieChart, href: "#" },

  // Pages Section
  { label: "Pages", isSection: true },
  { title: "Tables", icon: Table, href: "#" },
  { title: "Products", icon: ClipboardList, href: "/products" },
  { title: "User Profile", icon: CircleUserRound, href: "#" },


];

export function AppSidebar() {
  return (
    <Sidebar className="px-0 h-full [&_[data-slot=sidebar-inner]]:h-full">
      <div className="flex flex-col gap-6">
        {/* ---------------- Header ---------------- */}
        <SidebarHeader className="px-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <a href="/" className="w-full h-full">
                <Logo />
              </a>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* ---------------- Content ---------------- */}
        <SidebarContent className="overflow-hidden">
          <ScrollArea className="h-[calc(100vh-100px)]">
            <div className="px-4">
              <NavMain items={navData} />
            </div>
            {/* card */}
            <div className="pt-5 px-4">
              <Card className="shadow-none ring-0 bg-secondary px-4 py-6">
                <CardContent className="p-0 flex flex-col gap-3 items-center">
                  <img
                    src="https://images.shadcnspace.com/assets/backgrounds/download-img.png"
                    alt="sidebar-img"
                    width={74}
                    height={74}
                    className="h-20 w-20"
                  />
                  <div className="flex flex-col gap-4 items-center">
                    <div>
                      <p className="text-base font-semibold text-card-foreground text-center">
                        Grab Pro Now
                      </p>
                      <p className="text-sm font-regular text-muted-foreground text-center">
                        Customize your admin
                      </p>
                    </div>
                    <Button className="w-fit h-9 px-4 py-2 shadow-none cursor-pointer rounded-xl">
                      Get Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
