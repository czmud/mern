import React, { useState } from 'react';
import { TabDisplaySelected } from './tabDisplaySelected';
import { TabsDisplay } from './tabsDisplay';



export const TabContainer = () => {
    const [tabSelectedIndex, setTabSelectedIndex] = useState(0)
    const tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];

    const handleTabSelected = (i: number) => {
        setTabSelectedIndex( i );
    }

    return(
        <>
            <TabsDisplay tabs={tabs} handleTabSelected={handleTabSelected} tabSelectedIndex={tabSelectedIndex}/>
            <TabDisplaySelected tab={tabs[tabSelectedIndex]}/>
        </>
    )

}