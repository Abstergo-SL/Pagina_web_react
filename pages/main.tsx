import * as React from "react";
import Landing from './landing';
import Download from './dowload';
import AboutUs  from "./aboutUS";



export function main(props:any) {
    console.log(props);
    

    return(
        <div>
            {props.currPage == "landing" ? <Landing></Landing>
              : props.currPage == "DOWNLOAD" ? <Download></Download>
                :  <AboutUs></AboutUs>}
        </div>
    )
}

export default main;