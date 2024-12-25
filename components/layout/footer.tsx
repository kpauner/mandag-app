import React from "react";
import Container from "./container";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { navigationConfig } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer>
      <Container innerClassName="flex flex-col md:flex-row  gap-20">
        <div className="flex flex-col  max-w-md">
          <h2 className="text-5xl font-bold font-family text-left pb-4 tracking-wide">
            No frills, just results
          </h2>
          <p className="text-sm">
            We are a team of experienced professionals who are dedicated to
            providing you with the best results.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <FooterMenu {...navigationConfig.company} />
          <FooterMenu {...navigationConfig.resources} />
          <FooterMenu {...navigationConfig.legal} />
          <FooterMenu {...navigationConfig.resources} />
          <FooterMenu {...navigationConfig.legal} />
        </div>
      </Container>
      <Separator />
    </footer>
  );
}

type FooterMenuProps = {
  title: string;
  links: { href: string; label: string }[];
};

function FooterMenu({ title, links }: FooterMenuProps) {
  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-bold font-family text-left pb-8">{title}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => {
          return (
            <Link
              prefetch={false}
              href={link.href}
              key={link.href}
              className="text-sm hover:underline cursor-not-allowed"
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
