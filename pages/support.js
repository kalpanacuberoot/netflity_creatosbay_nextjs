import React from "react";
import Supportpage from "@/components/userAuth/Supportpage";
import Layout from "@/components/Layout";
import Splash_screen_slider from "@/components/splash_screen_slider";

const Support = () => {
  return (
    <>
      {/* <div className="container flex flex-row h-screen bg-zinc-100 ">
        <div className="auto-cols-max w-2/3 h-screen ">
          <Layout>
            <Supportpage />
          </Layout>
        </div>
        <div className="auto-cols-max h-screen">
          <Splash_screen_slider />
        </div>
      </div> */}
      <div className=" flex flex-row h-screen bg-zinc-100 ">
        <div className="auto-cols-max w-2/3 h-screen children_layout">
          <Layout>
            <Supportpage />
          </Layout>
        </div>
        <div className="auto-cols-max h-screen splash_slider w-3/8">
          <Splash_screen_slider />
        </div>
      </div>
    </>
  );
};

export default Support;
