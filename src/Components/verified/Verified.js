import React, {useState, useEffect} from 'react'
import "./verified.css"
// import axios from 'axios';
import { useParams, Link} from 'react-router-dom';
import { Fragment } from 'react';


const Verified = () => {

    // const [validUrl, setValidUrl] = useState(true);
	// const param = useParams();

	// useEffect(() => {
	// 	const verifyEmailUrl = async () => {
	// 		try {
	// 			const url = `http://localhost:5000/api/users/${param.id}/verify/${param.token}`;
	// 			const { data } = await axios.get(url);
	// 			console.log(data);
	// 			setValidUrl(true);
	// 		} catch (error) {
	// 			console.log(error);
	// 			setValidUrl(false);
	// 		}
	// 	};
	// 	verifyEmailUrl();
	// }, [param]);


  return (
    <Fragment>
			{/* {validUrl ? ( */}
				<div>
					{/* <img src={success} alt="success_img" className={styles.success_img} /> */}
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button >Login</button>
					</Link>
				</div>
			{/* ) : (
				<h1>404 Not Found</h1>
			)} */}
		</Fragment>
  )
}

export default Verified