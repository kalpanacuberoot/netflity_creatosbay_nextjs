import Images from "@/images";
import Colors from "@/styles/Colors";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Navbar = () => {

  const router = useRouter();

  const handleRouting = () => {
    const user_data = Cookies.get('user_data')
    if (user_data) {
      router.push('/home')
    } else {
      router.push('/')
    }
  }

  return (

    <>
      {/* <Link href={'/'}> */}
      <div
        className="flex flex-col justify-center pl-10 height-12 cursor-pointer"
        style={{ backgroundColor: Colors.white_clr }}
        onClick={handleRouting}
      >
        <Image
          src={Images.company_logo}
          alt=""
          width={60}
          height={60}
          className="mobile_nav_logo" />
      </div>
      {/* </Link> */}
    </>
  );
};

export default Navbar;
