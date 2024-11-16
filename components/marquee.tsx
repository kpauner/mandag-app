"use client";
import MarqueeAnimation from "./marquee-animation";

type MarqueeItem = {
  id: number;
  name: string;
  image: string;
};

type MarqueeProps = {
  content: MarqueeItem[];
};

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

export default function Marquee({ content }: MarqueeProps) {
  return (
    <div className="relative flex w-full overflow-x-hidden py-12">
      <MarqueeAnimation>
        {content.map((item) => (
          <div
            className="track relative h-8 w-24 shrink-0 whitespace-nowrap will-change-transform px-4"
            key={item.id}
          >
            <img src={item.image} alt={item.name} className="h-full w-full" />
          </div>
        ))}
      </MarqueeAnimation>
    </div>
  );
}
