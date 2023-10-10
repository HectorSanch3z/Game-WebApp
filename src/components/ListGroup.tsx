function ListGroup() {
  const items = ["Juarez", "Monterrey", "Mexico", "Chihuahua"];

  return (
    <>
      <h1>HOLA</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
