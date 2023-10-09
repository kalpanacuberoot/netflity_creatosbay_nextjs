import React from "react";
import Layout from "@/components/Layout";
import Splash_screen_slider from "@/components/splash_screen_slider";
import Loginpage from "@/components/userAuth/Loginpage";
import Signuppage from "@/components/userAuth/SignUppage";
import { useRouter } from "next/router";

const Signup = () => {

  return (
    <>
      {/* <div className="container flex flex-row h-screen bg-zinc-100 ">
        <div className="auto-cols-max w-2/3 h-screen ">
          <Layout>
            <Signuppage />
          </Layout>
        </div>
        <div className="auto-cols-max h-screen">
          <Splash_screen_slider />
        </div>
      </div> */}
      <div className=" flex flex-row h-screen bg-zinc-100 ">
        <div className="auto-cols-max children_layout h-screen ">
          <Layout>
            <Signuppage />
          </Layout>
        </div>
        <div className="auto-cols-max h-screen splash_slider w-3/8">
          <Splash_screen_slider />
        </div>
      </div>
      {/* <div className="container flex flex-row h-screen bg-zinc-100 ">
        <div className="auto-cols-max h-screen border children_layout">
          <Layout>
            <Loginpage />
          </Layout>
        </div>
        <div className="auto-cols-max h-screen splash_slider w-3/8">
          <Splash_screen_slider />
        </div>
      </div> */}
    </>
  );
};

export default Signup;
