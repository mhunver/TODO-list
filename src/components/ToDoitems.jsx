import React, { useState } from "react";


function List(props){

    const [check,setcheck]=useState(false);
    

    function ack(){
    
        setcheck(true)
    }

    function adk(){
        setcheck(false)
    }

    return(
        <div id="input-area">
            <li 
                onClick={()=>{
                props.change(props.id)
                }}>
                {props.take}
                <button onMouseOver={ack} onMouseOut={adk} style={{ backgroundColor: check ? "red" : "#ffc93c" ,
                marginLeft:"280px",
                borderRadius:"15px",
                cursor:"pointer"
                } }><span>DELETE</span></button>
                
                
            </li>
            
        </div>
    )



}

export default List;