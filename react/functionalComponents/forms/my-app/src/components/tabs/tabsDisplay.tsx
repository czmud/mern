import React from 'react'

const tabSelectedStyle = {
    background: 'green'
}

interface TabProps{
    tabs: string[];
    tabSelectedIndex: number;
    handleTabSelected: Function;
}

export const TabsDisplay = (props: TabProps) =>{

    return(
        <>
            { props.tabs.map( (tab, i) => 
                <button key={i} style={ props.tabSelectedIndex === i ? tabSelectedStyle : {} }onClick={ () => props.handleTabSelected(i) }>{tab}</button>
            )}
        </>
    )
}