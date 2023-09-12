import React, { useState } from 'react';
import axios from 'axios';
import md5 from 'crypto-js/md5';

function PaymentForm() {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const campaign_id = 5;
    // Construct the payment request data
    const paymentData = {
      key: 'rAI8gg',
      txnid: md5(campaign_id).toString(),
      amount: formData.amount,
      productinfo: 'Product Info',
      firstname: formData.name,
      email: formData.email,
      phone: formData.phone,
      surl: 'https://0f22-157-37-143-117.ngrok-free.app/success',
      furl: 'https://0f22-157-37-143-117.ngrok-free.app/failure',
      service_provider: 'https://test.payu.in/_payment',
    };

    // Send a POST request to PayUMoney API
    try {
      const response = await axios.post('https://sandboxsecure.payu.in/_payment', paymentData);
      // Redirect the user to the payment gateway page
      window.location = response.data;
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div>
      <h2>PayUMoney Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentForm;
