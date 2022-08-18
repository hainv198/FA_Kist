import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeEcoBicycle from "./Layout/Home/home.ecobicycle";
import ContentsEco from "./Layout/Contents/contents.eco";
import MainEco from "./Page/Main/main.eco";
import EcoSignin from "./Components/Authentication/Eco.SignIn/Eco.Signin";
import BuyCardEco from "./Page/BuyCard";
import Prepaid from "./Page/BuyCard/Prepaid/Prepaid";
import EcoMembership from "./Components/Authentication/Eco.SignIn/Membership/Eco.Membership";

import LoginAccount from "./Components/Authentication/Eco.Signup/LoginAccount";
import Demo from "./Components/Authentication/Eco.Signup/User";
import CardInfo from "./Page/CardInfo/CardInfo";
// import Demo from "./Components/Authentication/Eco.Signup/Demo";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomeEcoBicycle/>}>
                        <Route path='sign_account' element={<LoginAccount/>}/>
                        <Route index element={<ContentsEco/>}/>
                        <Route path='signup' element={<EcoSignin/>}></Route>
                        <Route  path='signup/new_signin' element={<EcoMembership/>}/>
                        <Route  path='signup/new_signin/create_account' element={<Demo/>}/>
                        <Route path='main/:id' element={<MainEco/>}></Route>
                        <Route path='info/:id' element={<CardInfo/>}></Route>
                        <Route path='main/buy_card/prepaid' element={<Prepaid/>}></Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;