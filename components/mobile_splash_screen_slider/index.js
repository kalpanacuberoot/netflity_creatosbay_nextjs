import Image from "next/image";
import images from "@/images";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mobile_splash_screen_slider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Transition speed in milliseconds
        autoplay: true,
        autoplaySpeed: 3000, // Time between slides in milliseconds
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (


        <>
            {/* <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                interval={3000}
                className="border w-screen"
            >

                <div className=" max-h-25 flex flex-row">
                    <Image
                        src={images.a}
                        alt=""
                        width={400}
                        height={100}
                    />
                    <Image
                        src={images.b}
                        alt=""
                        width={400}
                        height={100}
                    />
                    <Image
                        src={images.c}
                        alt=""
                        width={400}
                        height={100}
                    />
                    <Image
                        src={images.d}
                        alt=""
                        width={400}
                        height={100}
                    />
                    <Image
                        src={images.e}
                        alt=""
                        width={400}
                        height={100}
                    />
                    <Image
                        src={images.f}
                        alt=""
                        width={400}
                        height={100}
                    />
                    <Image
                        src={images.a}
                        alt=""
                        width={400}
                        height={100}
                    />
                    <Image
                        src={images.b}
                        alt=""
                        width={400}
                        height={100}
                    />
                </div>

                


            </Carousel> */}

            {/* <Slider {...settings}>
                <div>
                    <Image
                        src={images.a}
                        alt=""
                        width={400}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src={images.b}
                        alt=""
                        width={400}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src={images.c}
                        alt=""
                        width={400}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src={images.d}
                        alt=""
                        width={400}
                        height={100}
                    />
                </div>
               
            </Slider> */}
            {/* <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="w-full">
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider> */}

        </>
    )

}

export default Mobile_splash_screen_slider