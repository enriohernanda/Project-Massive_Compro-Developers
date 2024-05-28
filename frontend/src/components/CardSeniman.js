import { Card } from 'react-bootstrap';

const CardSeniman = (props) => {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={props.foto} />
      <Card.Body>
        <Card.Title>
          <strong>{props.nama}</strong>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardSeniman;
