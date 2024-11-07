import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import useLoginModal from "./useLoginModal";
import axios from "axios";
import toast from "react-hot-toast";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
          toast.success("Successfully unfavorited your item!");
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
          toast.success("Successfully favorited your items!");
        }

        await request();
        router.refresh();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router],
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
