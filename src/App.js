import ReactGA from 'react-ga';

import GlobalState from './Context/GlobalState';
import Homepage from "./Components/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login"
import RegistrationFromInvite from "./Components/registration/RgistrationFromInvite"
import BuyPopup from "./Components/buyPopup/BuyPopup";
import CommingSoon from "./Components/commingSoon/CommingSoon";
// import PaymentDrop from "./Components/PaymentGetway/PaymentDrop";
import PhantomWallet from "./Components/PhantomWallet/PhantomWallet";
// import NftDetail from "./Components/NftDetail/NftDetail";
import Marketplace from "./Components/marketplace/Marketplace";
import MarketplaceType from "./Components/marketplace/Marketplace";
import Profile from "./Components/profile/Profile";
import SkinDetail from './Components/Skin Detail/SkinDetail';
import OurTeam from "./Components/Our Team/OurTeam";
import EditProfile from './Components/profile/EditProfile';
// import Verified from './Components/verified/Verified';
import Settings from './Components/Settings/Settings';
import EditSettings from './Components/Settings/EditSettings';
import AskToBuy from './Components/Ask to Buy/AskToBuy';
import VerifyEmail from './Components/Email Verification/VerifyEmail'
import VerifyEmail2 from './Components/Email Verification/VerifyEmail2'
import ForgotPassword from './Components/forget password/ForgotPassword'
import SetPassword from './Components/forget password/SetPassword'
import PasswordChanged from './Components/Email Verification/PasswordChanged';
import EscrowMarketplace from './Components/ESCROW/EscrowMarketplace';
import EscrowSkinDetail from './Components/ESCROW/EscrowSkinDetail';
import SellSkin from './Components/ESCROW/Sell/SellSkin';
import MyListings from './Components/ESCROW/Listings/MyListings';
import MyOrders from './Components/ESCROW/Listings/MyOrders';
import SideNavigation from './Components/SkinDeal/SideNavigation/SideNavigation';

ReactGA.initialize('UA-231739890-1'); 

function App() {
  return (
    <>

    <GlobalState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/comingSoon" element={<CommingSoon/>} />
          <Route exact path="/buyPopup" element={<BuyPopup/>} />
          <Route exact path='/registrationfrominvite' element={< RegistrationFromInvite/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/wallet' element={<PhantomWallet/>}></Route>
          <Route exact path='/marketplace' element={<Marketplace/>}></Route>
          <Route exact path='/marketplace/:type' element={<MarketplaceType/>}></Route>
          <Route exact path='/profile' element={<Profile/>}></Route>
          <Route exact path='/skindetail/:index/:name/:slug' element={<SkinDetail/>}></Route>
          <Route exact path='/comingSoon' element={<OurTeam/>}></Route>
          <Route exact path='/editprofile' element={<EditProfile/>}></Route>

          <Route exact path="/users/:id/verify/:token" element={<VerifyEmail2/>}></Route>
          <Route exact path='/settings' element={<Settings/>}></Route>
          <Route exact path='/editsettings' element={<EditSettings/>}></Route>
          <Route exact path='/asktobuy' element={<AskToBuy/>}></Route>
          <Route exact path='/emailverification' element={<VerifyEmail/>}></Route>
          <Route exact path='/forgotpassword' element={<ForgotPassword/>}></Route>
          <Route exact path='/password_changed' element={<PasswordChanged/>}></Route>
          <Route exact path='/user/:id/password_reset/:token' element={<SetPassword/>}></Route>
          <Route exact path='/loaderio-8c31020cd7202c6845b8e6f70795b477' element={"loaderio-8c31020cd7202c6845b8e6f70795b477"}></Route>
          <Route exact path='/escrowmarketplace' element={<EscrowMarketplace/>}></Route>
          <Route exact path='/escrowskindetail/:index' element={<EscrowSkinDetail/>}></Route>
          <Route exact path='/sellskin' element={<SellSkin/>}></Route>
          <Route exact path='/mylistings' element={<MyListings/>}></Route>
          <Route exact path='/myorders' element={<MyOrders/>}></Route>
          <Route exact path='/skindeal' element={<SideNavigation/>}></Route>
          
        </Routes>
      </Router>
      </GlobalState>
    </>

  );
}

export default App;
