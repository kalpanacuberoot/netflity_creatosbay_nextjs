import Images from "@/images"
import Image from "next/image"
import Link from "next/link"

const CollapseLeftDashboard = () => {
    return (
        <>

            <div className="">
                <div className=''>
                    <Image
                        src={Images.leftdashboard_icon}
                        width={100} height={100}
                        alt=""
                        className=' mx-auto'
                    />
                </div>

                <div className='relative my-5'>
                    <Image
                        src={Images.profile_user}
                        width={56}
                        height={56}
                        alt=""
                        className="mx-auto"
                    />
                    <div className="absolute inset-y-0 top-8 fixed left-10 flex items-center pl-3 pointer-events-none">
                    <Image
                            src={Images.notification_left_collapse_icon}
                            width={24}
                            height={24}
                            className='my-2 mx-1'
                            alt=""
                        />
                       </div>
                    {/* <div className="absolute  top-7 right-14">

                        <Image
                            src={Images.notification_left_collapse_icon}
                            width={24}
                            height={24}
                            className='my-2 mx-1'
                            alt=""
                        />
                        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div> */}
                </div>

                <div className='mt-5'>
                    <Link href={'/home'}>

                        <div className='my-2  py-1'

                        >

                            <Image
                                src={Images.home_icon}
                                width={56}
                                className='mx-auto p-3  left_collapse rounded-md'
                                alt=""
                            />

                        </div>
                    </Link>
                    <Link href={'/live_campaign'}>
                        <div className='my-2 py-1'

                        >
                            <Image
                                src={Images.campaign_icon}
                                width={56}
                                className='mx-auto p-3  left_collapse rounded-md'
                                alt=""
                            />

                        </div>
                    </Link>
                    <Link href={'/marketplace'}>
                    <div className='my-2 py-1'

                    >
                        <Image
                            src={Images.market_place_icon}
                            width={56}
                            className='mx-auto p-3  left_collapse rounded-md'
                            alt=""
                        />

                    </div>
                    </Link>
                    <Link href={'/communication'}>
                        <div className='my-2 py-1'

                        >
                            <Image
                                src={Images.chats_icon}
                                width={56}
                                className='mx-auto p-3  left_collapse rounded-md'
                                alt=""
                            />

                        </div>
                    </Link>
                    <Link href={'/invoice'}>
                        <div className='my-2 py-1'

                        >
                            <Image
                                src={Images.invoices_icon}
                                width={56}
                                className='mx-auto p-3  left_collapse rounded-md'
                                alt=""
                            />

                        </div>
                    </Link>
                </div>
                <div className='mt-10'>
                    {/* <Link href={'/home'}> */}

                    <div className='h-48 items-center flex flex-col'

                    >
                        <div className='my-2 py-1'

                        >
                            <Image
                                src={Images.settings}
                                width={56}
                                className='mx-auto p-3  left_collapse rounded-md '
                                alt=""
                            />

                        </div>
                        <div className='my-2 py-1'

                        >
                            <Image
                                src={Images.logout}
                                width={56}
                                className='mx-auto p-3  left_collapse rounded-md'
                                alt=""
                            />

                        </div>



                    </div>
                    {/* </Link> */}
                </div>
            </div>
        </>
    )
}

export default CollapseLeftDashboard