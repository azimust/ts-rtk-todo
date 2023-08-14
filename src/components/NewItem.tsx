import { useRef } from 'react'

interface INewItem {
    handleClick: (text: string) => void
}

const NewItem = ({ handleClick }: INewItem) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = () => {
        if (inputRef.current) {
            handleClick(inputRef.current.value)
            inputRef.current.value = ''
        }
    }

    return (
        <div className='todo-form'>
            <input
                type="text"
                placeholder='new todo'
                ref={inputRef}
            />
            <button onClick={onClick}>add todo</button>
        </div>
    )
}

export default NewItem