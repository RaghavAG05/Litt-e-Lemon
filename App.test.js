import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders booking form and submits with valid data", () => {
  render(<App />);

  // Check for form elements
  const dateInput = screen.getByLabelText(/date/i);
  const timeInput = screen.getByLabelText(/time/i);
  const dinersInput = screen.getByLabelText(/number of diners/i);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const contactInput = screen.getByLabelText(/email or phone/i);
  const submitButton = screen.getByRole("button", { name: /reserve now/i });

  // Fill form
  fireEvent.change(dateInput, { target: { value: "2025-10-01" } });
  fireEvent.change(timeInput, { target: { value: "19:00" } });
  fireEvent.change(dinersInput, { target: { value: 3 } });
  fireEvent.change(firstNameInput, { target: { value: "Sophie" } });
  fireEvent.change(lastNameInput, { target: { value: "Taylor" } });
  fireEvent.change(contactInput, { target: { value: "sophie@example.com" } });

  fireEvent.click(submitButton);

  // Expect confirmation message
  const confirmationMessage = screen.getByText(/reservation confirmed/i);
  expect(confirmationMessage).toBeInTheDocument();

  const nameInConfirmation = screen.getByText(/sophie taylor/i);
  expect(nameInConfirmation).toBeInTheDocument();
});
