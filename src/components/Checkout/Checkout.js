import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import { UserContext } from "../../App";

const Checkout = () => {
  const [product, setProduct] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setShippingData(data);
    console.log(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    console.log(product);
    const orderDetails = {
      product: product,
      Shipment: shippingData,
      email: loggedInUser.email,
      paymentId,
      status: "pending",
      orderTime: new Date(),
    };

    fetch("https://hidden-mesa-38104.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert("order placed successfully");
        }
      });
  };

  useEffect(() => {
    fetch("https://hidden-mesa-38104.herokuapp.com/newOrder")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setProduct(data[0]);
      });
  }, []);

  return (
    <div style={{ margin: "10px auto", padding: "10px" }}>
        <h1>Your Shipping details</h1>
      <form
        style={{ display: shippingData ? "none" : "block",margin: "10px auto" }}
        className="p-5 w-50 card"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
            <label htmlFor="">Your name</label>
          <input
            type="text"
            ref={register({ required: true })}
            name="name"
            placeholder="Your Name"
            className="form-control"
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group">
        <label htmlFor="">Your phone number</label>
          <input
            type="text"
            ref={register({ required: true })}
            name="phone"
            placeholder="Phone Number"
            className="form-control"
          />
          {errors.phone && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="form-group">
        <label htmlFor="">Your email</label>
          <input
            type="text"
            ref={register({ required: true })}
            name="email"
            placeholder="Email"
            className="form-control"
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="date"
            ref={register({ required: true })}
            name="date"
            placeholder="date"
            className="form-control"
          />
          {errors.date && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        
        <input className='btn btn-primary' type="submit" />
      </form>
      <div
        style={{ display: shippingData ? "block" : "none",margin: "10px auto" }}
        className="col-md-6 card"
      >
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
      </div>

    </div>
  );
};

export default Checkout;
