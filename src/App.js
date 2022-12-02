import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoActions from './components/Todos/TodosActions';
import TodoList from './components/Todos/TodoList';
import './App.css';
const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const resetTodoHandler = () => {
    setTodos([]);
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };
  const clearCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1> СПИСОК ЗАДАЧ</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 ? (
        <TodoActions
          resetTodo={resetTodoHandler}
          clearCompletedTodo={clearCompletedTodoHandler}
          todosCount={!!completedTodoCount}
        />
      ) : (
        ''
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodoCount > 0 ? (
        <h1>
          {' '}
          {`Вы завершили ${completedTodoCount} ${
            completedTodoCount > 1 ? `задачи` : `задачу`
          }`}
        </h1>
      ) : (
        ''
      )}
    </div>
  );
};
export default App;
