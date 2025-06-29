import React, { useState, useReducer } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const initialState = { name: "", email: "", password: "", isSubmitted: false };
function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
}

const MyForm = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = e =>
    dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });

  const validate = () => {
    const newErr = {};
    if (!state.name) newErr.name = "Tên không được để trống!";
    if (!state.email) newErr.email = "Email không được để trống!";
    if (!state.password) newErr.password = "Mật khẩu không được để trống!";
    setErrors(newErr);
    setShowAlert(Object.keys(newErr).length > 0);
    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container>
      <h3>{title}</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng điền đầy đủ thông tin.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        {["name", "email", "password"].map(field => (
          <Form.Group key={field} controlId={`form${field}`}>
            <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
            <Form.Control
              type={field === "password" ? "password" : field === "email" ? "email" : "text"}
              name={field}
              value={state[field]}
              onChange={handleChange}
              isInvalid={!!errors[field]}
            />
            <Form.Control.Feedback type="invalid">
              {errors[field]}
            </Form.Control.Feedback>
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

MyForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm;
