import Inputform from "./components/UI/Inputform"
import Head from "./components/Head"
import Body from "./components/Body"
import Addbtn from "./components/UI/Addbtn"
import { useState } from "react"
import Tablelist from "./components/Tablelist"

export default function App(){

  const[product,setProduct]=useState([
    {id:1, title:'Samsung S10', cost:'250$'},
    {id:2, title:'Samsung S10+', cost:'290$'},
    {id:3, title:'Samsung S20', cost:'550$'},
    {id:4, title:'Samsung S20+', cost:'590$'}
  ])

  const[title,setTitle]=useState('');
  const[cost,setCost]=useState('');

  const addProduc=(e)=>{

    const newProduct={
      id:Date.now(),
      title,cost
    }
    setTitle('');
    setCost('');


    setProduct([...product,newProduct])



  }

  const removeProduct=(data)=>{
    setProduct(product.filter(m=>m.id !== data.id))
  }




  return(
    <div className="card w-75 mx-auto mt-5 p-4">
      <form>
        <Inputform type="text" 
        className="form-control w-50 mx-auto mt-2"
        placeholder='Entery product name'
        value={title}
        onChange={e=>setTitle(e.target.value)}
        />

        <Inputform type="text" 
        className="form-control w-50 mx-auto mt-2"
        placeholder='Entery product cost'
        value={cost}
        onChange={e=>setCost(e.target.value)}
        />
      </form>

      <Addbtn className="btn btn-success w-50 mx-auto mt-3" onClick={addProduc}>
        Add product
      </Addbtn>

      <table className="table table-striped w-50 mx-auto mt-4 table-bordered table-hover">
        <Head/>
      </table>  
  
       {product.length ?  <Tablelist product={product} remove={removeProduct}/>
        : <div className="alert alert-danger w-50 mx-auto">NOT FOUND</div>}
      

      

    </div>
  )
}