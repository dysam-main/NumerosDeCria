import React from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link to="/articles" className="flex items-center gap-2">
          <span className="text-xl font-bold">Knowledge Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div className="hidden md:flex gap-6">
            <Link to="/articles" className="text-sm font-medium hover:underline underline-offset-4">
              Publicaciones
            </Link>
            {/* <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link> */}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="side-right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link to="/articles" className="hover:underline">
                    Articles
                  </Link>
                  {/* <Link to="#" className="hover:underline">
                    Categories
                  </Link>
                  <Link to="#" className="hover:underline">
                    About
                  </Link> */}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
