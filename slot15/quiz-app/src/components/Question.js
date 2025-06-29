import { Card } from 'react-bootstrap';

function Question({ data, selected, onAnswer }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{data.question}</Card.Title>
        {data.options.map((opt, idx) => (
          <div key={idx}>
            <input
              type="radio"
              id={`q${data.id}-${idx}`}
              name={`q-${data.id}`}
              value={opt}
              checked={selected === opt}
              onChange={() => onAnswer(data.id, opt)}
            />
            <label htmlFor={`q${data.id}-${idx}`} className="ms-2">{opt}</label>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Question;
