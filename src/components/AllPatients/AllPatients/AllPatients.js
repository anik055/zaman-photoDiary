import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [allAppointments, setAllAppointments] = useState([]);
    const [userAppointments, setUserAppointments] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log(loggedInUser);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
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
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllAppointments(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/ordersByUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setUserAppointments(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                {isAdmin ? <AppointmentDataTable appointments={allAppointments} /> : <AppointmentDataTable appointments = {userAppointments} /> }
            </div>
        </div>
    );
};

export default AllPatients;