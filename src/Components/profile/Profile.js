import React, { useEffect, useState } from 'react'
import './Profile.css'
import Navbar from '../navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const [user, setUser] = useState()
    const [editedData, setEditedData] = useState()

    useEffect(() => {
        loadUserData();
        getNotes();
    }, []);

    const loadUserData = async () => {
        const responce = await fetch(`http://localhost:5000/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        const Json = await responce.json()
        setUser(Json)
    }

    console.log(user, "intial");



    const getNotes = async () => {
        const responce = await fetch(`http://localhost:5000/api/userdetails/fetchuserdata`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await responce.json()
        console.log(json)
        setEditedData(json)
    }

    console.log(editedData, "GetEditedData")

    const [orderDetails, setOrderDetails] = useState({ firstname: "", lastname: "", email: "", contact: "", username: "", country: "" })

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:5000/api/userdetails/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                firstname: orderDetails.firstname,
                lastname: orderDetails.lastname,
                email: orderDetails.email,
                username: orderDetails.username,
                contact: orderDetails.contact,
                country: orderDetails.country,
            })
        });
        const Json = await res.json()
        console.log(Json, "onEditClick");
    }

    const onChange = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='profile1'>
                <div className="Hnavbar1">
                    <Navbar />
                </div>
                <div className='ProfileContainer'>
                    <div className='profileBackground1'></div>
                    {/* <div className='profileGradient1'></div>
            <div className='profileGradient2'></div> */}
                    <div className='profileDetailC'>
                        <div className='profileTxt1'>Profile</div>
                        <div className='profileDetail'>
                            <div className='profileImageContainer'>
                                <img className='profileImage2' src='/images/DEVESH 1.png'></img>
                                <button className='updateProfile'><img src='/images/update profile image button.svg'></img></button>
                            </div>
                            <div className='profileBlueLine1'></div>
                            <div className='form2'>

                                {/* <form className="row g-3 "> */}

                                <div className='formFlex1'>
                                    <div className='formFlex2'>
                                        <div className='formFlex4'>
                                            <div className="col-md-6">
                                                <label for="firstName" className="form-label mb-2.5, firstName1">First Name</label>
                                                <input
                                                    readOnly
                                                    type="text"
                                                    className="form-control mb-1, inputFirstName1"
                                                    name="firstName"
                                                    // placeholder={editedData.firstname}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="lastName" className="form-label mb-2.5, lastName1">Last Name</label>
                                                <input
                                                    readOnly
                                                    type="text"
                                                    className="form-control mb-1, inputLastName1"
                                                    name="lastName"
                                                    // placeholder={editedData.lasttname}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="email" className="form-label mb-2.5, email2">Email</label>
                                            <input
                                                readOnly
                                                type="text"
                                                className="form-control mb-1, inputEmail1"
                                                name="email"
                                                // placeholder={user.email}
                                                // placeholder={editedData.email}
                                            />
                                        </div>
                                        <div className='formFlex4'>
                                            <div className="col-md-6">
                                                <label for="username" className="form-label mb-2.5, username2">Username</label>
                                                <input
                                                    readOnly
                                                    type="text"
                                                    className="form-control mb-1, inputUsername2"
                                                    name="username"
                                                    // placeholder={user.name}
                                                    // placeholder={editedData.username}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="phoneNumber" className="form-label mb-2.5, phoneNumber1">Phone Number</label>
                                                <input
                                                    readOnly
                                                    type="text"
                                                    className="form-control mb-1, inputPhoneNumber2"
                                                    name="phone"
                                                    // placeholder={editedData.contact}
                                                    
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="country" className="form-label mb-2.5, username2">Country</label>
                                            <input
                                                readOnly
                                                type="text"
                                                className="form-control mb-1, inputCountry2"
                                                name="country"
                                                // placeholder={editedData.country}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* </form> */}


                                <div><button className='editProfileBtn1'>Edit</button></div>
                                <form className="row g-3 editFormDetails" onSubmit={handleSubmit}>
                                    <div className='formFlex1'>
                                        <div className='formFlex2'>
                                            <div className='formFlex4'>
                                                <div className="col-md-6">
                                                    <label for="firstName" className="form-label mb-2.5, firstName1">First Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-1, inputFirstName1"
                                                        name="firstname"
                                                        required
                                                        value={orderDetails.firstname}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="lastName" className="form-label mb-2.5, lastName1">Last Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-1, inputLastName1"
                                                        name="lastname"
                                                        required
                                                        value={orderDetails.lastname}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label for="email" className="form-label mb-2.5, email2">Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control mb-1, inputEmail1"
                                                    name="email"
                                                    // placeholder={user.email}
                                                    required
                                                    value={orderDetails.email}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className='formFlex4'>
                                                <div className="col-md-6">
                                                    <label for="username" className="form-label mb-2.5, username2">Username</label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-1, inputUsername2"
                                                        name="username"
                                                        // placeholder={user.name}
                                                        required
                                                        value={orderDetails.username}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="phoneNumber" className="form-label mb-2.5, phoneNumber1">Phone Number</label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-1, inputPhoneNumber2"
                                                        name="contact"
                                                        required
                                                        value={orderDetails.contact}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label for="country" className="form-label mb-2.5, username2">Country</label>
                                                <input
                                                    type="text"
                                                    className="form-control mb-1, inputCountry2"
                                                    name="country"
                                                    required
                                                    value={orderDetails.country}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div><button className='editProfileBtn1' type="submit">Edit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile

