import React from "react";
import { Todo } from "./todo";



interface TodoProps{
    todos: Todo[];
    deleteHandler: Function;
    toggleIsComplete: Function;
}

const todoCompleteStyle = {
    textDecoration: "line-through",
}


export const TodoDisplay = (props: TodoProps) => {
    



    return(
        <>
        { props.todos.length > 0 ?
        <table>
            <tbody>
                    { props.todos.map( (todo, i) => <tr key={i}>
                        <td style={ todo.isComplete ? todoCompleteStyle : {}}>
                            { todo.description }
                        </td>
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