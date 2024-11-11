import { useState } from "react";
import Input from "./Input";
import {
  isEmail,
  isNotEmpty,
  isEqualsToOtherValue,
  hasMinLength,
} from "../util/validation";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  //  condition for password length check.
  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default browser behavior
    console.log(enteredValues);

    // Resetting `enteredValues` and resetting `didEdit`

    setEnteredValues({
      email: "",
      password: "",
    });
    setDidEdit({
      email: false,
      password: false,
    });
  }

  console.log("sending HTTP request");

  function handleInputChange(identifier, value) {
    // Addition of just event, it gets an identifier to find out which event occurred
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));

    // Resetting `didEdit` when user types

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleBlurValue(identifier) {
    // Updates the `didEdit` flag to true when a field loses focus
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="email"
          label="Email"
          onBlur={() => handleBlurValue("email")}
          name="email"
          error={emailIsInvalid && "Please enter a valid email address."}
          onChange={(event) => handleInputChange("email", event.target.value)} // The email parameter is the identifier for handleInputChange
          value={enteredValues.email}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          onBlur={() => handleBlurValue("password")}
          name="password"
          error={
            passwordIsInvalid
              ? "Password must be at least 6 characters long."
              : ""
          }
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.password}
        />
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={() => {
            setEnteredValues({ email: "", password: "" });
            setDidEdit({ email: false, password: false });
          }}
        >
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
