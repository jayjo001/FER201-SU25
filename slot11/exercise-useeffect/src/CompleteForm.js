import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function CompleteForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid = name.trim() !== "" && gender && country && termsAccepted;
    setFormValid(isValid);
  }, [name, gender, country, termsAccepted]);

  return (
    <Form>
      <Form.Group>
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Giới tính</Form.Label><br />
        <Form.Check
          inline
          label="Nam"
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
        <Form.Check
          inline
          label="Nữ"
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Quốc tịch</Form.Label>
        <Form.Control
          as="select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">-- Chọn quốc tịch --</option>
          <option value="vietnam">Việt Nam</option>
          <option value="usa">Mỹ</option>
          <option value="japan">Nhật Bản</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
      </Form.Group>

      <Button type="submit" disabled={!formValid}>
        Gửi Form
      </Button>
    </Form>
  );
}

export default CompleteForm;
