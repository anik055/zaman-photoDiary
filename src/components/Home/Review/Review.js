import React from 'react';


const Review = ({review}) => {
    const {name, location, description} = review;
    console.log(review);
    return (
        <div style={{backgroundColor: 'antiquewhite'}} className="p-3 m-2 col-md-5 col-sm-5 text-center">
            <h6 className="text-muted">{description}</h6>
            <h5 className="text-primary">{name}</h5>
            <h6>{location}</h6>
        </div>
    );
};

export default Review;