import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [product, setProduct] = useState([]);
  const {price, name} = product;

  const [paymentError,setPaymentError] = useState('');
  const [paymentSuccess,setPaymentSuccess] = useState('');

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null);
      console.log(error)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id)
    }
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
    <div>
        <form style={{margin:'10px auto', padding:'10px'}} className='w-50' onSubmit={handleSubmit}>
          <CardElement />
          <br/>
          <h6 className='text-warning'>NB: You are going to pay ${price} for buying {name} package</h6>
          <button className="btn btn-primary my-4" type="submit" disabled={!stripe}>Pay Now</button>
          {
            paymentError && <p>{paymentError}</p>
        }
        {
            paymentSuccess && <p>your payment was successful</p>
        }
        </form>
        
    </div>

  );
};

export default SimpleCardForm;