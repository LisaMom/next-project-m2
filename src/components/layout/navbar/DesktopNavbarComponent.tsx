

"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import { menuList } from "@/lib/menu-list";
import { MenuItem } from "./NavbarComponent";

export default function DesktopNavbarComponent() {
  return (
    <nav className="hidden grid-cols-[1fr_auto_1fr] items-center lg:grid">
      <a
        href={'/'}
        className="flex items-center gap-2 justify-self-start"
      >
        <Image
          src={"https://cdn.shadcnblocks.com/shadcnblocks/images/logo/shadcnblocks-logo.svg"}
          className="max-h-8 dark:invert"
          alt={"logo"}
          width={200}
          height={200}
        />

      </a>
      {/* navigation menu-list */}
      <NavigationMenu className="justify-self-center">
        <NavigationMenuList>
          {menuList.map((item) => renderMenuItem(item))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* login and register button */}
      <div className="flex gap-2 justify-self-end">
        <Button variant="outline" size="sm" render={<a href={'/login'} />} nativeButton={false}>Login</Button>
        <Button size="sm" render={<a href={'/register'} />} nativeButton={false}>Register</Button>
      </div>
    </nav>
  )
}

// render url and name of each pages
export const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.name}>
      <NavigationMenuLink href={item.url} >{item.name}</NavigationMenuLink>
    </NavigationMenuItem>
  );
}