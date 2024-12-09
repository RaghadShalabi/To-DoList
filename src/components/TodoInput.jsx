import { useState } from "react";


const TodoInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: "10px", width: "200px" }}
      />

      <button
        onClick={handleAddTask}
        style={{
          marginLeft: "10px",
          padding: "10px",
          backgroundColor: "#c94890",
          borderRadius: "5px",
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
