import React, { useState } from 'react'
import './EditProfile.css'
import Navbar from '../navbar/Navbar'
import cancelIcon from "./images/edit profile cross.svg"
import donelIcon from "./images/edit profile right.svg"
import { useNavigate, Link } from 'react-router-dom'
import { customEvent } from '../utils/analyticsHelper';

function EditProfile() {

    const [orderDetails, setOrderDetails] = useState({ firstname: "", lastname: "", contact: "", country: "" })

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`https://suga-server.herokuapp.com/api/userdetails/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                firstname: orderDetails.firstname,
                lastname: orderDetails.lastname,
                contact: orderDetails.contact,
                country: orderDetails.country,
            })
        });
        const Json = await res.json()
        navigate("/profile")
        console.log(Json, "onEditClick");
    }

    const onChange = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='editProfile2'>
                <div className='editProfileNavbar'>
                    <Navbar />
                </div>
                <div className='profileTxt3'>Profile</div>

                <div className='editProfileFormFlex2'>
                    <div className='profileFormWtdth1'>
                        <div className='editProfileForm1'>
                            <form className="row g-3 container" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label for="inputFirstName2" className="form-label, editProfileLable1">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputFirstName2"
                                        name="firstname"
                                        required
                                        value={orderDetails.firstname}
                                        onChange={onChange}
                                        placeholder='input first name' />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputLastName2" className="form-label, editProfileLable1">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputLastName2"
                                        placeholder='input last name'
                                        name="lastname"
                                        required
                                        value={orderDetails.lastname}
                                        onChange={onChange} />
                                </div>
                                {/* <div className="col-md-6">
                                    <label for="email2" className="form-label, editProfileLable1">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email2"
                                        placeholder='input email'
                                        // required
                                        // name="email"
                                        // value={orderDetails.email}
                                        // onChange={onChange}
                                    />
                                </div> */}
                                <div className="col-md-6">
                                    <label for="inputPhoneNumber2" className="form-label, editProfileLable1">Phone Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="inputPhoneNumber2"
                                        placeholder='input phone number'
                                        name="contact"
                                        required
                                        value={orderDetails.contact}
                                        onChange={onChange}
                                    />
                                </div>
                                {/* <div className="col-md-6">
                                    <label for="inputUserName2" className="form-label, editProfileLable1">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputUserName2"
                                        placeholder='input username'
                                        // name='username'
                                        // required
                                        // value={orderDetails.username}
                                        // onChange={onChange}
                                    />
                                </div> */}
                                <div className="col-md-6">
                                    <label for="email2" className="form-label, editProfileLable1">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="country2"
                                        placeholder='input country name'
                                        name="country"
                                        required
                                        value={orderDetails.country}
                                        onChange={onChange} />
                                </div>

                                <div className='btnFlexP'>
                                    <div className="">
                                        <button className="btn btn-primary1" onClick={() => customEvent("Cancel", `${localStorage.getItem("token")}`, "To not edit profile")}><Link to="/profile"><img src={cancelIcon} alt="cancel" /></Link></button>
                                    </div>
                                    <div className="">
                                        <button type="submit" onClick={() => customEvent("Profile Edited", `${localStorage.getItem("token")}`, "From Edit Profile Page")} className="btn btn-primary1"><img src={donelIcon} alt="done" /></button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile