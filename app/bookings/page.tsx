import EmptyState from "@/components/global/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";

import React from "react";
import BookingClient from "./BookingClient";

const BookingPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length == 0) {
    return (
      <EmptyState
        title="No bookings found"
        subtitle="Looks like you haven't booked any items."
      />
    );
  }
  return (
    <BookingClient reservations={reservations} currentUser={currentUser} />
  );
};

export default BookingPage;
