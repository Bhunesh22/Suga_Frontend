import React from 'react'
import './EditProfile.css'
import Navbar from '../navbar/Navbar'

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
                            <input type="text" name='firstName'  class="form-control" id="inputFirstName2" placeholder='input first name' />
                        </div>
                        <div class="col-md-6">
                            <label for="inputLastName2" class="form-label, editProfileLable1">Last Name</label>
                            <input type="text" name='lastName'  class="form-control" id="inputLastName2" placeholder='input last name'  />
                        </div>
                        <div class="col-12">
                            <label for="email2" class="form-label, editProfileLable1">Email</label>
                            <input type="email"  class="form-control" id="email2" placeholder='input email' />
                        </div>
                        <div class="col-6">
                            <label for="inputUserName2"  class="form-label, editProfileLable1">Username</label>
                            <input type="text" name='userName'  class="form-control" id="inputUserName2" placeholder='input username'  />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPhoneNumber2" class="form-label, editProfileLable1">Phone Number</label>
                            <input type="number" class="form-control" id="inputPhoneNumber2" placeholder='input phone number' />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        
                       
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditProfile