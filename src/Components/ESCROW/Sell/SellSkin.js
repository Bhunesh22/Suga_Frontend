import React from 'react'
import './SellSkin.css';
import Navbar from '../../navbar/Navbar';
import rupeeIcon from './Rupee.svg';
import uploadIcon from './Upload to Cloud.svg';

function SellSkin() {
    return (
        <>
            <div className='sellSkin1'>
                <div>
                    <Navbar />
                </div>
                <div className='sellSkinDetailFlex1'>
                    <div className='SellSkinDetails1'>

                        <div className='sellSkinHeading1'>List Your Item</div>
                        <div className='sellSkinBox1'>
                            <div>
                                <div className='sellingDetailFlex2'>
                                    <div className='uploadFileBox'>
                                        <div class="input-group, inputFile1">
                                            <img src={uploadIcon} />
                                            <input type="file" class="form-control, fileInput1" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"></input>

                                        </div>
                                    </div>

                                    <div className='listingPrice'>
                                        <div className='listingHeading2'>Enter your listing price....</div>
                                        <input typeof='number' className='sellingPriceInput1'></input>
                                        <img src={rupeeIcon} />
                                    </div>
                                </div>
                                <button className='confirmListingBtn1'>Confirm Listing</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>




        </>
    )
}

export default SellSkin