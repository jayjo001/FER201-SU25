import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import các bài tập
import Counter from "./components/Counter"; // Bài 1
import ChangeNameAge from "./components/ChangeNameAge"; // Bài 2
import ItemList from "./components/ItemList"; // Bài 3
import EditableItemList from "./components/EditableItemList"; // Bài 4
import QuestionBank from "./components/QuestionBank"; // Bài 5
import EnhancedQuestionBank from "./components/EnhancedQuestionBank"; // Bài 6

function App() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="mb-4 p-3">
            <h3>Exercise 1: Counter</h3>
            <Counter />
          </Card>

          <Card className="mb-4 p-3">
            <h3>Exercise 2: Change Name & Age</h3>
            <ChangeNameAge />
          </Card>

          <Card className="mb-4 p-3">
            <h3>Exercise 3: Item List (Add/Remove)</h3>
            <ItemList />
          </Card>

          <Card className="mb-4 p-3">
            <h3>Exercise 4: Editable / Sortable / Filterable List</h3>
            <EditableItemList />
          </Card>

          <Card className="mb-4 p-3">
            <h3>Exercise 5: Quiz - Question Bank</h3>
            <QuestionBank />
          </Card>

          <Card className="mb-4 p-3">
            <h3>Exercise 6: Enhanced Quiz</h3>
            <EnhancedQuestionBank />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
