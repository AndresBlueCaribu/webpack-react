import React from "react"
import { render } from "react-dom";
import Pepito from "./pepito";
import "./style.css";
import img from "./prueba.jpg";

console.log("Hola")
function App() {
    return (
        <div>
            <Pepito/>
            <img src={img}  alt="" width={300} />  
        </div>
    )
}

render( <App/> , document.getElementById("app"));