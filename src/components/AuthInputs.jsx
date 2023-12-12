import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        {/* <p className="para">
          <Label $notvalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $notvalid={emailNotValid}
            // className={emailNotValid ? "$notvalid" : ""}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p> */}
        <Input
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          label="Email"
          invalid={emailNotValid}
        />
        {/* <p>
          <Label $notvalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $notvalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p> */}
        <Input
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          type="password"
          label="password"
          invalid={passwordNotValid}
        />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
