"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex w-full cursor-pointer items-center justify-between rounded-full border-[1px] p-2 shadow-sm transition hover:shadow-md md:max-w-[1400px]">
      <input
        className="ml-2 flex-1 bg-transparent font-sans text-xs outline-none md:text-base"
        type="search"
        placeholder="Search any wedding items!"
      ></input>
      <div>
        <BiSearch size={18} />
      </div>
    </div>
  );
};

export default Search;
