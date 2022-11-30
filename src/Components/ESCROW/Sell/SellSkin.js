import React, { useState } from 'react'
import './SellSkin.css';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import rupeeIcon from './Rupee.svg';
import { message } from 'antd';
import 'antd/dist/antd.css';
import CircularProgress from "@mui/material/CircularProgress";
// import uploadIcon from './UploadIcon.svg';


function SellSkin() {


    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState()
    const [status, setStatus] = useState('')
    const [error, setError] = useState("");
    const [data, setData] = useState({price: ""});

    
    const formData = new FormData();
    formData.append("image",img);
    formData.append("price",data.price);

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        setLoading(true)
        try {
            const url = "https://suga-server.herokuapp.com/api/sell";
          
            // axios({
            //     method: 'post',
            //     url: url,
            //     headers: {'auth-token': localStorage.getItem('token')}, 
            //     data: {
            //       image: (formData),
            //     //   price: data.price,
            //     }
            //   });
            await axios.post(url, formData, {headers: {'auth-token': localStorage.getItem('token')}} );
            // window.location = "/";
            setLoading(false)
            message.success("Listing Uploaded Successfully");
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                setLoading(false)
                message.error("Please Login to sell");
               
            }
        }
    };

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

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

                            <form onSubmit={handleSubmit}>

                                <div className='sellingDetailFlex2'>
                                    <div className='uploadFileBox'>
                                        <div class="input-group, inputFile1">

                                            <input
                                                type="file"
                                                class="form-control, fileInput1"
                                                id="inputGroupFile04"
                                                name="image"
                                                aria-describedby="inputGroupFileAddon04"
                                                onChange={handleFileChange}
                                                aria-label="Upload">
                                            </input>

                                            {/* <div className='skinInputflex1'>
                                                <div className='skinInputflex2'>
                                                    <label className='skinName2'>Skin Name:</label>
                                                    <input type='text' className='skinNameInput2'></input>
                                                </div>
                                                <div className='skinInputflex2'>
                                                    <label className='skinName2'>Exterior:</label>
                                                    <input type='text' className='skinNameInput2'></input>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>

                                    <div className='listingPrice'>
                                        {/* <div className='listingHeading2'>Enter your listing price....</div> */}
                                        <input
                                            type='number'
                                            className='sellingPriceInput1'
                                            placeholder='Enter your listing price....'
                                            name='price'
                                            // value="price"
                                            onChange={handleChange}
                                        >
                                        </input>
                                        <img src={rupeeIcon} />
                                    </div>
                                    <button type="submit" className='confirmListingBtn1'>
                                        {loading ? (
                                            <CircularProgress color="inherit" size={20} />
                                        ) : (
                                            "Confirm Listing"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SellSkin;