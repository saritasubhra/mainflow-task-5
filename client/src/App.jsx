import { useEffect, useState } from "react";
import Form from "./components/form";
import List from "./components/List";
import { toast } from "react-hot-toast";
import axios from "./lib/axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fecthAllRooms() {
      try {
        const res = await axios.get("/");
        setTodos(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fecthAllRooms();
  }, []);

  console.log(todos);

  return (
    <div className="max-w-2xl mx-auto space-y-10 pt-10 text-center">
      <h1 className="font-bold text-3xl">Todo List</h1>
      <Form setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
