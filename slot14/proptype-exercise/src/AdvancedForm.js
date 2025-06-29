import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";

const AdvancedForm = ({ onSubmit }) => {
  const [data, setData] = useState({
    name: "", age: "", email: "", phone: "", agree: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const err = {};
    if (!data.name || data.name.length < 3 || data.name.length > 50)
      err.name = "Tên phải từ 3–50 ký tự";
    const ageNum = parseInt(data.age, 10);
    if (!data.age || isNaN(ageNum) || ageNum < 18 || ageNum > 100)
      err.age = "Tuổi phải từ 18–100";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(data.email)) err.email = "Email không hợp lệ";
    const phoneRe = /^\d{10,15}$/;
    if (!phoneRe.test(data.phone)) err.phone = "Số điện thoại 10–15 chữ số";
    if (!data.agree) err.agree = "Bạn phải đồng ý điều khoản";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) onSubmit(data);
  };

  return (
    <Container>
      <h3>Form Nâng Cao</h3>
      <Form onSubmit={handleSubmit}>
        {[
          { label: "Tên", name: "name", type: "text" },
          { label: "Tuổi", name: "age", type: "number" },
          { label: "Email", name: "email", type: "email" },
          { label: "SĐT", name: "phone", type: "text" }
        ].map(({ label, name, type }) => (
          <Form.Group key={name} controlId={`form${name}`}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              name={name}
              value={data[name]}
              onChange={handleChange}
              isInvalid={!!errors[name]}
            />
            <Form.Control.Feedback type="invalid">
              {errors[name]}
            </Form.Control.Feedback>
          </Form.Group>
        ))}
        <Form.Group controlId="formAgree">
          <Form.Check
            type="checkbox"
            label="Tôi đồng ý điều khoản"
            name="agree"
            checked={data.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

AdvancedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AdvancedForm;
