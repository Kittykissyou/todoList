import { RiRefreshLine, RiCloseCircleLine } from 'react-icons/ri';
import Button from '../UI/button';
const TodoActions = ({ resetTodo, clearCompletedTodo, todosCount }) => {
  return (
    <>
      <Button title="удалить все" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="удалить завершенные"
        onClick={clearCompletedTodo}
        disabled={!todosCount}
      >
        <RiCloseCircleLine />
      </Button>
    </>
  );
};
export default TodoActions;
