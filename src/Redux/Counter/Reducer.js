import { ADD,SUB } from "./actiontype"

let initialState={
    counter:0
}
 
 export function reducer(state=initialState,{type,payload}){

   switch(type){
    
    case ADD:
        return{counter:state.counter+payload}
     
    case SUB:
        return{counter:state.counter-payload}


    default:
        return state
   }

 }