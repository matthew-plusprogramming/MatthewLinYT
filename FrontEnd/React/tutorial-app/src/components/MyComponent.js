const MyComponent = (props) => {
  console.log(props.text);
  return (
    <div>
      <h1>Text:</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default MyComponent;
