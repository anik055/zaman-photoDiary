import React, { useEffect, useState } from 'react';

import ManageService from '../ManageService/ManageService';


const ManageServices = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="ro">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            </table>
            <hr/>
            <table>

            {
                products.map(product =><ManageService product={product}></ManageService>)
            }
            </table>
        </div>
    );
};

export default ManageServices;