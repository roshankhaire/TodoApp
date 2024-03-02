import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "./TodoSlice";
import Button from 'react-bootstrap/Button';

const Todos=()=>{
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
   
     return (
        <>
        <h1 style={{color:"red"}}><i>todos</i></h1>
        <ul>{todos.map((t)=>{
            return(
                <li  key={t.id} >
                   <i> {t.text}</i>
                    
                    <Button variant="primary" onClick={()=> dispatch(removeTodo(t.id))}>Delete</Button>{' '}
                </li>

            )
        })}</ul>
        </>
     )
}
export default Todos