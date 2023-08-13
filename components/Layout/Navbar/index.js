import Images from "@/images";
import Colors from "@/styles/Colors";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="flex flex-col justify-center pl-10 height-12 "
      style={{ backgroundColor: Colors.white_clr }}
    >
      <Image src={Images.company_logo} alt="" width={60} />
    </div>
  );
};

export default Navbar;
