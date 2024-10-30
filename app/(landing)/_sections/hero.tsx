"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import DotPattern from "@/components/magicui/dot-pattern";
import BlurIn from "@/components/magicui/blur-in";
import AnimatedImage from "@/components/animated-image";

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
    <main>
      <div className="z-0 relative min-h-screen w-full pb-40 overflow-hidden bg-[radial-gradient(97.14%_56.45%_at_51.63%_0%,_#ffffff_0%,_#ffffff_30%,_#ffffff_100%)]">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
          )}
        />
        <MotionDiv
          className="relative z-10 flex flex-col items-center justify-start min-h-screen space-y-6 px-4 pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-row w-full lg:w-auto max-w-2xl flex-wrap"
          >
            <BlurIn
              word="Vi tager det en"
              className="font-display text-center text-5xl font-bold   mx-auto z-10"
              duration={1}
            />

            <BlurIn
              word="Mandag"
              className="font-serif bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text z-10 italic font-thin pb-1" // Added pb-1 for padding-bottom
              duration={1}
            />
            <BlurIn
              word="af gangen"
              className="font-display text-center text-5xl font-bold   mx-auto z-10"
              duration={1}
            />
          </motion.div>

          <motion.h2
            className="text-xl text-muted-foreground  text-opacity-60 tracking-normal text-center max-w-2xl mx-auto z-10"
            variants={itemVariants}
          >
            A modern, intuitive habit tracking and daily planning application
            built with Next.js that helps you build better habits and organize
            your day effectively.
          </motion.h2>

          <motion.div variants={itemVariants} className="z-20">
            <Button size="lg" className="shadow-2xl mb-10">
              Get Started
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AnimatedImage
              src="/image.webp"
              alt="Image"
              width={1200}
              height={900}
              className="w-full h-auto max-w-6xl mx-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </MotionDiv>
      </div>
    </main>
  );
}
