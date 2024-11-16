import Image from "next/image";
import React from "react";

export default function AvatarsDisplay({
  avatars,
}: {
  avatars: { name: string; image: string }[];
}) {
  return (
    <div className="flex -space-x-2 py-2">
      {avatars.map((avatar) => (
        <Image
          key={avatar.name}
          src={avatar.image}
          alt={avatar.name}
          width={128}
          height={128}
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
      ))}
    </div>
  );
}
