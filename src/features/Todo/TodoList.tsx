import TodoItem from '../../components/TodoItem'
import { UseAppDispatch } from '../../redux/redux-hooks'
import { Todo } from '../../types';
import { removeTodo, toggleTodo } from '../../redux/todoSlice';
import { useSelector } from 'react-redux';
import { selectAllTodos } from '../../redux/todoSelectors';

const TodoList = () => {
    const list = useSelector(selectAllTodos);
    const dispatch = UseAppDispatch();

    const handleRemoveTodo = (id: Todo['id']) => {
        dispatch(removeTodo(id))
    }
    const handleToggleTodo = (id: Todo['id']) => {
        dispatch(toggleTodo(id))
    }

    return (
        <div className='todos'>
            {
                list.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo} />
                })
            }
        </div>
    )
}

export default TodoList