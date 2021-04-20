import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        console.log(newInfo);
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('email', info.email);
        console.log(info);
        
        fetch('https://hidden-mesa-38104.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <form onSubmit={handleSubmit}>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <label htmlFor="exampleInputEmail1">Add Admin</label>
            <input onBlur={handleBlur}  type="text" className="form-control" name="email" placeholder="Enter email" />
            <button type="submit" className="btn btn-primary my-3">Submit</button>
        </div>
        </form>
        </section>
    );
};

export default AddAdmin;