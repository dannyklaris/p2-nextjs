import EmptyState from "@/components/global/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getListings";
import ItemsClient from "./ItemsClient";

const ItemsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length == 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties"
      />
    );
  }

  return <ItemsClient listings={listings} currentUser={currentUser} />;
};

export default ItemsPage;
