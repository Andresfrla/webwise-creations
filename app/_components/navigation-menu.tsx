"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Computer from "@/components/icons/computer"
import Page from "@/components/icons/page"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "My portfolio",
    href: "https://andres-franco-portfolio.netlify.app/",
    description:
      "Here you can see all of my portfolio",
  },
  {
    title: "About BentoBox",
    href: "/about",
    description:
      "Want to know about me",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuTrigger className="button-style bg-indigo-700 text-white">
            Getting started
        </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                
                  <NavigationMenuLink asChild>
                  
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Computer />
                      <div className="mb-2 mt-4 text-lg text-indigo-700/80 font-bold">
                        Elevate you online presence with your own domain and customized Page.
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground text-justify">
                        Are you ready to stand out in the digital world? Take your online presence to the next level with your very own domain and a tailor-made web page!
                      </p>
                    </a>
                    
                  </NavigationMenuLink>
                
              </li>
              
              <ListItem className="text-indigo-700/80 font-bold hover:text-indigo-900/30" href="/services/custom-page" title="Get your own domain">
                <div className="flex flex-col">
                  <div className="font-semibold text-indigo-900">
                    The first step to start selling more with the Internet is a domain.
                  </div>
                  <div className="flex justify-end font-semibold">
                  <Page/>
                  </div>
                </div>
              </ListItem>
              <ListItem className="text-indigo-700/80 font-bold" href="/services/consulting" title="Do you need a consulting of you business?">
                <div className="font-semibold text-indigo-900">
                  Our team will evaluate your brand to increase your sales.
                </div>             
              </ListItem>
              <ListItem className="text-indigo-700/80 font-bold" href="/services/ecommerce" title="Start to sell products on Market place.">
                <div className="font-semibold text-indigo-900">
                  You will know how to start selling products on different market place.
                </div>  
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px] ">
              {components.map((component) => (
                <ListItem
                  className="text-indigo-700/80 font-bold"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  <div className="font-semibold text-indigo-900">
                    {component.description}
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
