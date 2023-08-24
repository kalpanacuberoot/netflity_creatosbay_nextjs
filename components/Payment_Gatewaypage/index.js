import React, { useState } from 'react';
import Colors from '@/styles/Colors';
import Left_Dashboard from '../Homepage/leftDashboard';
import Link from 'next/link';

const Payment_Gatewaypage = () => {
    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

    const handlePayment = () => {
        setIsPaymentProcessing(true);

        setTimeout(() => {
            window.location.href = '/payment_success';
        }, 1500);
    };

    return (
        <div className="flex" style={{ backgroundColor: Colors.button_light_clr }}>
            <div
                className="auto-cols-max w-96 px-3 py-5 border"
                style={{ backgroundColor: Colors.white_clr }}
            >
                <Left_Dashboard />
            </div>
            <div
                className="w-full flex justify-around align-middle items-center flex-col border"
                style={{ backgroundColor: Colors.white_clr }}
            >
                <div className='border h-96 p-10 flex flex-col justify-between rounded shadow-lg'>
                    <h1 className="text-center font-bold " style={{ color: Colors.logo_clr }}>
                        Payment Gateway
                    </h1>
                    <button
                        onClick={handlePayment}
                        className="rounded-md px-20 py-4"
                        style={{
                            backgroundColor: Colors.logo_clr,
                            color: Colors.white_clr,
                            cursor: isPaymentProcessing ? 'not-allowed' : 'pointer',
                        }}
                        disabled={isPaymentProcessing}
                    >
                        {isPaymentProcessing ? 'Processing...' : 'Pay'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment_Gatewaypage;