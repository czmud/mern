import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import { ErrorField } from './errorField';


type UserFormState = {
    firstName: {
        value: string,
        error: string
    },
    lastName:  {
        value: string,
        error: string
    },
    email:  {
        value: string,
        error: string
    }
};

const initialState: UserFormState = {
    firstName: {
        value: '',
        error: ''
    },
    lastName:  {
        value: '',
        error: ''
    },
    email:  {
        value: '',
        error: ''
    }
}

type Action = 
| { type: string, payload: {value: string, error: string }}
| { type: string, payload: {value: number, error: string }};

function reducer( state: UserFormState, action: Action){
    return {
        ...state,
        [action.type]: action.payload
    };
}


export const UserFormReducer = () => {

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [state, dispatch ] = useReducer( reducer, initialState );

    const handleChange = (event: ChangeEvent<HTMLInputElement>, validator: Function) => {
        const { name, value } = event.target;
        const error = validator( value );
        dispatch({
            type: name,
            payload: {value: value, error: error}
        })
    }

    const createUser = (event: FormEvent) => {
        event.preventDefault();
        // const newUser = { firstName, lastName, email, password, confirmPassword };
        setHasBeenSubmitted( true );
    }


    const validateFirstName = ( value: string ) => {
        if(value.length < 1 ) {
            return "First Name is required";
        }
        if (value.length < 2 ) {
            return "First Name must be at least 2 characters";
        }
        return "";
    }
    const validateLastName = ( value: string ) => {
        if(value.length < 1 ) {
            return "Last Name is required";
        }
        if (value.length < 2 ) {
            return "Last Name must be at least 2 characters";
        }
        return "";
    }
    const validateEmail = ( value: string ) => {
        if(value.length < 1 ) {
            return "Email is required";
        }
        if (value.length < 8 ) {
            return "Email must be at least 8 characters";
        }
            return "";
        }
    
    return(
        <div>
            <div>
            <form onSubmit={ createUser }>
                <table>
                    <tbody>
                    <tr>
                        <td><label>First Name: </label></td>
                        <td><input  name="firstName"
                                    value={state.firstName.value}
                                    onChange={ (event: ChangeEvent<HTMLInputElement>) => handleChange(event, validateFirstName) }/></td>
                        <ErrorField error={state.firstName.error} updateToggle={hasBeenSubmitted} ></ErrorField>
                    </tr>
                    <tr>
                        <td><label>Last Name: </label></td>
                        <td><input  name="lastName"
                                    value={state.lastName.value}
                                    onChange={ (event: ChangeEvent<HTMLInputElement>) => handleChange(event, validateLastName) }/></td>
                        <ErrorField error={state.lastName.error} updateToggle={hasBeenSubmitted} ></ErrorField>
                    </tr>
                    <tr>
                        <td><label>Email: </label></td>
                        <td><input  name="email"
                                    value={state.email.value}
                                    onChange={ (event: ChangeEvent<HTMLInputElement>) => handleChange(event, validateEmail) }/></td>
                        <ErrorField error={state.email.error} updateToggle={hasBeenSubmitted} ></ErrorField>
                    </tr>
                    <tr>
                        <td><input type="submit" value="submit"/></td>
                    </tr>
                    </tbody>
                </table>
            </form>
            </div>
            <div>
                <p>First Name: {state.firstName.value}</p>
                <p>Last Name: {state.lastName.value}</p>
                <p>email: {state.email.value}</p>
            </div>
        </div>
    )
}