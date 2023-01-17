import React from 'react';


export function Menu({items, show}:{items:[], show:boolean}) {
  
  const menu = React.useRef(null);

  React.useEffect(()=>{
    if (show) {
      menu.current.style.transform = "translatex(0%)"
    } else{
      menu.current.style.transform = "translatex(-100%)"
    }
  }, [show]);

  return(
    <div ref={menu} style={{position:"fixed", zIndex:"90", backgroundColor:"#272F43", height:"100vh", width:"10%", transform:"translatex(-100%)"}}>
      Cositas
    </div>
  )
}