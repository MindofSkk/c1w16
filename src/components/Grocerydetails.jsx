import React from "react"
import data from '../data.json'


const GroceryDetails = ()=>{
console.log(data)

const appendData=(data)=>{

    console.log("hello i am working")
    for(var i=0; i<10; i++)
    {
       let div =document.createElement("div");
       let name=document.createElement("p");
       name.innerHTML=data[i].title;
     
        let p =document.createElement("p");
        p.innerText=data[i].price;

    document.createElement("p").innerText=data[i].title
        
       
    }
    
}



    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
       
        {/* { appendData(data)} */}
        </div>
        </>
    )
}
export default GroceryDetails