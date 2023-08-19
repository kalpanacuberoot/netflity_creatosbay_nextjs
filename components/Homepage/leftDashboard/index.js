import Images from "@/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Terms_of_service from "../Termsofservice";
import Terms_of_service_content from "../Termsofservice/Terms_of_service_content";
import Modal_logout from "../Modal_logout";
import Logout_content from "../Modal_logout/Logout_content";
import Modal_Invite_members from "../Modal_Invite_members";
import Invite_members_content from "../Modal_Invite_members/Invite_members_content";
import Modal_Edit_Profile from "../Modal_Edit_Profile";
import Edit_profile_content from "../Modal_Edit_Profile/Edit_profile_content";


const Left_Dashboard = () => {

    const [dropdown_menu, setDropdown_menu] = useState(false);
    const [isModalOpen_terms_service, setIsModalOpen_terms_service] = useState(false);
    const [isModalOpenlogout, setIsModalOpenlogout] = useState(false);
    const [isModalOpen_invite_mem, setIsModalOpen_invite_mem] = useState(false);
    const [isModalOpen_edit_prof, setIsModalOpen_edit_prof] = useState(false);


    const openModal = () => {
        setIsModalOpen_terms_service(true);
    };

    const closeModal = () => {
        setIsModalOpen_terms_service(false);
    };

    return (
        <div>
            <Terms_of_service isOpen={isModalOpen_terms_service} onClose={closeModal}>
                <div className="relative w-full max-w-4xl max-h-full min-w-3xl">

                    <Terms_of_service_content />
                </div>
            </Terms_of_service>
            <Modal_logout isOpen={isModalOpenlogout} onClose={() => setIsModalOpenlogout(false)}>

                <div className="relative w-full max-w-2xl max-h-full">

                    <Logout_content />
                </div>

            </Modal_logout>
            <Modal_Invite_members isOpen={isModalOpen_invite_mem} onClose={() => setIsModalOpen_invite_mem(false)}>
                <div className="relative w-full max-w-2xl max-h-full">
                    <Invite_members_content />
                </div>
            </Modal_Invite_members>
            <Modal_Edit_Profile isOpen={isModalOpen_edit_prof} onClose={() => setIsModalOpen_edit_prof(false)}>
                <div className="relative w-full max-w-2xl max-h-full">
                    <Edit_profile_content />
                </div>
            </Modal_Edit_Profile>
            <div className=''>
                <Image
                    src={Images.company_logo}
                    width={100} height={100}
                    alt=""
                    className=' mx-auto'
                />
            </div>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg></button>

            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>
            <div className='border flex flex-row my-5 justify-between rounded-full pe-2'>

                <Image
                    src={Images.profile_user}
                    width={35}
                    height={30}
                    alt=""
                />
                <div className='flex flex-row'
                onClick={() => setDropdown_menu(!dropdown_menu)}
                >
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
                    {/* <Image
                        src={Images.dropdown_icon}
                        width={20}
                        height={5}
                        className='my-2 mx-1'
                        alt=""
                    /> */}
                </div>

                <div className='z-10 bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 border home_dropdown_menu rounded-md'>
                    {dropdown_menu &&
                        <div className='w-full px-3 py-2'>

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
                                    onClick={() => setIsModalOpen_invite_mem(true)}
                                >
                                    Invite Members
                                </button>
                            </div>
                            <div className='py-1 my-2 ps-3 w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.support_icon}
                                    width={18}
                                    className=''
                                    alt=""
                                />
                                <button
                                    className=' w-48 dropdown_text text-center'
                                    onClick={() => setIsModalOpenlogout(true)}
                                >
                                    Support
                                </button>
                            </div>
                            <div className='py-1  ps-3 my-2 w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.terms_of_service}
                                    width={18}
                                    className=''
                                    alt=""
                                />
                                <button
                                    className="w-48 dropdown_text rounded-lg"
                                    onClick={openModal}
                                >
                                    Terms of services
                                </button>
                                {/* <button
                                    className=' w-48 dropdown_text text-center'
                                >
                                    
                                </button> */}
                            </div>
                            <div className='py-1 my-2  ps-3 w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.logout}
                                    width={18}
                                    height={10}
                                    className=''
                                    alt=""
                                />
                                <button
                                    className="w-48 dropdown_text rounded-lg"
                                    onClick={() => setIsModalOpenlogout(true)}
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
                        onClick={() => setIsModalOpen_edit_prof(true)}
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
                <Link href={'/communication'}>
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
                </Link>
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