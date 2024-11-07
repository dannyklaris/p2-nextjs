import EmptyState from "@/components/global/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length == 0) {
    return (
      <EmptyState
        title="No bookings found on your item"
        subtitle="Looks like you have no reservations on your listed items."
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationsPage;
