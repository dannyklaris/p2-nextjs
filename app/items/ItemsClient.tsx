"use client";

import React, { useCallback, useState } from "react";
import { SafeListing, SafeUser } from "@/types";
import Container from "@/components/global/Container";
import Heading from "@/components/global/Heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "@/components/listings/ListingCard";

interface ItemsClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const ItemsClient: React.FC<ItemsClientProps> = ({ listings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listing deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router],
  );
  return (
    <Container>
      <Heading title="Items" subtitle="List of your items" />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId == listing.id}
            actionLabel="Delete item"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ItemsClient;
