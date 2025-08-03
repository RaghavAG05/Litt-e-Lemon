import React, { useState } from "react";

export default function BookingForm({ onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [diners, setDiners] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!date) newErrors.date = "Please select a date.";
    if (!time) newErrors.time = "Please select a time.";
    if (diners < 1) newErrors.diners = "Please enter at least 1 diner.";
    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!contact.trim()) newErrors.contact = "Contact info is required.";
    
    // Simple email or phone format check (basic)
    if (contact && !/\S+@\S+\.\S+/.test(contact) && !/^\+?[0-9\s\-]{7,}$/.test(contact)) {
      newErrors.contact = "Enter a valid email or phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      onSubmit({ date, time, diners, firstName, lastName, contact });
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Reserve a Table Form">
      <fieldset>
        <legend>Reservation Details</legend>

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          aria-describedby={errors.date ? "date-error" : undefined}
          required
        />
        {errors.date && (
          <span role="alert" id="date-error" className="error">
            {errors.date}
          </span>
        )}

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          aria-describedby={errors.time ? "time-error" : undefined}
          required
        />
        {errors.time && (
          <span role="alert" id="time-error" className="error">
            {errors.time}
          </span>
        )}

        <label htmlFor="diners">Number of Diners:</label>
        <input
          type="number"
          id="diners"
          min="1"
          max="20"
          value={diners}
          onChange={(e) => setDiners(parseInt(e.target.value, 10) || 1)}
          aria-describedby={errors.diners ? "diners-error" : undefined}
          required
        />
        {errors.diners && (
          <span role="alert" id="diners-error" className="error">
            {errors.diners}
          </span>
        )}
      </fieldset>

      <fieldset>
        <legend>Contact Information</legend>

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
          required
        />
        {errors.firstName && (
          <span role="alert" id="firstName-error" className="error">
            {errors.firstName}
          </span>
        )}

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
          required
        />
        {errors.lastName && (
          <span role="alert" id="lastName-error" className="error">
            {errors.lastName}
          </span>
        )}

        <label htmlFor="contact">Email or Phone:</label>
        <input
          type="text"
          id="contact"
          placeholder="Email or phone"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          aria-describedby={errors.contact ? "contact-error" : undefined}
          required
        />
        {errors.contact && (
          <span role="alert" id="contact-error" className="error">
            {errors.contact}
          </span>
        )}
      </fieldset>

      <button type="submit" aria-label="Submit Reservation">Reserve Now</button>
    </form>
  );
}
