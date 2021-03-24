import './Card.css';

const Card = (props) => {
  const { text, header } = props;

  return (
    <div className="card">
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;
