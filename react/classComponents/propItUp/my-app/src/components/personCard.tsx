import React, { Component } from 'react';

interface PersonCardProps{
    firstName: string;
    lastName: string;
    age: number;
    hairColor: string;
}

export class PersonCard extends Component<PersonCardProps>{
    
    
    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        )
    }
}




