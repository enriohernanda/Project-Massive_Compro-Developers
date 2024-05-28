const CardPembuatWeb = (props) => {
  return (
    <div className="cardPembuat">
      <img className="cardImgPembuat" src={props.image} alt="pembuat website" />
      <h2 className="namaPembuat">{props.nama}</h2>
      <p className="sebagaiPembuat">{props.sebagai}</p>
    </div>
  );
};

export default CardPembuatWeb;
