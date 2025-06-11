import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./StudentCard";
import Welcome from "./Welcome";
import UserProfile from "./UserProfile";
import NameList from "./NameList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];

  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "/anh1.jpg" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "/anh2.jpg" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "/anh3.jpg" },
  ];

  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student Information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
