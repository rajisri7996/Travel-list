import { useState } from "react";
import Item from "./Item";
export function PackingThings({
  itemsPack,
  onDeleteItem,
  onUpdateItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = itemsPack;
  if (sortBy === "description")
    sortedItems = itemsPack
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") console.log("PACKED", itemsPack);
  sortedItems = itemsPack
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));
  // console.log("SORTED", sortedItems);
  return (
    <div className="list">
      List of things
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItem}
            onUpdateItems={onUpdateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION </option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button
          className="clear-list
        "
          onClick={onClearList}
        >
          CLEAR LIST
        </button>
      </div>
    </div>
  );
}
