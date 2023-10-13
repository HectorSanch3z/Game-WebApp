import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Juarez", "Monterrey", "Mexico", "Chihuahua"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
