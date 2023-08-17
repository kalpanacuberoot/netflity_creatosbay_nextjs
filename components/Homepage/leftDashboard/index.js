import Images from "@/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Left_Dashboard = () => {

    const [dropdown_menu, setDropdown_menu] = useState(false);

    return (
        <div>
            <div className=''>
                <Image
                    src={Images.company_logo}
                    width={100} height={100}
                    alt=""
                    className=' mx-auto'
                />
            </div>

            <div className='border flex flex-row my-5 justify-between rounded-full pe-2'>

                <Image
                    src={Images.profile_user}
                    width={35}
                    height={30}
                    alt=""
                />
                <div className='flex flex-row' onClick={() => setDropdown_menu(!dropdown_menu)}>
                    <Image
                        src={Images.notification}
                        width={20}
                        height={20}
                        className='my-2 mx-1'
                        alt=""
                    />
                    <Image
                        src={Images.settings}
                        width={20}
                        height={30}
                        className='my-2 mx-1'
                        alt=""
                    />
                    <Image
                        src={Images.dropdown_icon}
                        width={20}
                        height={5}
                        className='my-2 mx-1'
                        alt=""
                    />
                </div>

                <div className='absolute border home_dropdown_menu border rounded-md'>
                    {dropdown_menu &&
                        <div className='mt-2  w-full px-3 py-2'>

                            <div className='py-1 ps-3 items-center w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.market_place_icon}
                                    width={18}
                                    className=' '
                                    alt=""
                                />
                                <button
                                    className=' w-48 dropdown_text text-center'

                                >
                                    Invite Members
                                </button>
                            </div>
                            <div className='py-1 my-2 w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.support_icon}
                                    width={18}
                                    className=''
                                    alt=""
                                />
                                <button
                                    className=' w-48 dropdown_text text-center'
                                >
                                    Support
                                </button>
                            </div>
                            <div className='py-1 my-2 w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.terms_of_service}
                                    width={18}
                                    className=''
                                    alt=""
                                />
                                <button
                                    className=' w-48 dropdown_text text-center'
                                >
                                    Terms of Services
                                </button>
                            </div>
                            <div className='py-1 my-2 w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.logout}
                                    width={18}
                                    height={10}
                                    className=''
                                    alt=""
                                />
                                <button
                                    className='w-48  dropdown_text text-center'
                                >
                                    Sign Out
                                </button>
                            </div>

                        </div>}
                </div>
            </div>
            <div className=' text-center'>
                <h4 className='font-bold'>Creatorbay Inc.</h4>
                <h5 className='px-2 mb-2'>Neque orro quisquam est qui dolorem</h5>
                <div className='w-100 rounded-full border edit_button_clr py-1'

                >
                    <button
                    >
                        Edit
                    </button>
                </div>

            </div>
            <div className='mt-5'>
                <Link href={'/home'}>

                    <div className='items-center w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                    >
                        {/* {home_icon && 
                    <Image
                    src={Images.campaign_icon}
                    width={22}
                    className='button_clr'
                />
                }
                
                {!home_icon && 
                <Image
                    src={Images.home_icon}
                    width={22}
                    className='button_clr '
                />}
                <button
                    className='w-32 text-start'
                    onMouseEnter={() =>setHome_icon(true)}
                    onMouseLeave={() => setHome_icon(false)}
                >
                    Home
                </button> */}



                        <Image
                            src={Images.home_icon}
                            width={22}
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
                <Link href={'/live_campaign'}>
                    <div className=' my-5 w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                    >
                        <Image
                            src={Images.campaign_icon}
                            width={22}
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
                <div className=' my-5 w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                >
                    <Image
                        src={Images.market_place_icon}
                        width={22}
                        className=''
                        alt=""
                    />
                    <button
                        className='w-32 text-start'
                    >
                        Marketplace
                    </button>
                </div>
                <div className=' my-5 w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                >
                    <Image
                        src={Images.chats_icon}
                        width={22}
                        className=''
                        alt=""
                    />
                    <button
                        className='w-32 text-start'
                    >
                        Chats
                    </button>
                </div>
                <Link href={'/invoice'}>
                    <div className=' my-5 w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                    >
                        <Image
                            src={Images.invoices_icon}
                            width={22}
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
    )
}
export default Left_Dashboard