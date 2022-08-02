import "../styleSheets/Input.css";
import React from 'react';
import {useState} from "react";

function Input({submitChange}){

    const [input,setInput] = useState(null);
    const changeManager = (inputText) =>{
        setInput(inputText.target.value);
        console.log("el input es: ",inputText.target.value);
    }

    const  handleSubmit = (e) =>{
        e.preventDefault();
        setInput(null);
        submitChange(input);
        const inputValue = document.querySelector(".formContainer__input");
        inputValue.value = "";
    }

    return(
        //El onSubmit es un prop no es igual al onsubmit
        <form className="formContainer" onSubmit={handleSubmit}> 
            <input 
            className="formContainer__input" 
            placeholder="Write a place"
            onChange={changeManager}
            />
        </form>
    )
        
}

export default Input;