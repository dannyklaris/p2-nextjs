"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import useRentModal from "@/hooks/useRentModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false); // Close the menu if clicked outside
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Listen for clicks
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
    };
  }, [handleClickOutside]);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);
  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          className="text-hidden hidden w-44 cursor-pointer rounded-full border-[1px] px-2 py-2 text-center text-sm font-semibold transition hover:bg-neutral-100 md:block"
          onClick={onRent}
        >
          List your items!
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer items-center md:gap-2 md:rounded-full md:border-[1px] md:px-2 md:py-1"
        >
          <AiOutlineMenu size={26} />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {/* making a navbar popup from burger menu */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-[120px]">
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="My favorites"
                />
                <MenuItem
                  onClick={() => router.push("/bookings")}
                  label="My rented items"
                />
                <MenuItem
                  onClick={() => router.push("/lended")}
                  label="My lended items"
                />
                <MenuItem
                  onClick={() => router.push("/items")}
                  label="My listings"
                />
                <MenuItem onClick={rentModal.onOpen} label="List an item!" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
