import { useState, useEffect } from "react";
import { PopupButton, useCalendlyEventListener } from "react-calendly";

export const Calendly = ({ email, firstName, lastName }) => {
  const [error, setError] = useState();

  useEffect(() => {
    setError();
  }, [email, firstName, lastName]);
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  const prefillData = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    name: `${firstName} ${lastName}`,
  };

  return (
    <div className="text-center">
      {!firstName || !lastName || !email ? (
        <button
          onClick={() => {
            setError("Please fill out all fields");
          }}
          className="rounded-full bg-gray-blue-light/50 px-4 py-2 font-medium w-full my-2 cursor-not-allowed"
        >
          SCHEDULE APPOINTMENT
        </button>
      ) : (
        <PopupButton
          url="https://calendly.com/nathan-armstrong21/getting-a-free-shipping-label"
          prefill={prefillData}
          rootElement={document.getElementById("root")}
          text="SCHEDULE APPOINTMENT"
          className="rounded-full bg-gray-blue-light px-4 py-2 font-medium w-full my-2"
        />
      )}
      {error && <p className="text-red">{error}</p>}
      <p className="font-light text-dark/60 pt-3">
        By submitting this form you agree to our{" "}
        <a className="underline decoration-dark/60" href="/">
          Privacy policy.
        </a>
      </p>
    </div>
  );
};
