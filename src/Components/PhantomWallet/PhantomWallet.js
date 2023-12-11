import React, {useState} from 'react'
import './phantomWallet.css'
import { NavLink } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import back from "../homepage/logos/COD1.png"
import { message } from 'antd';
import 'antd/dist/antd.css';

function PhantomWallet() {
    const [id, setId] = useState({ id: ""})

    const handleSubmit = async (e) => {
      e.preventDefault();

      const res = await fetch(`https://suga-backend-0bkm.onrender.com/api/wallet/phantom`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          id: id.id,
        })
      });
      const Json = await res.json()
      message.success("We have received your wallet id, the asset will be tranferred to you real soon..!");
      console.log(Json);
    }

    const onChange = (e) => {
      setId({ ...id, [e.target.name]: e.target.value })
    }

    return (
        <>
        <div className="Fback">
        <div className="Pnav"><Navbar/></div>
        <div className='phantom'>
                <h1 className='phantomText'>Phantom Wallet</h1>
                <div className='Pform'>
                <form onSubmit={handleSubmit}>
                    {/* <input
                    type="text"
                    placeholder='Enter Wallet Name'
                    name='name'
                    required
                    value={id.name}
                    onChange={onChange}
                    /><br/> */}
                    <input
                    type="text"
                    placeholder='Enter Wallet Id'
                    name='id'
                    required
                    value={id.id}
                    onChange={onChange}
                    /><br/>
                    <button type='submit' >Link Wallet</button><br/>
                </form>
                    <a href="https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en"><button className='outerbtn'>Create Wallet</button></a>
                </div>
        </div>
        </div>
        </>
    )
}

export default PhantomWallet