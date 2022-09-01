import React from 'react';
import { Box } from './box';

interface BoxProps{
    boxes: Box[];
}

export const BoxDisplay = (props: BoxProps) => {

    return(
        <>
        { props.boxes.length > 0 ?
        <div>
            { props.boxes.map( (box, i) => <div key={i} style={{background: box.color, height: box.pixelSize, width: box.pixelSize}}></div>)}
        </div>
        : ""}
        </>
    )

}