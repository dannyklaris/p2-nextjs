"use client";

import React from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed z-10 w-full border-b-[1px] bg-white pt-4 shadow-sm">
      <Container>
        <div className="flex items-center justify-between gap-2 p-4 md:gap-6">
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
      <hr />
      <Categories />
    </div>
  );
};

export default Navbar;
