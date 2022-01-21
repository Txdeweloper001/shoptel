import Body from "./Body"
import {CSSTransition,TransitionGroup} from "react-transition-group"


export default function Tablelist({product,remove}){
    return(
        <>
        <TransitionGroup>
          {product.map((data, index)=><CSSTransition
          key={data.id}
          timeout={500}
          classNames="item"><Body remove={remove} data={data} num={index+1} key={data.id}/></CSSTransition>)}
        </TransitionGroup>
        
        </>
    )
}