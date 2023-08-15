import { UseAppDispatch } from '../../redux/redux-hooks'
import NewItem from '../../components/NewItem';
import { createTodo } from './todoAsyncActions';

const NewAsyncTodo = () => {
    const dispatch = UseAppDispatch();

    const handleNewTodo = (title: string) => {
        dispatch(createTodo(title))
    }

    return (
        <NewItem handleClick={handleNewTodo} />
    )
}

export default NewAsyncTodo