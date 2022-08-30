import React from 'react';

interface PersonCardProps{
    firstName: string;
    lastName: string;
    age: number;
    hairColor: string;
}

export const PersonCardFunc = (props: PersonCardProps) => {
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            {/* <button onClick={ incrementAge }>Birthday Button for {fullName()} </button> */}
        </div>
    )

}