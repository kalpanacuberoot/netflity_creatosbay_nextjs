import React from "react";
import Layout from "@/components/Layout";
import Splash_screen_slider from "@/components/splash_screen_slider";
import Loginpage from "@/components/userAuth/Loginpage";
import { useRouter } from "next/router";

const Login = () => {

  // const router = useRouter();

  // if (typeof window !== 'undefined') {
  //   const router = useRouter();

  //   if (typeof user_data === 'undefined') {
  //     router.push('/login')
  //   }
  //   // Use the router here
  // };




  return (
    <>
      <div className="container flex flex-row h-screen bg-zinc-100 ">
        <div className="auto-cols-max w-2/3 h-screen ">
          <Layout>
            <Loginpage />
          </Layout>
        </div>
        <div className="auto-cols-max h-screen">
          <Splash_screen_slider />
        </div>
      </div>
    </>
  );
};



export default Login;
