import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet. Start adding some!</p>
      ) : (
        tasks.map((task) => (
          <TodoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
};

export default TodoList;