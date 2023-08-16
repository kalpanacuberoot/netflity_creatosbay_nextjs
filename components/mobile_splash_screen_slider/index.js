import Image from "next/image";
import Images from "@/images";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mobile_splash_screen_slider = ({ items }) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (


        <>







            <div className="border">
                <mobile-slider className=" ">
                    <div className="flex flex-col ">
                        <div className="">
                        {/* <Image
                                src={Images.a}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.b}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.c}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.d}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.e}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.f}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            /> */}
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.a}
                                    alt=""
                                    width={150}
                                    // height={20}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.b}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>

                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.c}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.d}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.e}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.f}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.a}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.b}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.c}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.d}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="">
                        {/* <Image
                                src={Images.a}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.b}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.c}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.d}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.e}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            />
                            <Image
                                src={Images.f}
                                alt=""
                                width={150}
                                // height={100}
                                className=""
                            /> */}
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.a}
                                    alt=""
                                    width={150}
                                    // height={20}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.b}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>

                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.c}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.d}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.e}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.f}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.a}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.b}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.c}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-4 rounded shadow-md ">
                                <Image
                                    src={Images.d}
                                    alt=""
                                    width={150}
                                    // height={100}
                                    className=""
                                />
                            </div>
                        </div>

                    </div>

                </mobile-slider>
            </div>
            {/* <div class="marquee-container">
                <Image
                    src={Images.a}
                    alt=""
                />
                <Image
                    src={Images.a}
                    alt=""
                />
                <Image
                    src={Images.a}
                    alt=""
                />
                <Image
                    src={Images.a}
                    alt=""
                />
                <Image
                    src={Images.a}
                    alt=""
                />
                <Image
                    src={Images.a}
                    alt=""
                />
                <Image
                    src={Images.a}
                    alt=""
                />

            </div> */}


        </>
    )

}

export default Mobile_splash_screen_slider