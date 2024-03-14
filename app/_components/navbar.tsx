import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { NavigationMenuDemo } from "./navigation-menu"

export const Navbar = () => {
  return (
    <div className="border">
        <div className="flex justify-around items-center mb-4 mt-4">
            <Logo />

            <NavigationMenuDemo />
        </div>
    </div>
  )
}
