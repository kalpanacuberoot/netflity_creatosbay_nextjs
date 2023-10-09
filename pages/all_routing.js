
// components/Layout.js
import React from 'react';
import Left_Dashboard from '@/components/Homepage/leftDashboard';

const All_routing = ({ children }) => {

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between">

        <Left_Dashboard/>
          <div className="content w-full">{children}</div>
       
      </div>
    </>

  );
}

export default All_routing;
