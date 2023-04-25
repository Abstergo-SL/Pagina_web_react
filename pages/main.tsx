import * as React from "react";
import Landing from './landing';
import Download from './dowload';
import AboutUs  from "./aboutUS";
import { theme } from '../interfaces/theme'



export function main(props:any) {
    const theme:theme = props.theme;

    return(
        <div style={{ backgroundColor: theme.palette.background.default }}>
            {props.currPage == "landing" ? <Landing></Landing>
              : props.currPage == "DOWNLOAD" ? <Download></Download>
                :  <AboutUs></AboutUs>}
        </div>
    )
}

export default main;