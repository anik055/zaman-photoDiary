import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Review = ({review}) => {
    console.log(review);
    return (
        <div style={{backgroundColor: 'antiquewhite'}} className="p-3 m-2 col-md-5 col-sm-5 text-center">
            <h6 className="text-muted">{review.description}</h6>

        {/* {
            review.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${review.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://hidden-mesa-38104.herokuapp.com/${review.img}`} alt=""/>
        } */}
            <h5 className="text-primary">{review.name}</h5>
            <h6>{review.location}</h6>
            {/* <h5>{review.price}</h5> */}


        </div>
    );
};

export default Review;