import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Icons from "./icons";
export default function NavLandingMain() {
  return (
    <div className="flex justify-between items-center p-4 px-10">
      <nav className="flex gap-8 items-center font-medium text-md">
        <Link href="/">
          <Icons.logo />
        </Link>
        <Link href="/">Home</Link>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
      </nav>
      <div className="flex gap-6 items-center">
        <Button size="lg">Signup</Button>
        <Button size="lg" variant="outline">
          Login
        </Button>
      </div>
    </div>
  );
}
