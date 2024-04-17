import React, { useState } from "react";

import Lİ from "./ToDoitems";


function App() {

  const [input1,setİnput]= useState("");
  const [items,setİtems]= useState([]);



function Value(event){
  console.log(event.target.value);
  setİnput(event.target.value)

}

function Add_button(){
  setİtems(prevkelle =>{
    return [...prevkelle,input1]
    
  })
  setİnput(""); 
}

function delete_item(id){
  console.log(id)
  setİtems(prevvalues=>{
    return prevvalues.filter((item,index)=>{
      return index !==id;

    })
  })

}


  return (
    <div className="container">
      <h1>Todo-List</h1>


      <div className="form">
        <input onChange={Value} type="text" name="input" value={input1} />
        <button onClick={Add_button}><span>Add</span></button>
      </div>


      <div>
        <ul>
          {items.map((todoitem,index) =>(
            <Lİ 
             key={index}
             id={index}
             take={todoitem}
             change={delete_item}
             
             />
          ))}
          

          
        </ul>
        
      </div>


      
    </div>
  );
}

export default App;
