import TodoItem from '../../components/TodoItem'
import { UseAppDispatch } from '../../redux/redux-hooks'
import { Todo } from '../../types';
import { useSelector } from 'react-redux';
import { selectAsyncTodos } from './asyncTodoSelectos';
import { useEffect } from 'react';
import { fetchAllTodos, removeTodo, toggleTodo } from './todoAsyncActions';

const AsyncTodoList = () => {
    const { list } = useSelector(selectAsyncTodos);
    const dispatch = UseAppDispatch();

    const handleRemoveTodo = (id: Todo['id']) => {
        dispatch(removeTodo(id))
    }

    const handleToggleTodo = (id: Todo['id']) => {
        dispatch(toggleTodo(id))
    }

    useEffect(() => {
        dispatch(fetchAllTodos());
    }, [])

    return (
        <div className='todos'>
            {
                list.map((todo) => (
                    <TodoItem key={todo.id} {...todo} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo} />
                ))
            }
        </div>
    )
}

export default AsyncTodoList