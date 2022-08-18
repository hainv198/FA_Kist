import React, {useEffect, useState} from 'react';
import './main.eco.scss'
import AddCardIcon from '@mui/icons-material/AddCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import BadgeIcon from '@mui/icons-material/Badge';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useTypewriter} from 'react-simple-typewriter'
import {Link, useParams} from "react-router-dom";
import PaidIcon from '@mui/icons-material/Paid';
const MainEco = () => {
    const {text} = useTypewriter({
        words: ['Hello', 'Today I would like to ...','Hello', 'Today I would like to ...','Hello', 'Today I would like to ...','Hello', 'Today I would like to ...', ],
        loop: 10
    })

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

        <div className=' row main_eco container' style={{margin:'auto'}}>
            {product !== null ? (
                <div className='row '>
                    <div className='text-center text-light mt-5 col-sm-12 main_eco_content'>
                        <h1>Welcome {product.name} to EcoBicycle Rentail !</h1>
                        {/*<span> {text}</span>*/}
                    </div>
                    <div className='mt-5 row main_eco_card'>
                        <div className=' row col-sm-12 col-md-12 col-lg-6 buy_card'>
                            <h3 className='text-center fs-1 text-white'>Card</h3>
                            <div className='col-lg-6 card_item'>
                                <Link className='to_link'
                                      to='buy_card'>
                                    <PaidIcon/>
                                    <br/>
                                    <span className='text-center'>Buy a card</span>
                                </Link>
                            </div>
                            <div className='col-lg-6 card_item'>
                                <Link className='to_link'
                                      to='buy_card'>
                                    <AddCardIcon/>
                                    <br/>
                                    <span className='text-center'>Top up to card</span>
                                </Link>

                            </div>
                        </div>
                        <div className=' row col-sm-12 col-md-12 col-lg-6 buy_card'>
                            <h3 className='text-center fs-1 text-white '>Bice</h3>
                            <div className='col-lg-6 card_item'>
                                <Link className='to_link'
                                      to='buy_card'>
                                    <DirectionsBikeIcon/>
                                    <br/>
                                    <span className='text-center'>Rent a bike</span>
                                </Link>
                            </div>
                            <div className='col-lg-6 card_item'>
                                <Link className='to_link'
                                      to='buy_card'>
                                    <ShoppingCartCheckoutIcon/>
                                    <br/>
                                    <span className='text-center'>Return Bike</span>
                                </Link>
                            </div>
                        </div>
                        <div className=' row col-sm-12 col-md-12 col-lg-6 buy_card'>
                            <div style={{padding:20}}></div>
                            <div className='col-lg-6 card_item'>
                                <Link className='to_link'
                                      to='buy_card'>
                                    <CreditScoreIcon/>
                                    <br/>
                                    <span className='text-center'>Return a card</span>
                                </Link>
                            </div>
                            <div className='col-lg-6 card_item'>
                                <Link className='to_link'
                                      to={`/info/${product.id}`}>
                                    <BadgeIcon/>
                                    <br/>
                                    <span className='text-center'>Card Info</span>
                                </Link>
                            </div>
                        </div>
                        <div className=' row col-sm-12 col-md-12 col-lg-6 buy_card'>
                            <div style={{padding:20}}></div>
                            <div className='col-lg-6 card_item'>
                                <Link className='to_link'
                                      to='buy_card'>
                                    <FactCheckIcon/>
                                    <br/>
                                    <span className='text-center'>Todo</span>
                                </Link>
                            </div>
                            <div className='col-lg-6 card_item'>
                                <Link className='to_link'
                                      to='buy_card'>
                                    <PhoneInTalkIcon/>
                                    <br/>
                                    <span className='text-center'>Contact us</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <div>loding---</div>
            )}

        </div>
    );
};

export default MainEco;