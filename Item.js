import { useState } from "react";

export default function Item({ item, onDeleteItems, onUpdateItems }) {
  const [isNotClick, setClick] = useState(true);
  function handleClick() {
    setClick((isNotClick) => !isNotClick);
  }
  // console.log("UPDATE", item, isNotClick);
  return (
    <>
      {isNotClick && (
        <li>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onUpdateItems(item.id)}
          />
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.select} {item.description}
          </span>
          <button onClick={() => onDeleteItems(item.id)}>❌</button>
        </li>
      )}
    </>
  );
}
