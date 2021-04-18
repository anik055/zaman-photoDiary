import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import BookingCard from '../../Appointment/BookingCard/BookingCard';
import Package from '../Package/Package';
const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <section>
            {/* <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2> */}
            <div className="row">
                {
                    packages.map(booking => <BookingCard booking={booking}  key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default Packages;