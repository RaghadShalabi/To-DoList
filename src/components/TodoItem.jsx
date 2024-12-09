
const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        margin: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        style={{ marginRight: "10px" }}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        style={{ color: "red", cursor: "pointer", borderRadius: "5px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
