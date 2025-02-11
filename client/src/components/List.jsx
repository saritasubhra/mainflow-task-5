import ListItem from "./ListItem";

function List({ todos, setTodos }) {
  if (!todos.length) return;

  return (
    <ul className="space-y-4 p-2">
      {todos.map((item) => (
        <ListItem key={item.task} item={item} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default List;
