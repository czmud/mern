import React, { ChangeEvent, FormEvent, useState } from 'react';
import { ErrorField } from './errorField';



export const UserForm = ( props: {}) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (event: FormEvent) => {
        event.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("new user created:" + newUser.firstName + " " + newUser.lastName );
        setHasBeenSubmitted( true );
    }


    const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
        if(event.target.value.length < 1 ) {
            setFirstNameError("First Name is required");
        } else if (event.target.value.length < 2 ) {
            setFirstNameError("First Name must be at least 2 characters")
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
        if(event.target.value.length < 1 ) {
            setLastNameError("Last Name is required");
        } else if (event.target.value.length < 2 ) {
            setLastNameError("Last Name must be at least 2 characters")
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        if(event.target.value.length < 1 ) {
            setEmailError("Email is required");
        } else if (event.target.value.length < 5 ) {
            setEmailError("Email must be at least 5 characters")
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        if(event.target.value.length < 1 ) {
            setPasswordError("Password is required");
        } else if (event.target.value.length < 8 ) {
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("");
        }
        if( event.target.value === confirmPassword ){
            setConfirmPasswordError("")
        } else if ( confirmPassword.length > 1 ) {
            setConfirmPasswordError("Password and confirmation do not match");
        }
    }
    const handleConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value)
        if( event.target.value !== password ) {
            setConfirmPasswordError("Password and confirmation do not match");
        } else {
            setConfirmPasswordError("");
        }
    }
    
    return(
        <div>
            <div>
            <form onSubmit={ createUser }>
                <table>
                    <tbody>
                    <tr>
                        <td><label>First Name: </label></td>
                        <td><input type="text" onChange={ (event: ChangeEvent<HTMLInputElement>) => handleFirstName(event) }/></td>
                        <ErrorField error={firstNameError} updateToggle={hasBeenSubmitted} ></ErrorField>
                    </tr>
                    <tr>
                        <td><label>Last Name: </label></td>
                        <td><input type="text" onChange={ (event: ChangeEvent<HTMLInputElement>) => handleLastName(event) }/></td>
                        <ErrorField error={lastNameError} updateToggle={hasBeenSubmitted} ></ErrorField>
                    </tr>
                    <tr>
                        <td><label>Email: </label></td>
                        <td><input type="text" onChange={ (event: ChangeEvent<HTMLInputElement>) => handleEmail(event) }/></td>
                        <ErrorField error={emailError} updateToggle={hasBeenSubmitted} ></ErrorField>
                    </tr>
                    <tr>
                        <td><label>Password: </label></td>
                        <td><input type="password" onChange={ (event: ChangeEvent<HTMLInputElement>) => handlePassword(event) }/></td>
                        <ErrorField error={passwordError} updateToggle={hasBeenSubmitted} ></ErrorField>
                    </tr>
                    <tr>
                        <td><label>Confirm Pw: </label></td>
                        <td><input type="password" onChange={ (event: ChangeEvent<HTMLInputElement>) => handleConfirmPassword(event) }/></td>
                        <ErrorField error={confirmPasswordError} updateToggle={hasBeenSubmitted} ></ErrorField>
                    </tr>
                    <tr>
                        <td><input type="submit" value="submit"/></td>
                    </tr>
                    </tbody>
                </table>
            </form>
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}