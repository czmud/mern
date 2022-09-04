import React from 'react';
import { useParams } from 'react-router-dom';


export const Number = () => {
    const { routeNumber } = useParams();

    return(
        <h1>The number is: { routeNumber }</h1>
    );
}