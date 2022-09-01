import React, {useState} from 'react'
import { Box } from './box'
import { BoxDisplay } from './boxDisplay'
import { BoxForm } from './boxForm';


export const BoxContainer = () => {
    const [boxes, setBoxes] = useState<Box[]>([]);
    
    const boxFormHandler = ( addBox: Box ) => {
        setBoxes([...boxes, addBox]);
    }

    return(
        <>
            <BoxForm formHandler={boxFormHandler} />
            <BoxDisplay boxes={boxes}/>
        </>
    )


}