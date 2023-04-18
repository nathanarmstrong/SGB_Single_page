import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";

export const Calendly = ({ email, firstName, lastName }) => {
  const [error, setError] = useState();

  useEffect(() => {
    checkEmail();
  }, [email, firstName, lastName]);

  const checkEmail = () => {
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError("Invalid email address");
    } else {
      setError();
    }
  };

  const prefillData = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    name: `${firstName} ${lastName}`,
  };

  return (
    <div className="text-center">
      {!firstName || !lastName || !email || error ? (
        <button
          onClick={() => {
            if (!error) {
              setError("Please fill out all fields");
            }
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
          className="rounded-full bg-gray-blue-light px-4 py-2 font-medium w-full my-2 hover:bg-white border-2 border-gray-blue-light"
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
