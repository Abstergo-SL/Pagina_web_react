import React from 'react';



export function TopNav({callback}:{callback:void}){


  return(
    <div style={{position:"fixed", width:"100%", zIndex:"100", backgroundColor:"#2d364e", margin:"0", height:"7vh", borderBottomLeftRadius:"12px", borderBottomRightRadius:"12px"}} >
      <ul>
        <li><span style={{fontSize:"30px", marginRight:"50px"}} onClick={()=>callback()} >☰</span>Abstergo Gaming</li>
        <li>
          Esto es 
        </li>
        <li>
          un top nav
        </li>
        <li></li>
      </ul>
    </div>
  )
}