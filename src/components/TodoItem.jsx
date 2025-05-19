function TodoItem({ text, onDelete, id, isCompleted, completeTodo }) {
  return (
    <li className="w-full flex justify-between">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => completeTodo(id)}
      />
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}

export default TodoItem;
