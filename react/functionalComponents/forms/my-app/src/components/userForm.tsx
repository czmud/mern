import React, { ChangeEvent, FormEvent, useState } from 'react';



export const UserForm = ( props: {}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (event: FormEvent) => {
        event.preventDefault();
        // const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("new user created");
    }
    
    return(
        <div>
            {/* No submit button given, only demonstrating use of form inputs */}
            <form onSubmit={ createUser }>
                <table>
                    <tr>
                        <label>First Name: </label>
                        <input type="text" onChange={ (event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value) }/>
                    </tr>
                    <tr>
                        <label>Last Name: </label>
                        <input type="text" onChange={ (event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value) }/>
                    </tr>
                    <tr>
                        <label>Email: </label>
                        <input type="text" onChange={ (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value) }/>
                    </tr>
                    <tr>
                        <label>Password: </label>
                        <input type="password" onChange={ (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value) }/>
                    </tr>
                    <tr>
                        <label>Confirm Pw: </label>
                        <input type="password" onChange={ (event: ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value) }/>
                    </tr>
                </table>
            </form>

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