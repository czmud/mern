import React, { Component } from 'react';

interface PersonCardProps{
    firstName: string;
    lastName: string;
    age: number;
    hairColor: string;
}

interface PersonCardStates{
    age: number;
}

export class PersonCard extends Component<PersonCardProps, PersonCardStates>{
    constructor(props: PersonCardProps | Readonly<PersonCardProps>){
        super(props);
        this.state = {age: this.props.age};
    }
    
    incrementAge = () => {
        this.setState({age: this.state.age + 1});
    }
    fullName(): string{
        return this.props.firstName + " " + this.props.lastName;
    }

    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ this.incrementAge }>Birthday Button for {this.fullName()} </button>
            </div>
        )
    }
}




