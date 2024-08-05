import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  // const numbers = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ];
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, select, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

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
