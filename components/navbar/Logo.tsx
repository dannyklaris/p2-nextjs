"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      src={"/images/logo.png"}
      width={80}
      height={80}
      className="hidden cursor-pointer md:block"
    />
  );
};

export default Logo;
