import React from "react";
import BookingCalendar from "react-booking-calendar";
const BookingCalender = () => {
  const bookings = [
    new Date(2022, 10, 14),
    new Date(2022, 10, 15),
    new Date(2022, 10, 16),
    new Date(2022, 10, 17),
    new Date(2022, 10, 18)
  ];
  return (
    <div>
      <BookingCalendar bookings={bookings} />
    </div>
  );
};

export default BookingCalender;
