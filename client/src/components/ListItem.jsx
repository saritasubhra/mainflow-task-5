import { toast } from "react-hot-toast";
import axios from "../lib/axios";

function ListItem({ item, setTodos }) {
  async function handleDelete() {
    try {
      await axios.delete(`/${item._id}`);
      setTodos((prev) => prev.filter((ele) => ele._id !== item._id));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <li className="capitalize flex justify-between border-b-2 ">
      <span>{item.task}</span>
      <button
        className="text-red-600 font-bold text-3xl"
        onClick={handleDelete}
      >
        X
      </button>
    </li>
  );
}

export default ListItem;
