import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ProcessPayment from '../ProcessPayment/ProcessPayment';
import {Link} from 'react-router-dom';


const Checkout = () => {
  const [shippingData, setShippingData] = useState(null);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setShippingData(data);
    console.log(data);


  };

  const handlePaymentSuccess = paymentId =>  {
    // const savedCart = getDatabaseCart();
    const orderDetails = {
      // ...loggedInUser,
       product: product,
       Shipment: shippingData,
       paymentId,
       orderTime: new Date()};

    fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
            if(data){
              // processOrder();

              alert('order placed successfully')
            }
        })
  }


    const [product, setProduct] = useState([]);
  //   const addToOrder = () => {
  //       const orderData = {
  //           name: product.name,
  //           price: product.price,
  //           product: product,
  //           // email: loggedInUser.email,
  //           orderTime: new Date()
  //       }
  //       const url = `http://localhost:5000/addToOrder`;

    
  //   fetch(url, {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(orderData)
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data) )
  //   alert('order placed successfully');
  // };

    useEffect(() => {
        fetch('http://localhost:5000/newOrder')
        .then(res => res.json())
        .then(data => {
            setProduct(data[0])})
    }, [])
    return (
        <div><form style={{display: shippingData ? 'none': 'block'}} className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
            {errors.name && <span className="text-danger">This field is required</span>}

        </div>
        <div className="form-group">
            <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
            {errors.phone && <span className="text-danger">This field is required</span>}
        </div>
        
        <div className="form-group">
            <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
            {errors.email && <span className="text-danger">This field is required</span>}
        </div>
        <div className="form-group">
            <input type="date" ref={register({ required: true })} name="date" placeholder="date" className="form-control" />
            {errors.date && <span className="text-danger">This field is required</span>}
        </div>
        <div className="form-group row">
            <div className="col-4">

                <select className="form-control" name="gender" ref={register({ required: true })} >
                    <option disabled={true} value="Not set">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Not set">Other</option>
                </select>
                {errors.gender && <span className="text-danger">This field is required</span>}

            </div>
            {/* <div className="col-4">
                <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                {errors.age && <span className="text-danger">This field is required</span>}
            </div>
            <div className="col-4">
                <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                {errors.weight && <span className="text-danger">This field is required</span>}
            </div> */}
        </div>
{/* 
        <div className="form-group text-right">
          
            <ProcessPayment></ProcessPayment>
            <button type="submit" className="btn btn-brand">Send</button>
        </div> */}
        <input type="submit" />
    </form>
    <div style={{display: shippingData ? 'block': 'none'}} className="col-md-6">
        <h1>pay for me</h1>
        <ProcessPayment handlePayment ={handlePaymentSuccess}></ProcessPayment>
      </div>
            {/* <button className="btn btn-primary"onClick={addToOrder}>Check Out</button> */}
        </div>
    );
};

export default Checkout;