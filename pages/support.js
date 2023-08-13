import React from "react";
import Supportpage from "@/components/userAuth/Supportpage";
import Layout from "@/components/Layout";
import Splash_screen_slider from "@/components/splash_screen_slider";

const Support = () => {
  return (
    <>
     
      <div className='flex flex-row h-screen items-center'>
        <div className='auto-cols-max w-full h-auto'>
          <Layout>
          <Supportpage />
          </Layout>
        </div>
        <div className='auto-cols-max h-screen whalf-r'>
          <Splash_screen_slider />
        </div>
      </div>
    </>
  );
};

export default Support;
