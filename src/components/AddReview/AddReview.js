import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddReview = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        console.log(newInfo);
        setInfo(newInfo);
    }

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info.description);
        // formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('location', info.location);
        console.log(formData);

        fetch('https://hidden-mesa-38104.herokuapp.com/addReview', {
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
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Review</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Your Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Your Review</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Enter Your Review In Details" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Event Location</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="location" placeholder="Your Event Location" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload Your best Moment</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Upload Your Best Moment" />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;