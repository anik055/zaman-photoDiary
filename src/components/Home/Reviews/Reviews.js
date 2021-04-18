import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">CLIENT'S REVIEWS</h5>
                <div className="row">
                    {
                     reviews.map(review =><Review key={review._id} review={review} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Reviews;