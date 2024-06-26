
import React from "react";
import "./Planla.css";
import { Input } from 'antd';
import ToDoList from "./ToDoList";

function Planla(){
    
    return(
        <div className="sırala">
            <div className="containerr">
                <h1>Günü Planla</h1>
            </div>
            <div className="containerr">
                <h1>Ayı Planla</h1>
                
            </div>
            <div className="containerr">
                <h1>Yılı Planla</h1>
               
            </div>
        </div>
    );
}

export default Planla;




/*
<Input className="input" placeholder="plan" />
                <button className="buttonplan">planla</button>
                <Input className="input" placeholder="plan" />
                <button className="buttonplan">planla</button>
                 <Input className="input" placeholder="plan" />
                <button className="buttonplan">planla</button>
                */