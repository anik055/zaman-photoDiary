import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect( () => {
        fetch('https://hidden-mesa-38104.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <section className='w-100'>
            <h1 className=" text-center text-brand my-5">OUR PACKAGES & SERVICES</h1>
            <div style={{marginRight:'0px'}} className="row">
                {
                    packages.map(packagee => <Package packagee={packagee}  ></Package>)
                }
            </div>
        </section>
    );
};

export default Packages;