"use client;";

import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="logo"
      src={"/images/logo.png"}
      width={80}
      height={80}
      className="hidden md:block"
    />
  );
};

export default Logo;
