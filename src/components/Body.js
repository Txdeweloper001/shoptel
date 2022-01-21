import React from "react"
const Body=(props)=>{

return(
    <>
        <div className="block d-flex justify-content-between border w-50 mx-auto align-item-center">
         <p>{props.num}</p>
         <p>{props.data.title}</p>
         <p>{props.data.cost}</p>
         <p><button className="btn btn-danger" onClick={()=>props.remove(props.data)}>Delete</button></p>
        </div></>   

)

}

export default  Body;