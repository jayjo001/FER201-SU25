import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePassword = (pw) => pw.length >= 8;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  useEffect(() => {
    if (email !== "") setEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    if (password !== "") setPasswordValid(validatePassword(password));
  }, [password]);

  const isFormValid = emailValid && passwordValid;

  return (
    <Form>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={emailValid === false}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={passwordValid === false}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự.
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
