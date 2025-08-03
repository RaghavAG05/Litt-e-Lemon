import React from "react";

export default function Confirmation({ booking, onEdit }) {
  return (
    <section aria-live="polite" aria-label="Booking Confirmation">
      <h2>Reservation Confirmed!</h2>
      <p>
        Thank you, {booking.firstName} {booking.lastName}. Your reservation for {booking.diners}{" "}
        {booking.diners === 1 ? "person" : "people"} on {booking.date} at {booking.time} has been booked.
      </p>
      <p>We will contact you at: {booking.contact}</p>
      <button onClick={onEdit} aria-label="Edit Reservation">
        Edit Reservation
      </button>
    </section>
  );
}
