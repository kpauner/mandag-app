"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import BlurIn from "@/components/blur-in";
import AvatarsDisplay from "@/components/avatars-display";
import { avatars } from "@/constants/landing";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MotionDiv = motion.div;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <div className="z-0 relative min-h-screen w-full overflow-hidden bg-bg">
      <MotionDiv
        className="relative z-10 flex flex-col items-center justify-start min-h-screen space-y-6 px-4 pt-16 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="z-20 flex flex-row items-center justify-center"
        >
          <p className="text-sm text-muted-foreground italic tracking-normal max-w-2xl mx-auto z-10">
            Currently in public beta!
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-row w-full lg:w-auto max-w-3xl flex-wrap justify-center gap-4 text-5xl md:text-7xl gap-y-10 pb-8"
        >
          <BlurIn
            word="Hver uge "
            className="font-family  z-10 py-2"
            duration={1}
          />
          <BlurIn
            word="starter med"
            className="font-family  z-10 py-2"
            duration={1}
          />
          <BlurIn
            word="mandag tirsdag"
            className="font-family  z-10 py-2"
            duration={1}
          />
        </motion.div>

        <motion.h2
          className="text-lg  text-opacity-60 tracking-normal text-center max-w-2xl mx-auto z-10 font-sans"
          variants={itemVariants}
        >
          A modern, intuitive habit tracking and daily planning application
          built with Next.js that helps you build better habits and organize
          your day effectively.
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="z-20 flex flex-row items-center justify-center"
        >
          <AvatarsDisplay avatars={avatars} />
          <p className="text-sm text-muted-foreground tracking-normal ml-4 max-w-2xl mx-auto z-10">
            already serving <br />
            <span className="font-bold text-black italic">1000+ </span>users
            worldwide
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="z-20 flex flex-row gap-4"
        >
          <Link
            href="/signup"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            Get Started
          </Link>
          <Link
            href="/dashboard"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Learn More
          </Link>
        </motion.div>
      </MotionDiv>
    </div>
  );
}
