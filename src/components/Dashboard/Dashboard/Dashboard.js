import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Orders from '../Orders/Orders';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Dashboard = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [userOrders, setUserOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://hidden-mesa-38104.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data)});
    }, [])
    
    useEffect(() => {
        console.log(loggedInUser.email);
        fetch('https://hidden-mesa-38104.herokuapp.com/ordersByUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserOrders(data)})
    }, [])

    useEffect(() => {
        fetch('https://hidden-mesa-38104.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Orders</h5>
                {isAdmin ? <Orders orders={allOrders} /> : <Orders orders = {userOrders} /> }
            </div>
        </div>
    );
};

export default Dashboard;