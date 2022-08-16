import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeEcoBicycle from "./Layout/Home/home.ecobicycle";
import ContentsEco from "./Layout/Contents/contents.eco";
import MainEco from "./Page/Main/main.eco";
import EcoSignin from "./Components/Authentication/Eco.SignIn/Eco.Signin";
import BuyCardEco from "./Page/BuyCard";
import Prepaid from "./Page/BuyCard/Prepaid/Prepaid";
import EcoMembership from "./Components/Authentication/Eco.SignIn/Membership/Eco.Membership";
import EcoCreateMember from "./Components/Authentication/Eco.SignIn/CreateMember/EcoCreateMember";
import LoginAccount from "./Components/Authentication/Eco.Signup/LoginAccount";
import Demo from "./Components/Authentication/Eco.Signup/Demo";
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
                <Route path='main' element={<MainEco/>}></Route>
                <Route path='main/buy_card' element={<BuyCardEco/>}></Route>
                <Route path='main/buy_card/prepaid' element={<Prepaid/>}></Route>
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
