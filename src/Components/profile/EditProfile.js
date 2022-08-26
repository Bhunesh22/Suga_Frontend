import React from 'react'
import './EditProfile.css'
import Navbar from '../navbar/Navbar'
import cancelIcon from "./images/edit profile cross.svg"
import donelIcon from "./images/edit profile right.svg"

function EditProfile() {
    return (
        <>
            <div className='editProfile2'>
                <div className='editProfileNavbar'>
                    <Navbar />
                </div>
                <div className='profileTxt3'>Profile</div>
                <div className='editProfileForm1'>
                    <form class="row g-3 container">
                        <div class="col-md-6">
                            <label for="inputFirstName2" class="form-label, editProfileLable1">First Name</label>
                            <input type="text" name='firstName' class="form-control" id="inputFirstName2" placeholder='input first name' />
                        </div>
                        <div class="col-md-6">
                            <label for="inputLastName2" class="form-label, editProfileLable1">Last Name</label>
                            <input type="text" name='lastName' class="form-control" id="inputLastName2" placeholder='input last name' />
                        </div>
                        <div class="col-md-6">
                            <label for="email2" class="form-label, editProfileLable1">Email</label>
                            <input type="email" class="form-control" id="email2" placeholder='input email' />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPhoneNumber2" class="form-label, editProfileLable1">Phone Number</label>
                            <input type="number" class="form-control" id="inputPhoneNumber2" placeholder='input phone number' />
                        </div>
                        <div class="col-md-6">
                            <label for="inputUserName2" class="form-label, editProfileLable1">Username</label>
                            <input type="text" name='userName' class="form-control" id="inputUserName2" placeholder='input username' />
                        </div>
                        <div class="col-md-6">
                            <label for="email2" class="form-label, editProfileLable1">Country</label>
                            <input type="text" class="form-control" id="country2" placeholder='input country name' />
                        </div>
                    
                        <div className='btnFlex1'>
                            <div class="">
                                <button class="btn btn-primary"><img src={cancelIcon} alt="cancel" /></button>
                            </div>
                            <div class="">
                                <button type="submit" class="btn btn-primary"><img src={donelIcon} alt="done" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditProfile