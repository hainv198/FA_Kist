import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const CardInfo = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    useEffect(() => {
        let url = 'https://62b297ff20cad3685c902f74.mockapi.io/product/' + params.id;
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    return (
        <div>
            {product !== null ?
                <div>
                    <h1>{product.id}</h1>
                    <h1>{product.name}</h1>
                    <h1>{product.cardNum}</h1>
                    <h1>{product.cardPassword}</h1>
                    <h1>{product.typeCard}</h1>
                    <h1>{product.phone}</h1>
                    <h1>{product.address}</h1>
                </div> : <h1>Loading</h1>
            }
        </div>

    );
};

export default CardInfo;