import Images from "@/images";
import Colors from "@/styles/Colors";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {

  return (

    <>
    {/* <Link href={'/'}> */}
      <div
        className="flex flex-col justify-center pl-10 height-12 "
        style={{ backgroundColor: Colors.white_clr }}
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
