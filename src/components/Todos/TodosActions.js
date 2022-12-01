import { RiRefreshLine, RiCloseCircleLine } from 'react-icons/ri';
import Button from '../UI/button';
const TodoActions = ({ resetTodo, clearCompletedTodo, todosCount }) => {
  return (
    <>
      <Button title="reset todos" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="delete copleted"
        onClick={clearCompletedTodo}
        disabled={!todosCount}
      >
        <RiCloseCircleLine />
      </Button>
    </>
  );
};
export default TodoActions;
