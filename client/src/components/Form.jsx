import { useState } from "react";

function Form({ setItems }) {
  const [task, setTask] = useState("");

  function handleClick(e) {
    e.preventDefault();
    const data = {
      task,
    };
    setItems((prev) => [...prev, data]);
    setTask("");
  }
  return (
    <form className="flex gap-4  items-center">
      <input
        className="border-2 border-black p-2 flex-1"
        placeholder="Add a new task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        className="bg-red-400 text-white font-semibold px-4 py-2 rounded-sm"
        onClick={handleClick}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
