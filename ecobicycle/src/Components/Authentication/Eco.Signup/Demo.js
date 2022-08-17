/*
import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Demo = () => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [cardPassword, setCardPassword] = useState('')
    const [typeCard, setTypeCard] = useState('')
    const [error, setError] = useState('');
    const [datas, setDatas] = useState('')

    const handlePass = (e) => {
        setCardPassword(e.target.value)
    }
    const handleNum = (e) => {
        setCardPassword(e.target.value)
    }

    useEffect(() => {
        fetch('https://62b297ff20cad3685c902f74.mockapi.io/product')
            .then((res) => res.json())
            .then((res) => {
                setDatas(res)
            })
    },[])

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user_info')) {
            navigate('/main')
        }
    },[])

    const handleLogin = (e) => {
        if(name === '' && address === '' && phone === '') {
            return alert("Please ...")
        }
        if(handlePass === datas.data.cardPassword && handleNum === datas.data.cardNum ) {
            e.preventDefault()
            console.log(name, address, phone)
            setError('')
            //http://localhost:8080/customer/

            axios.post('https://62b297ff20cad3685c902f74.mockapi.io/product', {
                name:name,
                address:address,
                phone:phone,
                cardNum:cardNum,
                cardPassword:cardPassword
            })
                .then(result => {
                    console.log(result.data)

                })
                .catch(err => {
                    setError(err.message)
                    alert(err.message)
                })
            navigate('/main')
        }

    }

    return (
        <div style={{width:'70%', margin:'auto'}}>
            <form className="row g-3 needs-validation mt-5" noValidate>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Name</label>
                    <input type="text"
                           className="form-control"
                           id="validationCustom01"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Phone</label>
                    <input type="number"
                           className="form-control"
                           id="validationCustom02"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Address</label>
                    <input type="phone"
                           value={address}
                           onChange={(e) => setAddress(e.target.value)}
                           className="form-control"
                           id="validationCustom03"
                           required/>
                    <div className="invalid-feedback">
                        Please provide a valid address
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Card Number</label>
                    <input type="number"
                           className="form-control"
                           id="validationCustom01"
                           value={cardNum}
                           onChange={(e) => setCardNum(e.target.value)}
                           required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Type Card</label>
                    <input type="text"
                           className="form-control"
                           id="validationCustom01"
                           value={typeCard}
                           onChange={(e) => setTypeCard(e.target.value)}
                           required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Password</label>
                    <input type="password"
                           className="form-control"
                           id="validationCustom01"
                           value={cardPassword}
                           onChange={(e) => setCardPassword(e.target.value)}
                           required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={handleLogin}>Submit form</button>
                </div>
            </form>
        </div>
    );
};

export default Demo;*/
