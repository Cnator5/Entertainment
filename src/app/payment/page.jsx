'use client';

import { useState } from 'react';
import PaymentForm from './PaymentForm';
import PaymentConfirmation from './PaymentConfirmation';

export default function Payment() {
  const [paymentStatus, setPaymentStatus] = useState('pending');

  const handlePayment = async (paymentDetails) => {
    // Here you would typically make an API call to your backend
    // which would then interact with the payment provider
    console.log('Processing payment:', paymentDetails);
    
    // Simulating an API call
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Secure Payment</h1>
      {paymentStatus === 'pending' ? (
        <PaymentForm onSubmit={handlePayment} />
      ) : (
        <PaymentConfirmation />
      )}
    </div>
  );
}