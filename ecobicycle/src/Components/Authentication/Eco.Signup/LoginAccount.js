import React, {useState} from 'react';
import image from '../../image/Atm.png'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import {useEffect} from "react";


const LoginAccount = () => {
    const [validated, setValidated] = useState(false);
    const [cardId, setCardId] = useState('')
    const [cardNum, setCardNum] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('user_info')) {
            navigate('/main')
        }
    },[])

    async function login() {
        console.warn(cardId, cardNum)
        let item = {cardId, cardNum}
        let result = await fetch('https://62b297ff20cad3685c902f74.mockapi.io/product/', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json()
        localStorage.setItem("user_info", JSON.stringify(result))
        navigate('/main')
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div style={{marginTop:100}}>
            <div className='row mt-5' style={{width:'80%', margin:'auto'}}>
                <div className='col-md-6 col-lg-6'>
                    <img src={image}
                         alt=""
                         width='100%'
                    />
                </div>
                <div className='col-md-6 col-lg-6 mt-5'>
                    <Form
                        style={{padding:50, boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Row className="mb-4">
                            <Form.Group as={Col} md="5" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    onChange={(e) => setCardId(e.target.value)}
                                    required
                                    type="number"
                                    placeholder="Card id"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationCustom02">
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control
                                    onChange={(e) => setCardNum(e.target.value)}
                                    required
                                    type="number"
                                    placeholder="number card"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Form.Group className="mb-3 fs-5">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit" onClick={login}>Submit form</Button>
                    </Form>
                </div>

            </div>
        </div>

    );
};

export default LoginAccount;