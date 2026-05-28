function LinkButton(props) {
  return (
    <a
      href={props.url}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
    >
      {props.buttonText}
    </a>
  );
}

export default LinkButton;
