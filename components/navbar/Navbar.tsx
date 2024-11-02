"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full border-b-[1px] bg-white p-4 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
