
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.css';

export default function TodoForm() {
  return (
    <div className='overlay'>
          <div className='container text-center pt-5 '>
              <div className='row mt-5'>
                    <div className='col-md-3'></div>
                        <Form className='col-md-6'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className='h1'>What's The Plan</Form.Label>
                          <Form.Control type="text" className='input mt-3' placeholder="Enter Your Task" />
                        </Form.Group>
                        <Button variant="primary" className='mt-3 button-1' type="submit">
                          Submit
                        </Button>
                      </Form>
                  <div className='col-md-3'></div>
              </div>
            </div>
    </div>
  )
}
