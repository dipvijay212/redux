import { ADD, SUB } from "./actiontype";




export function AddtoCounter(val){
    return{type:ADD,payload:val}
}

export function SubtoCounter(val){
    return{type:SUB,payload:val}
}