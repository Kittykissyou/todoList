import {
  RiCreativeCommonsNdLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from 'react-icons/ri';
import styles from './BgdnTodo2.module.css';
const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted === true ? styles.completedTodo : ''
      }`}
    >
      <RiCreativeCommonsNdLine className={styles.todoIcon} />
      <div className={styles.todoText}> {todo.text} </div>
      <RiCloseCircleLine
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <RiCheckboxCircleLine
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
};
export default Todo;
