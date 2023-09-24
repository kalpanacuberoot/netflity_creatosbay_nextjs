import Images from "@/images"
import Image from "next/image"
import Link from "next/link"

const Creator_leftsidebar = () => {
    return (
        <>

            <div className="h-screen  w-1/5  px-10">

                <div className='my-10'>
                    <Image
                        src={Images.company_logo}
                        width={100} height={100}
                        alt=""
                        className=' mx-auto'
                    />
                </div>


                <div className='border relative flex flex-row my-5 justify-between rounded-full ' >

                    <div className='flex  flex-row items-center justify-end text-right block rounded-md w-full outline-none text-gray-700 leading-tight '

                    >
                        <div >
                            <Image
                                src={Images.notification}
                                width={20}
                                height={20}
                                className='my-2 mx-1'
                                alt=""
                            />
                        </div>

                        <Image
                            src={Images.dropdown_icon}
                            width={15}
                            height={30}
                            className='my-1 mx-1'
                            alt=""

                        />

                    </div>

                </div>
                <div className=' text-center my-10'>

                    abcd

                    <div className='w-100 rounded-full bg-slate-800 text-white py-1 cursor-pointer'

                    >
                        <button

                        >
                            Edit
                        </button>
                    </div>

                </div>

                <div className='mt-10'>


                    <Link href={'/creator_home'}>

                        <div className='my-5 items-center w-100 rounded-full py-1 flex flex-row justify-evenly'

                        >

                            <Image
                                src={Images.home_icon}
                                width={25}
                                className=' '
                                alt=""
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Home
                            </button>
                        </div>
                    </Link>

                    <Link href={'/creator_find_campaign'}>
                        <div className=' my-5 w-100 rounded-full py-1 flex flex-row justify-evenly'

                        >
                            <Image
                                src={Images.campaign_icon}
                                width={25}
                                className=''
                                alt=""
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Campaign
                            </button>
                        </div>
                    </Link>

                    <Link href={'/creator_chat'}>
                        <div className=' my-5 w-100 rounded-full  py-1 flex flex-row justify-evenly'

                        >
                            <Image
                                src={Images.chats_icon}
                                width={25}
                                className=''
                                alt=""
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Chats
                            </button>
                        </div>
                    </Link>
                    <Link href={'/creator_invoices'}>
                        <div className=' my-5 w-100 rounded-full  py-1 flex flex-row justify-evenly'

                        >
                            <Image
                                src={Images.invoices_icon}
                                width={25}
                                className=''
                                alt=""
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Invoices
                            </button>
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Creator_leftsidebar