import * as React from "react";
import Landing from './landing';
import Download from './dowload';
import AboutUs  from "./aboutUS";
import { theme } from '../interfaces/theme'



export function main(props:any) {
    
    const theme:theme = props.theme;


    const callback = (Name:string) => {
        props.callback(Name)
    }

    return(
        <div style={{ backgroundColor: theme.palette.background.default }}>
            {props.currPage == "landing" ? <Landing changePage={callback}></Landing>
              : props.currPage == "DOWNLOAD" ? <Download changePage={callback}></Download>
                :  <AboutUs changePage={callback}></AboutUs>}
        </div>
    )
}

export default main;