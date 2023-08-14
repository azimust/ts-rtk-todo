import { UseAppDispatch } from '../../redux/redux-hooks'
import { addTodo } from '../../redux/todoSlice';
import NewItem from '../../components/NewItem';

const NewTodo = () => {
    const dispatch = UseAppDispatch();

    const handleNewTodo = (title: string) => {
        dispatch(addTodo(title))
    }

    return (
        <NewItem handleClick={handleNewTodo} />
    )
}

export default NewTodo