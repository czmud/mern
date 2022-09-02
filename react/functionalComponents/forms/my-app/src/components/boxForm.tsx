import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Box } from './box';

interface BoxFormProps{
    formHandler: Function
}

export const BoxForm = (props: BoxFormProps) => {
    const [color, setColor] = useState("");
    const [pixelSize, setPixelSize] = useState(0);

    const saveBox = (event: FormEvent) => {
        event.preventDefault();
        if( color.length < 1 || pixelSize < 1 ){ 
            return;
        }
        props.formHandler( new Box(color, pixelSize));
        setColor("");
        setPixelSize(0);
    }

    const handlePixelSize = (pixelSizeInput: string ) => {
        setPixelSize(parseFloat(pixelSizeInput));
    }

    return(
        <>
        <form onSubmit={ saveBox }>
            <label>Color: </label>
            <input value={color} onChange={ (event: ChangeEvent<HTMLInputElement>) => setColor(event.target.value)}/>

            <label>Pixel Size: </label>
            <input type="number" value={pixelSize} onChange={ (event: ChangeEvent<HTMLInputElement>) => handlePixelSize(event.target.value)}/>

            <input type="submit" value="submit"/>
        </form>
        </>
    )

}