import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault(); // it prevents the default borwser behavier
    console.log(enteredValues);
    setEnteredValues({
      email: "",
      password: "",
    });
    if (emailIsInvalid) {
      handleSubmit(undefined)
      return;
    }
  }
  console.log("sending HTTP requst")

  function handleInputChange(identeier, value) {
    //additon of just event, it gets an identifier to find out which event occured
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identeier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identeier]: false,
    }));
  }

  function handleBlureValue(identeier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identeier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onBlur={() => handleBlureValue("email")}
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)} // the email paramater is the identifier of the handleInputChange in the top of the page
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address. </p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            } // the email paramater is the identifier of the handleInputChange in the top of the page
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
