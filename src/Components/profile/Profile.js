import React, { useEffect, useState, useContext } from 'react'
import './Profile.css'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import { customEvent } from '../utils/analyticsHelper';
import GlobalContext from "../../Context/globalContext";

function Profile() {

    const {user} = useContext(GlobalContext)

    // const [user, setUser] = useState()
    const [editedData, setEditedData] = useState()

    useEffect(() => {
        // loadUserData();
        getUser();
    }, []);

    // const loadUserData = async () => {
    //     const responce = await fetch(`https://sugabackend.azurewebsites.net/api/auth1/getuser`, {
    //         method: 'GET',
    //         headers: {
    //             'auth-token': localStorage.getItem('token')
    //         }
    //     });
    //     const Json = await responce.json()
    //     setUser(Json)
    // }

    // console.log(user, "intial");

    const getUser = async () => {
        const responce = await fetch(`https://sugabackend.azurewebsites.net/api/userdetails/fetchuserdata`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await responce.json()
        // console.log(json)
        setEditedData(json)
    }

    function arrayIsEmpty() {
        if (!Array.isArray(editedData)) {
            return true;
        }
        if (editedData.length == 0) {
            return true;
        }
        return false;
    }

    // console.log(arrayIsEmpty())

    console.log(editedData, "edited data")


    return (
        <>
            <div className='profile1'>
                <div className="Hnavbar1">
                    <Navbar />
                </div>
                <div className='ProfileContainer'>
                    {/* <div className='profileBackground1'></div> */}
                    {/* <div className='profileGradient1'></div>
            <div className='profileGradient2'></div> */}

                    <div className='profileDetailC'>
                        <div className='profileTxt1'><h2 className='profileTxt2'>Profile</h2>Profile</div>
                        <div className='profileDetail'>
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
                                                    placeholder={arrayIsEmpty() ? "" : editedData[editedData.length - 1].firstname}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="lastName" className="form-label mb-2.5, lastName1">Last Name</label>
                                                <input
                                                    readOnly
                                                    type="text"
                                                    className="form-control mb-1, inputLastName1"
                                                    name="lastName"
                                                    placeholder={arrayIsEmpty() ? "" : editedData[editedData.length - 1].lastname}

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
                                                placeholder={user === undefined ? "" : user.email}
                                            // placeholder={arrayIsEmpty() ? user.email : editedData[editedData.length - 1].email}
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
                                                    placeholder={user === undefined ? "" : user.name}
                                                // placeholder={arrayIsEmpty() ? user.name : editedData[editedData.length - 1].username}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="phoneNumber" className="form-label mb-2.5, phoneNumber1">Phone Number</label>
                                                <input
                                                    readOnly
                                                    type="text"
                                                    className="form-control mb-1, inputPhoneNumber2"
                                                    name="phone"
                                                    placeholder={arrayIsEmpty() ? "" : editedData[editedData.length - 1].contact}

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
                                                placeholder={arrayIsEmpty() ? "" : editedData[editedData.length - 1].country}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* </form> */}


                                <div><Link to="/editprofile"><button onClick={() => customEvent("Edit Profile",`${localStorage.getItem("token")}`,"value")} className='editProfileBtn1'>Edit</button></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile

