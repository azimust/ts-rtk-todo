import React from 'react'
import { Todo } from '../types'

interface ITodoItemProps extends Todo {
    removeTodo: (id: Todo['id']) => void
    toggleTodo: (id: Todo['id']) => void
}

const TodoItem = ({ id, title, completed, removeTodo, toggleTodo }: ITodoItemProps) => {
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
            <p>{title}</p>
            <span onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}

export default TodoItem