import ReactGA from 'react-ga';

import Homepage from "./Components/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/navbar/Navbar";
// import Pheader from "./Components/navbar/Pheader";
import Login from "./Components/login/Login"
import Registration from "./Components/registration/Registration"
import RegistrationFromInvite from "./Components/registration/RgistrationFromInvite"
import Cards from "./Components/homepage/card/Cards";
import BuyPopup from "./Components/buyPopup/BuyPopup";
import CommingSoon from "./Components/commingSoon/CommingSoon";
import PaymentDrop from "./Components/PaymentGetway/PaymentDrop";
import PhantomWallet from "./Components/PhantomWallet/PhantomWallet";
import NftDetail from "./Components/NftDetail/NftDetail";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Marketplace from "./Components/marketplace/Marketplace";
import MarketplaceType from "./Components/marketplace/Marketplace";
import Card from "./Components/homepage/card/Card";
import Profile from "./Components/profile/Profile";
import SkinDetail from './Components/Skin Detail/SkinDetail';
import OurTeam from "./Components/Our Team/OurTeam";
import EditProfile from './Components/profile/EditProfile';

ReactGA.initialize('UA-231739890-1');

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/navbar" element={<Navbar/>} />
          <Route exact path="/footer" element={<Footer/>} />
          <Route exact path="/paymentDrop" element={<PaymentDrop/>} />
          <Route exact path="/commingSoon" element={<CommingSoon/>} />
          <Route exact path="/cards" element={<Cards/>} />
          <Route exact path="/buyPopup" element={<BuyPopup/>} />
          <Route exact path='/registration' element={< Registration/>}></Route>
          <Route exact path='/registrationfrominvite' element={< RegistrationFromInvite/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/wallet' element={<PhantomWallet/>}></Route>
          <Route exact path='/nftdetail/:index/:name' element={<NftDetail/>}></Route>
          <Route exact path='/marketplace' element={<Marketplace/>}></Route>
          <Route exact path='/marketplace/:type' element={<MarketplaceType/>}></Route>
          <Route exact path='/card' element={<Card/>}></Route>
          <Route exact path='/profile' element={<Profile/>}></Route>
          <Route exact path='/skindetail/:index/:name/:slug' element={<SkinDetail/>}></Route>
          <Route exact path='/ourteam' element={<OurTeam/>}></Route>
          <Route exact path='/editprofile' element={<EditProfile/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
