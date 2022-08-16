import React, {useState} from 'react';
import axios from 'axios'
const Demo = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const handleLogin = () => {
        console.log(name, address, phone)
        axios.post('https://62b297ff20cad3685c902f74.mockapi.io/product', {
            name:name,
            address:address,
            phone:phone
        })
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                alert(err)
            })
    }
return (
    <div>
        name: <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        address: <input type="text" onChange={(e) => setAddress(e.target.value)} value={address}/>
        phone: <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone}/>
        <button onClick={handleLogin}>Login</button>
    </div>
);
};

export default Demo;