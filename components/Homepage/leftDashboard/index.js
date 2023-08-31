import Images from "@/images";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import Terms_of_service from "../Termsofservice";
import Terms_of_service_content from "../Termsofservice/Terms_of_service_content";
import Modal_logout from "../Modal_logout";
import Logout_content from "../Modal_logout/Logout_content";
import Modal_Invite_members from "../Modal_Invite_members";
import Invite_members_content from "../Modal_Invite_members/Invite_members_content";
import Modal_Edit_Profile from "../Modal_Edit_Profile";
import Edit_profile_content from "../Modal_Edit_Profile/Edit_profile_content";
import Notification_popup from "../Notification_popup";
import Notification_content from "../Notification_popup/Notification_content";
import Cookies from "js-cookie";
import Modal_change_password from "../Modal_change_password";
import { isEmpty, url } from "@/generalfunation";
import Change_password_content from "../Modal_change_password/Change_password_content";
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const Left_Dashboard = () => {
    const router = useRouter();

    const [brand_user, setBrand_user] = useState([]);
    const [dropdown_menu, setDropdown_menu] = useState(false);
    const [isModalOpen_terms_service, setIsModalOpen_terms_service] = useState(false);
    const [isModalOpenlogout, setIsModalOpenlogout] = useState(false);
    const [isModalOpen_invite_mem, setIsModalOpen_invite_mem] = useState(false);
    const [isModalOpen_edit_prof, setIsModalOpen_edit_prof] = useState(false);
    const [isModalOpen_notification, setIsModalOpen_notification] = useState(false);
    const [isModalOpen_change_password, setIsModalOpen_change_password] = useState(false);
    const [alluser_accounts, setAlluser_accounts] = useState(false);
    const dropdownRef = useRef(null);
    const [cookie_user_brand, setCookie_user_brand] = useState(null);
    const settingdropdownRef = useRef(null);

    const onSwitchBrand = (item, index) => {
        console.log("onSwitchBrand", item, index);
        // JSON.stringify(Cookies.set('brand_detail',item))
        const new_user_name = Cookies.set('brand_detail', JSON.stringify(item), { expires: 106500 });
        setCookie_user_brand(new_user_name);
        router.reload();
    }

    useEffect(() => {



        const brand_details = Cookies.get('brand_detail');
        if (brand_details) {
            try {
                const brand_detail_name = JSON.parse(brand_details);
                // Now, you can access properties of the object
                console.log("brand_user--dwndbawb", brand_user, brand_detail_name);
                setCookie_user_brand(brand_detail_name)
            } catch (error) {
                console.error('Error parsing JSON from cookie:', error);
            }
        } else {
            console.error('Cookie "brand_detail" is empty or not defined');
        }

        getUser_Brand();

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setAlluser_accounts(false);
            }
            if (settingdropdownRef.current && !settingdropdownRef.current.contains(event.target)) {
                setDropdown_menu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };



    }, []);

    const toggleDropdown = () => {
        setAlluser_accounts(!alluser_accounts);
    };

    const getUser_Brand = async () => {

        const cookieValue = JSON?.parse(Cookies?.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);

        const userId = JSON?.parse(Cookies?.get('user_data'));
        console.log('categories cookieValue------------1', userId?.user?.id);

        try {

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/brandusers?user=${userId?.user?.id}`, {
                method: 'Get',
                headers: headers,

            });

            console.log("response get userbarnd", response);

            if (response?.ok) {
                const responseData = await response.json();
                console.log('brandusers response:', responseData?.data?.data);


                // Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });

                if (responseData?.status==="success") {
                    // toast.success('brandusers Name', {
                    //     position: 'top-center',
                    //     autoClose: 5000,
                    // });
                    setBrand_user(responseData?.data?.data)

                } else {
                    console.error('Error:', responseData.message);
                    // alert('Brand creation failed');
                }
            } else {
                console.error('Error:', response.statusText);
                // alert('Brand creation failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const openModal = () => {
        setIsModalOpen_terms_service(true);
    };

    const closeModal = () => {
        setIsModalOpen_terms_service(false);
    };

    console.log("brand_user--dwndbawb1", brand_user, cookie_user_brand);




    return (
        <div className="h-screen">
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
            <Notification_popup isOpen={isModalOpen_notification} onClose={() => setIsModalOpen_notification(false)}>
                <div className="relative w-full max-w-4xl max-h-full min-w-3xl ">
                    <Notification_content />
                </div>
            </Notification_popup>
            <Modal_change_password isOpen={isModalOpen_change_password} onClose={() => setIsModalOpen_change_password(false)}>
                <div className="relative w-full max-w-4xl max-h-full min-w-3xl ">
                    <Change_password_content />
                </div>
            </Modal_change_password>
            <div className=''>
                <Image
                    src={Images.company_logo}
                    width={100} height={100}
                    alt=""
                    className=' mx-auto'
                />
            </div>


            <div className='border relative flex flex-row my-5 justify-between rounded-full pe-2 '  ref={dropdownRef}>

                <Image
                    src={Images.profile_user}
                    width={35}
                    height={30}
                    alt=""
                    onClick={toggleDropdown}
                />
                {alluser_accounts &&
                    <div className='z-10 mt-10 top-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border home_dropdown_menu rounded-md'>

                        <div className='w-full px-3 py-2'>

                            {brand_user?.length > 0 && brand_user.map((item, index) => {
                                // const isCurrent = item.isCurrent;
                                const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                                console.log("isCurrent left dashboard",isCurrent);
                                return (

                                    <div
                                        className={`py-1 my-2 ps-3 w-100 rounded-full border flex flex-row justify-evenly ${isCurrent ? 'bg-amber-400 text-white' : 'button_clr'}`}
                                        // className='py-1 my-2 ps-3 w-100 rounded-full border button_clr flex flex-row justify-evenly'
                                        key={index}
                                    >
                                        <Image
                                            src={item?.brand?.logo}
                                            width={30}
                                            height={30}
                                            className='rounded-full bg-white'
                                            alt=""
                                        />
                                        <button
                                            className='text-base w-48 dropdown_text text-center'
                                            onClick={() => onSwitchBrand(item, index)}
                                        >
                                            {item?.brand?.name}
                                        </button>
                                    </div>

                                )
                            })
                            }

                        </div>
                    </div>
                }


                <div className='flex  flex-row items-center justify-end text-right block rounded-md w-full outline-none text-gray-700 leading-tight '
                  ref={ settingdropdownRef} 
                >
                    <div onClick={() => setIsModalOpen_notification(true)}>
                        <Image
                            src={Images.notification}
                            width={20}
                            height={20}
                            className='my-2 mx-1'
                            alt=""
                        />
                    </div>

                    <Image
                        src={Images.settings}
                        width={20}
                        height={30}
                        className='my-2 mx-1'
                        alt=""
                        onClick={() => setDropdown_menu(!dropdown_menu)}
                    />
                    {/* <Image
                        src={Images.dropdown_icon}
                        width={20}
                        height={5}
                        className='my-2 mx-1'
                        alt=""
                    /> */}

                </div>
                {dropdown_menu &&
                    <div className='z-10 mt-10 top-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border home_dropdown_menu rounded-md'>

                        <div className='w-full px-3 py-2'>

                            <div className='py-1 ps-3 items-center w-100 rounded-full border button_clr flex flex-row justify-evenly'
                            >
                                <Image
                                    src={Images.market_place_icon}
                                    width={20}
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
                                    width={20}
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
                                    width={20}
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
                            <div className='py-1 my-2 ps-3 w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.profile_user}
                                    width={20}
                                    className=''
                                    alt=""
                                />
                                <button
                                    className=' w-48 dropdown_text text-center'
                                    onClick={() => setIsModalOpen_change_password(true)}
                                >
                                    Change Password
                                </button>
                            </div>
                            <div className='py-1 my-2  ps-3 w-100 rounded-full border button_clr flex flex-row justify-evenly'

                            >
                                <Image
                                    src={Images.logout}
                                    width={20}
                                    height={18}
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

                        </div>
                    </div>
                }

            </div>
            <div className=' text-center'>

                {cookie_user_brand && (
                    <h4 className='font-bold'>{cookie_user_brand?.name || cookie_user_brand?.brand?.name}</h4>
                )}
                {/* <h5 className='px-2 mb-2'>Neque orro quisquam est qui dolorem</h5> */}
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
                <Link href={'/marketplace'}>
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
                </Link>
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