import Todo from './Todo';
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return todos.length == 0 ? (
    <h1>Todo List is empty</h1>
  ) : (
    todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    ))
  );
};
export default TodoList;
