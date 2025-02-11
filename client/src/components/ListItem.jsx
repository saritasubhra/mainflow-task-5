function ListItem({ item }) {
  return (
    <li className="capitalize flex justify-between border-b-2 ">
      <span>{item.name}</span>
      <button>Delete</button>
    </li>
  );
}

export default ListItem;
