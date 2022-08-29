import React from 'react'
import './AskToBuy.css';
import Navbar from '../navbar/Navbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

function AskToBuy() {
  return (
    <>
      <div className='askToBuy1'>
        <div>
          <Navbar />
        </div>
        <div>
          <h2 className='preferedModelTxt'>Preffered Model</h2>
        </div>
        <div className='modelSelector1'>
          <FormControl className='modelFlex1'>
            {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
            <RadioGroup
              row
              gap='100px'
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel className='ModelRadioButton1' value="Factory New" control={<Radio />} label="Factory New" />
              <FormControlLabel className='ModelRadioButton1' value="Minimal Wear" control={<Radio />} label="Minimal Wear" />
              <FormControlLabel className='ModelRadioButton1' value="Field Tested" control={<Radio />} label="Field Tested" />
              <FormControlLabel className='ModelRadioButton1' value="Well-Worn" control={<Radio />} label="Well-Worn" />
              <FormControlLabel className='ModelRadioButton1' value="Battle-Scarred" control={<Radio />} label="Battle-Scarred" />
            </RadioGroup>

            {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
              <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}

          </FormControl>

        </div>
        <div><h2 className='terms2'>Terms of Service</h2></div>
        <div>
          <p className='termsDetails1'>
            <ul>
              <li>
                Platform convieance fee may vary at the time of delivery depending on asset.
              </li>
              <li>
                All orders will be processed between 9:00 PM to 10:00 PM everyday. Your order will be processed within 24 hours of placement.
              </li>
              <li>
                Your money is safe with us, don’t worry if due to any reason we fail to execute order. Your money will be refunded on request immediately.
              </li>
            </ul>
          </p>
        </div>
        <div className='check2'>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
            <label class="form-check-label" for="flexCheckDefault1">
              Do you wish to accept other model then preffered if found cheap at the time of buying.
            </label>
          </div>
          <div class="form-check, buySecondCheck">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
            <label class="form-check-label" for="flexCheckDefault2">
              I agree to buy.
            </label>
          </div>
        </div>
        <div className='buyButtonFlex1'>
          <button className='buyButton1' type='submit'>Buy</button>
        </div>
      </div>
    </>
  )
}

export default AskToBuy