import React, { useState } from 'react'
import { Todo } from './todo';
import { TodoDisplay } from './todoDisplay';
import { TodoForm } from './todoForm';


export const TodoContainer = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoFormHandler = ( addTodo: Todo ) => {
        setTodos([...todos, addTodo]);
    }

    const todoToggleIsComplete = (i: number) => {
        const updateTodo = new Todo(todos[i].description, !todos[i].isComplete );
        setTodos([  ...todos.slice(0, i),
                    updateTodo,
                    ...todos.slice(i+1)]);
    }

    const todoDelete = (i: number ) => {
        setTodos([  ...todos.slice(0, i),
                    ...todos.slice(i+1)]);
    }

    return(
        <>
            <TodoForm formHandler={todoFormHandler} />
            <TodoDisplay todos={todos} deleteHandler={todoDelete} toggleIsComplete={todoToggleIsComplete}/>
        </>
    )


}