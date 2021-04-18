import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Review = ({review}) => {
    console.log(review);
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            review.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${review.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${review.img}`} alt=""/>
        }
            <h4>{review.name}</h4>
            {/* <h5>{review.price}</h5> */}


        </div>
    );
};

export default Review;