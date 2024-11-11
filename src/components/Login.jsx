import Input from "./Input";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
} from "../util/validation";
import { useInput } from "./hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); // we need alies " : " for every useInput, because we gonna use the hook for different inputs

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault(); 
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="email"
          label="Email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange} // The email parameter is the identifier for handleInputChange
          name="email"
          error={emailHasError && "Please enter a valid email address."}
          value={emailValue}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          name="password"
          error={passwordHasError && "Please enter a valid password."}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
