import { useState } from "react";
// import "./App.css";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingThings } from "./PackingThings";
import { Count } from "./Count";

// const things = [
//   {
//     id: 1,
//     description: "Passports",
//     quantity: 2,
//     packed: true,
//   },
//   {
//     id: 2,
//     description: "Toothbrush",
//     quantity: 1,
//     packed: "true",
//   },
//   {
//     id: 3,
//     description: "Clothes",
//     quantity: 5,
//     packed: false,
//   },
//   {
//     id: 4,
//     description: "Shoes",
//     quantity: 3,
//     packed: false,
//   },
// ];
function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);

    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleUpdateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    // alert("Are you sure do you want to delete all the items in the list?");
    const confirmed = window.confirm(
      "Are you sure do you want to delete all the items in the list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingThings
        itemsPack={items}
        key={items.id}
        onDeleteItem={handleDeleteItems}
        onUpdateItem={handleUpdateItems}
        onClearList={handleClearList}
      />
      <Count items={items} />
    </div>
  );
}

export default App;
