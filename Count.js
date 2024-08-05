export function Count({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You are all set to go for the trip"
        : `I have listed ${numItems} items for packing, and packed ${numPacked} items
      for the trip (${percentage}%)`}
    </footer>
  );
}
