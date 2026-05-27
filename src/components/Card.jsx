function Card(props) {
  return (
    <div className="bg-white p-4 shadow">
      <h3 className="text-xl font-bold text-purple-600">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
