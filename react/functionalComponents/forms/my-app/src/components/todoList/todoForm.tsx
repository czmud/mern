import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Todo } from './todo';

interface TodoFormProps{
    formHandler: Function
}

export const TodoForm = (props: TodoFormProps) => {
    const [description, setDescription] = useState("");
    
    const saveTodo = ( event: FormEvent ) => {
        event.preventDefault();
        if( description.length < 1 ){
            return;
        }
        props.formHandler( new Todo( description ));
        setDescription("");
    }

    return(
        <form onSubmit={ saveTodo }>
            <input value={description} onChange={ (event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}/>

            <input type="submit" value="Add"/>
        </form>
    )



}