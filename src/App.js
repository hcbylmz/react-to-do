import { useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import List from "./components/List/List";
import "../src/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState(0);
  const [check, setCheck] = useState(false);
  const [deleted, setDeleted] = useState(999);

  return (
    <div className="container">
      <h1 className="todos-header">todos</h1>
      <AddItem
        showItem={setTodos}
        deleted={deleted}
        deleteItem={setDeleted}
        complete={complete}
        setComplete={setComplete}
        check={check}
      />
      <List
        todos={todos}
        deleteItem={setDeleted}
        deleted={deleted}
        complete={complete}
        setComplete={setComplete}
        check={check}
        setCheck={setCheck}
      />
    </div>
  );
}

export default App;
