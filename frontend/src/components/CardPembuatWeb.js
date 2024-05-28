import { Card } from 'react-bootstrap';

const CardPembuatWeb = (props) => {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          <strong>{props.nama}</strong>
        </Card.Title>
        <Card.Text>{props.sebagai}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPembuatWeb;
