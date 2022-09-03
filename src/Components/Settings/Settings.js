
import React from 'react'
import './Settings.css'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

function Settings() {
    return (
        <>
            <div className='settings2'>
                <div>
                    <Navbar />
                </div>
                <div className='settingsTxt1'>
                    <h2 className='settingsTxt2'> Settings</h2>
                </div>
                <div className='settingsForm1'>
                    <form class="row g-3 container">
                        <div class="col-md-6">
                            <label for="inputPassword4s" class="form-label">Change Password</label>
                            <input type="password" class="form-control" id="inputPassword4s" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputConfirmPassword4s" class="form-label">Confirm Password*</label>
                            <input type="password" class="form-control" id="inputConfirmPassword4s" />
                        </div>
                        <div class="col-md-12">
                            <label for="inputEmail4s" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4s" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputCountry1s" class="form-label">Country</label>
                            <input type="text" class="form-control" id="inputCountry1s" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPhoneNumber1s" class="form-label">Phone Number</label>
                            <input type="number" class="form-control" id="inputPhoneNumber1s" />
                        </div>
                        <div class="col-12">
                            <div><Link to="/editsettings"><button class="btn btn-primary">Edit</button></Link></div>
                        </div>
                    </form>
                </div>
                <div >

                </div>
            </div>
        </>
    )
}

export default Settings