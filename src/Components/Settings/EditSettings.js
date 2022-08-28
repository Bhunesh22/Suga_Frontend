import React from 'react'
import './EditSettings.css';
import Navbar from '../navbar/Navbar';
import cancelIcon from "./images/edit profile cross.svg"
import donelIcon from "./images/edit profile right.svg"
import { useNavigate, Link } from 'react-router-dom'

function EditSettings() {
    return (
        <>
            <div className='EditSettings2'>
                <div>
                    <Navbar />
                </div>
                <div className='EditSettingsTxt1'>
                    <h2 className='EditSettingsTxt2'> Settings</h2>
                </div>
                <div className='EditSettingsForm1'>
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
                        <div className='btnFlex1'>
                            <div className="">
                                <button className="btn btn-primary3"><Link to="/settings"><img src={cancelIcon} alt="cancel" /></Link></button>
                            </div>
                            <div className="">
                                <button type="submit" className="btn btn-primary3"><img src={donelIcon} alt="done" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditSettings