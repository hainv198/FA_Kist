import React, {useState} from 'react';
import image from '../../image/Atm.png'
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom'
import {useEffect} from "react";


const LoginAccount = () => {
    const [cardNum, setCardNum] = useState('')
    const [cardPassword, setCardPassword] = useState('')
    const navigate = useNavigate()
    const [datas, setDatas] = useState('')
    const [target, setTarget] = useState(null)



    const handleCard = (e) => {
        setCardNum(e.target.value)
    }
    const handleNum = (e) => {
        setCardPassword(e.target.value)
    }


    useEffect(() => {
        if(localStorage.getItem('user_info')) {
            navigate('/main')
        }
    },[])

    async function login() {
        if(cardNum === '' && cardPassword === '') {
            alert('Please enter enough value ')
        }
        let item = {cardNum, cardPassword}
        console.log(item)
        //http://localhost:8080/api/auth/signin/
        let result = await fetch('https://62b297ff20cad3685c902f74.mockapi.io/product', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json()
        localStorage.setItem("user_info", JSON.stringify(result))
        navigate('/main')
    }
    
    return (
        <div style={{marginTop:100}}>
            <h1>Sign in</h1>
            <div className='row mt-5' style={{width:'80%', margin:'auto'}}>
                <div className='col-md-6 col-lg-6'>
                    <img src={image}
                         alt=""
                         width='100%'
                    />
                </div>
                <div className='col-md-6 col-lg-6 mt-5'>
                    <input type="number"
                           placeholder='number id'
                           value={cardNum}
                           onChange={handleCard}
                    />
                    <input type="password"
                           className="form-control"
                           id="validationCustom02"
                           value={cardPassword}
                           onChange={handleNum}
                           required
                    />
                    <Button type="button" onClick={login}>Submit form</Button>

                </div>

            </div>
        </div>

    );
};

export default LoginAccount;