import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul className="space-y-4 p-2">
      {items.map((item) => (
        <ListItem key={item.itemName} item={item} />
      ))}
    </ul>
  );
}

export default List;
