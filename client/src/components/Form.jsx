import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

function Form({ setTodos }) {
  const [task, setTask] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/", { task });
      setTodos((prev) => [...prev, res.data]);
      setTask("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
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
