import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { createDonor } from '../../api/DonorService'


export default function Register() {

    const [input, setInput] = useState({
        name: '', phone: '', address: '', email: '', city: '', password: '', user: ''
    })


    function handleChange(e) {
        setInput(prev => {
            return { ...prev ,  [e.target.name]: e.target.value }
        })
    }

    function handleClick() {
        createDonor(input)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    console.log(input);



    return (
        <Container>
            <Form>
                <h1 className='text-center my-3'>Register</h1>
                <Row md={2} xs={1}>
                    <Col>
                        <Form.Label>user</Form.Label>
                        <Form.Select className='text-center'
                        name="user"
                            onChange={handleChange}
                            value={input.user}
                        >
                            <option value="Member">Member</option>
                            <option value="Donor">Donor</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder='Enter your name' onChange={handleChange} value={input.name} />
                    </Col>
                    <Col>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" name="phone" placeholder='Enter your phonr'
                            onChange={handleChange} value={input.phone} />
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder='Enter your email'
                            onChange={handleChange} value={input.email} />
                    </Col>
                    <Col>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder='Enter your password' onChange={handleChange} value={input.password} />
                    </Col>
                    <Col md={12}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" name="address" type="text" placeholder='Enter your address' onChange={handleChange} value={input.address} />
                    </Col>
                </Row>
                <Button variant='success' className='my-2' onClick={handleClick}>Submit</Button>
            </Form>
        </Container >
    )
}
