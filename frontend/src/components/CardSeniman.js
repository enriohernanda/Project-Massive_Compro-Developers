const CardSeniman = (props) => {
  return (
    <div className="cardSeni">
      <img className="cardImgSeniman" src={props.foto} alt="seniman" />
      <h2 className="namaSeniman">{props.nama}</h2>
    </div>
  );
};

export default CardSeniman;
