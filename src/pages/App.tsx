import React from "react";
import { TopNav } from '../components/TopNav';
import { Menu } from '../components/Menu';
import '../styles/App.css';
import logo from '../img/logo.png'


export default function App() {

  function menuClick(){
    console.log("ey");
  }

  return (
    <div>
      <header>
        <TopNav callback={menuClick()} ></TopNav>
      </header>
      <Menu items={[]} show={false}></Menu>
      <div>
        <div style={{ height: "80vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }} >
          <div style={{width: "45%", textAlign: "center", backgroundColor:"rgba(45, 54, 78, 0.9)", borderRadius:"12px", height:"35vh" }} >
            <span style={{ fontSize: "65px", fontWeight: "bolder"}} >Esto es un texto <span style={{color:"#54c58a"}} >grande</span></span><br />
            <div style={{ fontSize: "30px", color:"grey", marginLeft:"7%", paddingRight:"10%", textAlign:"left"}} >
              Este texto es de forma relativa al texto superior mas pequeño
              Lorem Ipsum dolor sit amet
            </div>
            <br /><br />
            <div style={{display:"flex", justifyContent:"flex-start"}} >
              <button style={{width:"30%", height:"6vh", fontSize:"20px", cursor:"pointer", marginLeft:"5%", backgroundColor:"#54c58a", borderRadius:"5px"}} >Download</button>
              <button style={{width:"30%", height:"6vh", color:"black", cursor:"pointer", marginLeft:"5%"}} >Boton 2</button>
            </div>
          </div>
          <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", backgroundColor: "#2d364e", borderRadius: "50%" }} >
            <img
              style={{ width: "500px", margin:"0" }}
              src={logo} alt="Aqui va una imagen" />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#222b45", height: "80vh", opacity: "0.95", borderRadius: "5px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "12px", height: "70vh", width: "25%", color: "black" }} >
            una cosa
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "12px", height: "70vh", width: "25%", color: "black" }} >
            dos cosa
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "12px", height: "70vh", width: "25%", color: "black" }} >
            tres cosa
          </div>
        </div>

        <div style={{ height: "40vh" }} >
          Otra cosa
        </div>
      </div>

      <footer style={{ backgroundColor: "#222b45", height: "5vh" }}>
        Buenas tardes esto es un footer
      </footer>
    </div>
  );
}
