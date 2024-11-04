"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { BsFlower1 } from "react-icons/bs";
import { GiCakeSlice, GiDress } from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineTableRestaurant } from "react-icons/md";
import { RiHeartsFill } from "react-icons/ri";
import Container from "../global/Container";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "Dresses",
    icon: GiDress,
    description: "Bridal gowns and bridesmaid dresses",
  },
  {
    label: "Catering",
    icon: MdOutlineFoodBank,
    description: "Wedding catering services",
  },
  {
    label: "Cakes",
    icon: GiCakeSlice,
    description: "Wedding cakes and desserts",
  },
  {
    label: "Flowers",
    icon: BsFlower1,
    description: "Floral arrangements and bouquets",
  },
  {
    label: "Decor",
    icon: RiHeartsFill,
    description: "Wedding decorations and styling",
  },
  {
    label: "Tableware",
    icon: MdOutlineTableRestaurant,
    description: "Table settings and rentals",
  },
  {
    label: "Dressess",
    icon: GiDress,
    description: "Bridal gowns and bridesmaid dresses",
  },
  {
    label: "Caterings",
    icon: MdOutlineFoodBank,
    description: "Wedding catering services",
  },
  {
    label: "Cakess",
    icon: GiCakeSlice,
    description: "Wedding cakes and desserts",
  },
  {
    label: "Flowerss",
    icon: BsFlower1,
    description: "Floral arrangements and bouquets",
  },
  {
    label: "Decors",
    icon: RiHeartsFill,
    description: "Wedding decorations and styling",
  },
  {
    label: "Tablewares",
    icon: MdOutlineTableRestaurant,
    description: "Table settings and rentals",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const category = params?.get("category");

  const mainPage = pathname == "/";
  if (!mainPage) {
    return null;
  }

  return (
    <Container>
      <div className="flex items-center justify-between overflow-x-auto pt-0">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category == item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
