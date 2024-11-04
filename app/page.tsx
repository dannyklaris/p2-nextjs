import getCurrentUser from "@/actions/getCurrentUser";
import getListings, { IListingsParams } from "@/actions/getListings";
import ClientOnly from "@/components/global/ClientOnly";
import Container from "@/components/global/Container";
import EmptyState from "@/components/global/EmptyState";
import ListingCard from "@/components/listings/ListingCard";
import React from "react";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length == 0) {
    return <EmptyState showReset />;
  }

  return (
    <ClientOnly>
      <Container>
        <div className="lg:grid-c grid grid-cols-1 pt-48 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {listings.map((listing) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
