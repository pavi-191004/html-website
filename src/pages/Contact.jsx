import React from 'react'
 import Form from 'react-bootstrap/Form';
 import { Nav } from './Nav';


export const Contact = () => {
  return (
    <>
   <TextControlsExample/>

   </>
  )
 

function TextControlsExample() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="student name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button>submit</button>
      
    </Form>
    
  );
}


}
