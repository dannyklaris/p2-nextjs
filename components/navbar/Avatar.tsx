"use client";

import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      alt="avatar"
      src={src || "/images/avatar.png"}
      width={40}
      height={40}
      className="rounded-full"
    />
  );
};

export default Avatar;
