import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-dm-sans",
});

export const family = localFont({
  variable: "--font-family",
  src: [
    {
      path: "../app/fonts/test-family-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/test-family-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../app/fonts/test-family-regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/test-family-italic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
});
