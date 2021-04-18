import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm'
import SplitCardForm from './SplitCardForm'
const stripePromise = loadStripe('pk_test_51IeK9aFrwVR8eCAgcB2uQf4VPJikBaM7Fkyy8OW42q5VVA0dlJGQ3e30rIkviu7oLekiwkBHemtXE26VPiJAfOp000bUXSwemu');


const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
        </div>
    );
};

export default ProcessPayment;