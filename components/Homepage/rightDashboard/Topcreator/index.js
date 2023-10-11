import Image from "next/image";
import Images from '@/images';
import Colors from "@/styles/Colors";
import { useEffect, useState } from "react";

const Top_creator = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768);
        // setIsMobile(window.innerWidth <= 800);
    };

    return (
        <div style={{ backgroundColor: Colors.white_clr }} className={`${isMobile ? 'px-5 py-5' : 'px-3 py-3'} rounded-md`} >
            <h3 className='font-bold'>Top Creators</h3>
            <div className='craetor_height'>
                <div className={` overflow-y-auto ${isMobile ? ' md:flex flex-row flex-wrap' : 'child_creator'}`}>
                    <div className={`px-2 border rounded-md p-3 my-2 ${isMobile ? 'px-5 w-full' : ' '}`}>
                        <div className='flex flex-row justify-between items-center mb-2'>
                            <h6 className='font-bold capitalize'>Amrish patel</h6>
                            <div className=''>
                                <div className='flex flex-row justify-evenly items-center w-24'>
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.empty_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <h6>4.5</h6>
                                </div>

                            </div>


                        </div>
                        <div className='flex flex-row items-center'>

                            <Image
                                src={Images.profile_user}
                                width={40}
                                // height={30}
                                alt=""
                            />
                            <div className='flex flex-row flex-wrap'>

                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#unplugged</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#unplugged</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#go</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#livemusic</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={`px-2 border rounded-md p-3 my-2 ${isMobile ? 'px-5 w-full' : ' '}`}>
                        <div className='flex flex-row justify-between items-center mb-2'>
                            <h6 className='font-bold capitalize'>Amrish patel</h6>
                            <div className=''>
                                <div className='flex flex-row justify-evenly items-center w-24'>
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.empty_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <h6>4.5</h6>
                                </div>

                            </div>


                        </div>
                        <div className='flex flex-row items-center'>

                            <Image
                                src={Images.profile_user}
                                width={40}
                                // height={30}
                                alt=""
                            />
                            <div className='flex flex-row flex-wrap'>

                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#unplugged</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#unplugged</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#go</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#livemusic</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={`px-2 border rounded-md p-3 my-2 ${isMobile ? 'px-5 w-full' : ' '}`}>
                        <div className='flex flex-row justify-between items-center mb-2'>
                            <h6 className='font-bold capitalize'>Amrish patel</h6>
                            <div className=''>
                                <div className='flex flex-row justify-evenly items-center w-24'>
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.empty_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <h6>4.5</h6>
                                </div>

                            </div>


                        </div>
                        <div className='flex flex-row items-center'>

                            <Image
                                src={Images.profile_user}
                                width={40}
                                // height={30}
                                alt=""
                            />
                            <div className='flex flex-row flex-wrap'>

                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#unplugged</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#unplugged</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#go</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#livemusic</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={`px-2 border rounded-md p-3 my-2 ${isMobile ? 'px-5 w-full' : ' '}`}>
                        <div className='flex flex-row justify-between items-center mb-2'>
                            <h6 className='font-bold capitalize'>Amrish patel</h6>
                            <div className=''>
                                <div className='flex flex-row justify-evenly items-center w-24'>
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.empty_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <h6>4.5</h6>
                                </div>

                            </div>


                        </div>
                        <div className='flex flex-row items-center'>

                            <Image
                                src={Images.profile_user}
                                width={40}
                                // height={30}
                                alt=""
                            />
                            <div className='flex flex-row flex-wrap'>

                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#unplugged</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#unplugged</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#go</p>
                                </div>
                                <div>
                                    <p className={`${isMobile ? 'text-sm px-5 py-1 mx-2' : 'px-3 mx-1'} capitalize creator_top  rounded-full my-1 `}>#livemusic</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='w-full text-center'>
                    <button className='start_campaign_btn px-5 py-1 w-48 rounded-full bg-white my-3'>
                        View All
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Top_creator