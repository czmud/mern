import React from "react";
import { Todo } from "./todo";



interface TodoProps{
    todos: Todo[];
    deleteHandler: Function;
    toggleIsComplete: Function;
}

const todoComplete = {
    textDecoration: "line-through",
}


export const TodoDisplay = (props: TodoProps) => {
    



    return(
        <>
        { props.todos.length > 0 ?
        <table>
            <tbody>
                    { props.todos.map( (todo, i) => <tr key={i}>
                        { todo.isComplete ? <td style={todoComplete}>{ todo.description }</td> : <td>{ todo.description }</td> }
                        <td>
                            <form>
                                <input type="checkBox" checked={todo.isComplete}
                                onChange={ () => props.toggleIsComplete( i ) }/>
                            </form>
                        </td>
                        <td><button onClick={ () => props.deleteHandler( i ) }>Delete</button></td>
                    </tr> )}
            </tbody>
        </table>
        : "" }
        </>
    )
}