import React from "react";
import Layout from "@/components/Layout";
import Splash_screen_slider from "@/components/splash_screen_slider";
import User_BrandNamepage from "@/components/userAuth/User_BrandNamepage";


const User_Brandname = () => {
  return (
    <>
      <div className=" flex flex-row h-screen bg-zinc-100 ">
        <div className="auto-cols-max w-2/3 h-screen ">
          <Layout>
            <User_BrandNamepage />
          </Layout>
        </div>
        <div className="auto-cols-max h-screen">
          <Splash_screen_slider />
        </div>
      </div>
    </>
  );
};

export default User_Brandname;