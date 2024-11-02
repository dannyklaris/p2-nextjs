"use client";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      alt="avatar"
      src={"/images/avatar.png"}
      width={40}
      height={40}
      className="rounded-full"
    />
  );
};

export default Avatar;
