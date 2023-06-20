import * as React from "react";
import Landing from './landing';
import Download from './dowload';
import AboutUs  from "./aboutUS";
import { theme } from '../interfaces/theme'



export function main(props:any) {
    
    const theme:theme = props.theme;
    const [page, SetPage] = React.useState("");


    React.useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        let tmPage = urlParams.get("page");
        if (tmPage != null) {
            SetPage(tmPage);
        } else {
            SetPage(props.currPage);
        }
        
        // console.log(urlParams.get("page"));
        console.log(page);
        
    }, [props])


    const callback = (Name:string) => {
        props.callback(Name)
    }

    return(
        <div style={{ backgroundColor: theme.palette.background.default }}>
            {page == "landing" ? <Landing changePage={callback}></Landing>
              : page == "DOWNLOAD" ? <Download changePage={callback}></Download>
                :  <AboutUs changePage={callback}></AboutUs>}
        </div>
    )
}

export default main;