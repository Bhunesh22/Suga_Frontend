import React from 'react'
import './Profile.css'
import Navbar from '../navbar/Navbar'

function Profile() {
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
                            <form className="row g-3">
                                <div className='formFlex1'>
                                    <div className='formFlex2'>
                                        <div className='formFlex4'>
                                            <div className="col-md-6">
                                                <label for="firstName" className="form-label mb-2.5, firstName1">First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control mb-1, inputFirstName1"
                                                    name="firstName"

                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="lastName" className="form-label mb-2.5, lastName1">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control mb-1, inputLastName1"
                                                    name="lastName"

                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="email" className="form-label mb-2.5, email2">Email</label>
                                            <input
                                                type="text"
                                                className="form-control mb-1, inputEmail1"
                                                name="email"

                                            />
                                        </div>
                                        <div className='formFlex4'>
                                            <div className="col-md-6">
                                                <label for="username" className="form-label mb-2.5, username2">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control mb-1, inputUsername2"
                                                    name="username"

                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="phoneNumber" className="form-label mb-2.5, phoneNumber1">Phone Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control mb-1, inputPhoneNumber2"
                                                    name="phone"

                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="country" className="form-label mb-2.5, username2">Country</label>
                                            <input
                                                type="text"
                                                className="form-control mb-1, inputCountry2"
                                                name="country"

                                            />
                                        </div>

                                    </div>

                                </div>

                                <div><button className='editProfileBtn1'>Edit</button></div>
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