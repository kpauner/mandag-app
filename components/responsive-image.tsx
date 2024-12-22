"use client";

import Image from "next/image";
import Icons from "./icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video";
  className?: string;
};
export function ResponsiveImage({
  src,
  alt,
  aspectRatio = "video",
  className,
}: ResponsiveImageProps) {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  return (
    <figure
      className={cn(
        "relative w-full overflow-hidden rounded-md",
        aspectRatio === "video"
          ? "aspect-video max-h-[300px]"
          : "aspect-square max-w-[300px]",
        className
      )}
    >
      {status === "loading" && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      {status === "error" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <Icons.imageOff className="h-6 w-6 text-muted-foreground" />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setStatus("error")}
          onLoad={() => setStatus("success")}
        />
      )}
      {alt && <figcaption className="sr-only">Image for {alt}</figcaption>}
    </figure>
  );
}
