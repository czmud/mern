import React from 'react';

interface TabProps{
    tab: string;
}

export const TabDisplaySelected = (props: TabProps) => {

    return(
        <>
        <p>{props.tab} content is showing here.</p>
        </>
    )

}