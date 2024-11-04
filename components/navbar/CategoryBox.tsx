"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") == label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {
        skipNull: true,
      },
    );

    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-1 border-b-2 p-2 transition hover:text-neutral-800 md:gap-2 md:p-3 ${selected ? "border-b-neutral-800" : "border-transparent"} ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={22} />
      <div className="text-xs font-medium md:text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
