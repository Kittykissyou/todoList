import { useState } from 'react';
import Button from '../UI/button';
import styles from './BgdnTodoForm.module.css';
const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const changeInputValue = (event) => {
    event.preventDefault();
    setInputValue('');
    addTodo(inputValue);
  };
  return (
    <div className={styles.formContaner}>
      <form onSubmit={changeInputValue}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        ></input>
        <Button
          title="add todo"
          type="submit"
          disabled={inputValue.length > 0 ? false : true}
        >
          Подтвердить
        </Button>
      </form>
    </div>
  );
};
export default TodoForm;
