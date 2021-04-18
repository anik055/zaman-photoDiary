import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import {Link} from 'react-router-dom'

const BookingCard = ({booking, date}) => {
  const {name,price, description} = booking;
  // console.log(booking);
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  const onSubmit = () => {
    const eventData = {
      name: name,
      price: price,
      description: description
    };

    fetch(`http://localhost:5000/deleteOldOrder`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          // if(data){
          //     event.target.parentNode.parentNode.style.display = 'none';
          // }
    })
    const url = `http://localhost:5000/addNewOrder`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => res.json())
    .then(data => console.log(data) )

  };

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                  <h1>{booking.name}</h1>
                  <h1>{booking.price}</h1>
                  <h1>{booking.description}</h1>
                  {
            booking.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${booking.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${booking.img}`} alt=""/>
        }
                    {/* <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p> */}
                    <Link to = "/checkOut"> <button onClick={ onSubmit} className="btn btn-brand text-uppercase">Buy Now</button></Link>
                    <Link><button  onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button></Link>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.name} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;