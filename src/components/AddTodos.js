import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "./TodoSlice";
const AddTodos=()=>{
    const [input ,setInput]=useState("")

    const dispatch=useDispatch()
    const addTodosHandler=(event)=>{
        event.preventDefault()
           
            dispatch(addTodo(input))
            console.log(input)
            setInput("")
    }
     return (
        <Form onSubmit={addTodosHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email a Todo...</Form.Label>
          <Form.Control type="text" placeholder="add todos"  onChange={(e)=>setInput(e.target.value)}/>
        </Form.Group>
       <button>Add Todos</button>
      </Form>
     )
}
export default AddTodos