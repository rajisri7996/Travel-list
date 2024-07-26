import { useState } from "react";
import "./App.css";

const things = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: true,
  },
  {
    id: 2,
    description: "Toothbrush",
    quantity: 1,
    packed: "true",
  },
  {
    id: 3,
    description: "Clothes",
    quantity: 5,
    packed: false,
  },
  {
    id: 4,
    description: "Shoes",
    quantity: 3,
    packed: false,
  },
];
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingThings />
      <Count />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  // const numbers = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ];
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, select, packed: true };
    console.log(newItem);
    setSelect(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for packing</h3>
      <select
        value={select}
        onChange={(e) => {
          setSelect(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
        {/* {numbers.map((num) => (
          <option value={num}>{num}</option>
        ))} */}
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3} selected="true">
          3
        </option>
        <option value={4}>4</option>
        <option value={5}>5</option> */}
      </select>
      <input
        type="text"
        id="des"
        placeholder="items..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingThings() {
  return (
    <div className="list">
      List of things
      <ul>
        {things.map((thing) => (
          <Item item={thing} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  const [isNotClick, setClick] = useState(true);
  function handleClick() {
    setClick((isNotClick) => !isNotClick);
  }
  return (
    <>
      {isNotClick && (
        <li>
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          <button onClick={handleClick}>❌</button>
        </li>
      )}
    </>
  );
}

function Count() {
  return (
    <footer className="stats">I have these things packed for the trip</footer>
  );
}

export default App;
