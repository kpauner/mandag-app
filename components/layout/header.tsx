import React from "react";
import Link from "next/link";
import Icons from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import VisuallyHide from "@/components/ui/visually-hide";
import AuthForm from "@/features/auth/components/auth-form";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="relative bg-bg py-2">
      <div className="flex justify-between items-center p-4 px-10">
        <Link href="/">
          <Icons.logo className="h-10 fill-primary/90" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-bold font-sans uppercase">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <AuthForm />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="neutral" size="lg">
                <Icons.home className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <VisuallyHide>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHide>
              <SheetHeader>
                <div className="flex justify-center mb-8">
                  <Icons.logo className="h-8" />
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/features"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
