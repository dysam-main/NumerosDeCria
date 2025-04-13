import React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/articles" className="flex items-center gap-2">
          <span className="text-xl font-bold">Números de la Cría</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div className="hidden md:flex gap-6">
            <Link href="/articles" className="text-sm font-medium hover:underline underline-offset-4">
              Articles
            </Link>
            {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link> */}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/articles" className="hover:underline">
                  Articles
                </Link>
                <Link href="#" className="hover:underline">
                  Categories
                </Link>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
