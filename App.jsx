import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";

export default function App() {
  const [bookingData, setBookingData] = useState(null);

  return (
    <main>
      <h1>Little Lemon Reserve a Table</h1>
      {!bookingData ? (
        <BookingForm onSubmit={setBookingData} />
      ) : (
        <Confirmation booking={bookingData} onEdit={() => setBookingData(null)} />
      )}
    </main>
  );
}
