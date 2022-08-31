import React from 'react';

interface ErrorProps{
    error: string;
    updateToggle: boolean;
}

export const ErrorField = ( props: ErrorProps ) => {
    
    return(
        <>
            { props.error && props.updateToggle ? <td style={{color: 'red'}} > {props.error} </td>: '' }
        </>
    )

}