import Images from "@/images";
import Colors from "@/styles/Colors";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {

  // useEffect(() => {
  //   const brand_detail = Cookies.get('brand_detail');
  //   const brandIds = Cookies.get('brand_id');
  
  //   let brandId = null;
  
  //   if (brand_detail) {
  //     try {
  //       brandId = JSON.parse(brand_detail)?.brand?.id;
  //     } catch (error) {
  //       console.error('Error parsing brand_detail:', error);
  //     }
  //   }
  
  //   if (!brandId && brandIds) {
  //     try {
  //       brandId = JSON.parse(brandIds);
  //     } catch (error) {
  //       console.error('Error parsing brand_ids:', error);
  //     }
  //   }
  //   console.log('brandId: navbar', brandId);
  // },[])

  

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
