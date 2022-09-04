import React from 'react';
import { useParams } from 'react-router-dom';



export const Word = () => {
    const { wordText } = useParams();
    const { textColor = 'black' } = useParams();
    const { backgroundColor = 'white' } = useParams();

    const headerStyle = {
        'color': textColor,
        'background': backgroundColor
    }

    return(
        <h1 style={headerStyle}> The word is: {wordText} </h1>
    )
}