import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://hidden-mesa-38104.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReviews(data)})
    }, [])

    return (
        <section>
            <div className="container">
                <h1 className="text-center  text-primary my-5">CLIENT'S REVIEWS</h1>
                <div  className="row d-flex justify-content-center">
                    {
                     reviews.map(review =><Review key={review._id} review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;