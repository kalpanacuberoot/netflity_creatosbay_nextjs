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
import { isEmpty, url } from "@/generalfunctions";
import Change_password_content from "../Modal_change_password/Change_password_content";
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { parse } from 'cookie';


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
    const [selectedTab, setSelectedTab] = useState('home');
    const [loading, setLoading] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activePage, setActivePage] = useState('home');


    const onSwitchBrand = (item, index) => {
        console.log("onSwitchBrand", item, index);
        // JSON.stringify(Cookies.set('brand_detail',item))
        const new_user_name = Cookies.set('brand_detail', JSON.stringify(item), { expires: 106500 });
        setCookie_user_brand(new_user_name);
        router.reload();
    }

    useEffect(() => {

        checkIsMobile();

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

        window.addEventListener('resize', checkIsMobile);

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
            document.removeEventListener('mousedown', handleClickOutside);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);

    const toggleDropdown = () => {
        setAlluser_accounts(!alluser_accounts);
    };

    const getUser_Brand = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'));
        const userId = JSON?.parse(Cookies?.get('user_data'));
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

                if (responseData?.status === "success") {
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

    const handleHome = () => {
        setActivePage('home');
        setLoading(true)
        router.push('/home')
        setLoading(false)
    }

    const handleLiveCampaign = () => {
        setActivePage('live_campaign');
        setLoading(true)
        router.push('/live_campaign')
        setLoading(false)
    }

    const handleMarketplace = () => {
        setActivePage('marketplace');
        setLoading(true)
        router.push('/marketplace')
        setLoading(false)
    }

    const handleChats = () => {
        setActivePage('communication');
        setLoading(true)
        router.push('/communication')
        setLoading(false)
    }

    const handleInvoice = () => {
        setActivePage('invoice');
        setLoading(true)
        router.push('/invoice')
        setLoading(false)
    }

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        // setIsMobile(window.innerWidth <= 800);
    };

    useEffect(() => {
        const path = router.asPath;
        if (path === '/') {
            setActivePage('home');
        } else if (path === '/live_campaign') {
            setActivePage('live_campaign');
        } else if (path === '/marketplace') {
            setActivePage('marketplace');
        }
        else if (path === '/communication') {
            setActivePage('communication');
        }
        else if (path === '/invoice') {
            setActivePage('invoice');
        }
        // Add similar conditions for other pages
    }, [router.asPath]);



    return (
        <>
            {loading ? ( // Show loader if loading is true
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        src={Images.Loader}
                    />
                </div>
            ) : (
                <>
                    <Terms_of_service isOpen={isModalOpen_terms_service} onClose={closeModal}>
                        <div className="relative max-w-3xl max-h-full min-w-3xl">

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
                        <div className="relative w-full max-w-2xl max-h-3xl">
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

                    {isMobile && (
                        <>
                            <div className="flex flex-row justify-between w-full items-center h-auto">
                                <div className='mx-10' onClick={() => router.push('/home')}>
                                    <Image
                                        src={Images.company_logo}
                                        width={70} height={70}
                                        alt=""
                                        className=' mx-auto cursor-pointer'
                                    />
                                </div>

                                <div className="flex">
                                    <div className=' relative flex flex-row my-5 justify-between rounded-full right-0' ref={dropdownRef && settingdropdownRef}>
                                        {brand_user?.length > 0 && brand_user.map((item, index) => {
                                            // const isCurrent = item.isCurrent;
                                            const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                                            console.log("isCurrent left dashboard", isCurrent);
                                            return (

                                                <div
                                                    className=' w-full rounded-full flex flex-row justify-evenly cursor-pointer'
                                                    // className='py-1 my-2 ps-3 w-100 rounded-full border button_clr flex flex-row justify-evenly'
                                                    key={index}
                                                >
                                                    <Image
                                                        src={item?.brand?.logo}
                                                        width={60}
                                                        height={30}
                                                        alt=""
                                                        onClick={toggleDropdown}
                                                        className=""
                                                    />

                                                </div>

                                            )
                                        })
                                        }

                                        {alluser_accounts &&
                                            <div className='z-10 mt-10 top-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border home_dropdown_menu rounded-md'>

                                                <div className='w-full px-3 py-2'>

                                                    {brand_user?.length > 0 && brand_user.map((item, index) => {
                                                        // const isCurrent = item.isCurrent;
                                                        const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                                                        console.log("isCurrent left dashboard", isCurrent);
                                                        return (

                                                            <div
                                                                className={`py-1 my-2 ps-3 w-100 rounded-full border flex flex-row justify-evenly ${isCurrent ? 'border-yellow-500' : 'button_clr'}`}
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
                                                    <Link href={'/brand'}>
                                                        <div className="flex items-center justify-center mt-5 bg-yellow-400 py-2 rounded-lg">
                                                            <Image
                                                                src={Images.add_button_black_clr}
                                                                width={20}
                                                                height={20}
                                                                alt=""
                                                                className="me-3 cursor-pointer"
                                                            />
                                                            <button> Create New Brand</button>
                                                        </div>
                                                    </Link>

                                                </div>

                                            </div>
                                        }

                                    </div>
                                    <div className=' relative flex flex-row mx-5 justify-between rounded-full ' ref={dropdownRef && settingdropdownRef}>

                                        <div className='flex  flex-row items-center justify-end text-right block rounded-md w-full outline-none text-gray-700 leading-tight '
                                            ref={settingdropdownRef}
                                        >
                                            <div onClick={() => setIsModalOpen_notification(true) && setDropdown_menu(false)}>
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
                                                onClick={() => setDropdown_menu(!dropdown_menu) && setIsModalOpen_notification(false)}
                                            />

                                        </div>
                                        {dropdown_menu &&
                                            <div className=' z-10 mt-10 top-2 py-3 right-0 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border  rounded-md'>

                                                <div className='w-full px-3 py-2'>

                                                    <div className='py-1 ps-3 items-center w-100 rounded-full flex flex-row justify-evenly'
                                                        onClick={() => setIsModalOpen_invite_mem(true)}
                                                    >
                                                        <Image
                                                            src={Images.market_place_icon}
                                                            width={25}
                                                            className=' '
                                                            alt=""
                                                        />
                                                        <button
                                                            className=' w-48 dropdown_text text-center'

                                                        >
                                                            Invite Members
                                                        </button>
                                                    </div>
                                                    <Link href={'/support'}>
                                                        <div className='py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly'
                                                        >
                                                            <Image
                                                                src={Images.support_icon}
                                                                width={25}
                                                                className=''
                                                                alt=""
                                                            />
                                                            <button
                                                                className=' w-48 dropdown_text text-center'

                                                            >
                                                                Support
                                                            </button>
                                                        </div>
                                                    </Link>
                                                    <div className='py-1  ps-3 my-2 w-100 rounded-full flex flex-row justify-evenly'
                                                        onClick={openModal}
                                                    >
                                                        <Image
                                                            src={Images.terms_of_service}
                                                            width={25}
                                                            className=''
                                                            alt=""
                                                        />
                                                        <button
                                                            className="w-48 dropdown_text rounded-lg"

                                                        >
                                                            Terms of services
                                                        </button>

                                                    </div>
                                                    <div className='py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly'
                                                        onClick={() => setIsModalOpen_change_password(true)}
                                                    >
                                                        <Image
                                                            src={Images.profile_user}
                                                            width={25}
                                                            className=''
                                                            alt=""
                                                        />
                                                        <button
                                                            className=' w-48 dropdown_text text-center'

                                                        >
                                                            Change Password
                                                        </button>
                                                    </div>
                                                    <div className='py-1 my-2  ps-3 w-100 rounded-full flex flex-row justify-evenly'
                                                        onClick={() => setIsModalOpenlogout(true)}
                                                    >
                                                        <Image
                                                            src={Images.logout}
                                                            width={25}
                                                            height={18}
                                                            className=''
                                                            alt=""
                                                        />
                                                        <button
                                                            className="w-48 dropdown_text rounded-lg"

                                                        >
                                                            Sign Out
                                                        </button>
                                                    </div>


                                                </div>
                                            </div>
                                        }

                                    </div>

                                    {/* Hamburger Icon */}
                                    <div className="hamburger-icon m-10 ms-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                                        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                                        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                                    </div>
                                </div>


                            </div>
                            {/* Mobile Menu */}
                            {isMobileMenuOpen && (
                                <nav className="mobile-menu">

                                    <div className='my-5'>

                                        <div className='my-5 items-center w-full rounded-full py-1 flex flex-row justify-evenly'
                                            onClick={handleHome}
                                        >

                                            <Image
                                                src={Images.home_icon}
                                                width={25}
                                                className=' '
                                                alt=""
                                            />
                                            <button
                                                className='w-10 text-start'
                                            >
                                                Home
                                            </button>
                                        </div>

                                        <div className=' my-5 w-full rounded-full py-1 flex flex-row justify-evenly'
                                            onClick={handleLiveCampaign}
                                        >
                                            <Image
                                                src={Images.campaign_icon}
                                                width={25}
                                                className=''
                                                alt=""
                                            />
                                            <button
                                                className='w-10 text-start'
                                            >
                                                Campaign
                                            </button>
                                        </div>

                                        <div className=' my-5 w-full rounded-full py-1 flex flex-row justify-evenly'
                                            onClick={handleMarketplace}
                                        >
                                            <Image
                                                src={Images.market_place_icon}
                                                width={25}
                                                className=''
                                                alt=""
                                            />
                                            <button
                                                className='w-10 text-start'
                                            >
                                                Marketplace
                                            </button>
                                        </div>

                                        <div className=' my-5 w-full rounded-full  py-1 flex flex-row justify-evenly'
                                            onClick={handleChats}
                                        >
                                            <Image
                                                src={Images.chats_icon}
                                                width={25}
                                                className=''
                                                alt=""
                                            />
                                            <button
                                                className='w-10 text-start'
                                            >
                                                Chats
                                            </button>
                                        </div>

                                        <div className=' my-5 w-full rounded-full  py-1 flex flex-row justify-evenly'
                                            onClick={handleInvoice}
                                        >
                                            <Image
                                                src={Images.invoices_icon}
                                                width={25}
                                                className=''
                                                alt=""
                                            />
                                            <button
                                                className='w-10 text-start'
                                            >
                                                Invoices
                                            </button>
                                        </div>
                                        <div className=' my-5 w-full rounded-full  py-1 flex flex-row justify-evenly'
                                            onClick={() => setIsModalOpen_edit_prof(true)}
                                        >
                                            <Image
                                                src={Images.invoices_icon}
                                                width={25}
                                                className=''
                                                alt=""
                                            />
                                            <button
                                                className='w-10 text-start'
                                            >
                                                Edit Profile
                                            </button>
                                        </div>
                                    </div>
                                </nav>
                            )}
                        </>
                    )}
                    {!isMobile && (
                        <div className="h-screen w-1/5  px-10">

                            <div className='my-10' onClick={() => router.push('/home')}>
                                <Image
                                    src={Images.company_logo}
                                    width={100} height={100}
                                    alt=""
                                    className=' mx-auto cursor-pointer'
                                />
                            </div>


                            <div className='border px-3 py- 4 relative flex flex-row my-5 justify-between rounded-full ' ref={dropdownRef && settingdropdownRef}>
                                {/* {brand_user?.length > 0 && brand_user.map((item, index) => {
                                    const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                                    console.log("isCurrent left dashboard", isCurrent);
                                    return (

                                        <div
                                            className=' my-2 ms-3 w-100 rounded-full flex flex-row justify-evenly cursor-pointer'
                                            key={index}
                                        >
                                            <Image
                                                src={item?.brand?.logo ? item?.brand?.logo : Images.avatar1}
                                                width={35}
                                                height={30}
                                                alt=""
                                                onClick={toggleDropdown}
                                            />

                                        </div>

                                    )
                                })
                                } */}

                                <div
                                    className=' my-2 ms-3 w-100 rounded-full flex flex-row justify-evenly cursor-pointer'
                                    
                                >
                                    <Image
                                        src={Images.avatar1}
                                        width={35}
                                        height={30}
                                        alt=""
                                        // onClick={toggleDropdown}
                                    />

                                </div>

                                {alluser_accounts &&
                                    <div className='z-10 mt-10 top-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border home_dropdown_menu rounded-md'>

                                        <div className='w-full px-3 py-2'>

                                            {brand_user?.length > 0 && brand_user.map((item, index) => {
                                                // const isCurrent = item.isCurrent;
                                                const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                                                console.log("isCurrent left dashboard", isCurrent);
                                                return (

                                                    <div
                                                        className={`py-1 my-2 ps-3 w-100 rounded-full border flex flex-row justify-evenly ${isCurrent ? 'border-yellow-500' : 'button_clr'}`}
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
                                                            className='text-base w-48 dropdown_text text-center capitalize'
                                                            onClick={() => onSwitchBrand(item, index)}
                                                        >
                                                            {item?.brand?.name}
                                                        </button>


                                                    </div>

                                                )
                                            })
                                            }
                                            <Link href={'/brand'}>
                                                <div className="flex items-center justify-center mt-5 bg-yellow-400 py-2 rounded-lg">
                                                    <Image
                                                        src={Images.add_button_black_clr}
                                                        width={20}
                                                        height={20}
                                                        alt=""
                                                        className="me-3 cursor-pointer"
                                                    />
                                                    <button> Create New Brand</button>
                                                </div>
                                            </Link>

                                        </div>

                                    </div>
                                }


                                <div className='flex  flex-row items-center justify-end text-right block rounded-md w-full outline-none text-gray-700 leading-tight '
                                    ref={settingdropdownRef}
                                >
                                    <div onClick={() => setIsModalOpen_notification(true) && setDropdown_menu(false)}>
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
                                        onClick={() => setDropdown_menu(!dropdown_menu) && setIsModalOpen_notification(false)}
                                    />

                                </div>
                                {dropdown_menu &&
                                    <div className='z-10 mt-10 top-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border home_dropdown_menu rounded-md'>

                                        <div className='w-full px-3 py-2'>

                                            <div className='py-1 ps-3 items-center w-100 rounded-full flex flex-row justify-evenly'
                                                onClick={() => setIsModalOpen_invite_mem(true)}
                                            >
                                                <Image
                                                    src={Images.market_place_icon}
                                                    width={25}
                                                    className=' '
                                                    alt=""
                                                />
                                                <button
                                                    className=' w-48 dropdown_text text-center capitalize'

                                                >
                                                    Invite Members
                                                </button>
                                            </div>
                                            <Link href={'/support'}>
                                                <div className='py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly'
                                                >
                                                    <Image
                                                        src={Images.support_icon}
                                                        width={25}
                                                        className=''
                                                        alt=""
                                                    />
                                                    <button
                                                        className=' w-48 dropdown_text text-center capitalize'

                                                    >
                                                        Support
                                                    </button>
                                                </div>
                                            </Link>
                                            <div className='py-1  ps-3 my-2 w-100 rounded-full flex flex-row justify-evenly'
                                                onClick={openModal}
                                            >
                                                <Image
                                                    src={Images.terms_of_service}
                                                    width={25}
                                                    className=''
                                                    alt=""
                                                />
                                                <button
                                                    className="w-48 dropdown_text rounded-lg capitalize"

                                                >
                                                    Terms of services
                                                </button>

                                            </div>
                                            <div className='py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly'
                                                onClick={() => setIsModalOpen_change_password(true)}
                                            >
                                                <Image
                                                    src={Images.profile_user}
                                                    width={25}
                                                    className=''
                                                    alt=""
                                                />
                                                <button
                                                    className=' w-48 dropdown_text text-center capitalize'

                                                >
                                                    Change Password
                                                </button>
                                            </div>
                                            <div className='py-1 my-2  ps-3 w-100 rounded-full flex flex-row justify-evenly'
                                                onClick={() => setIsModalOpenlogout(true)}
                                            >
                                                <Image
                                                    src={Images.logout}
                                                    width={25}
                                                    height={18}
                                                    className=''
                                                    alt=""
                                                />
                                                <button
                                                    className="w-48 dropdown_text rounded-lg capitalize"

                                                >
                                                    Sign Out
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                }

                            </div>
                            <div className=' text-center my-10'>

                                {/* {cookie_user_brand && (
                                    <h4 className='font-bold my-5 capitalize'>{cookie_user_brand?.name || cookie_user_brand?.brand?.name}</h4>
                                )} */}
                                <h4 className='font-bold my-5 capitalize'>Brand One</h4>
                                <div className='w-100 rounded-full bg-slate-800 text-white py-1 cursor-pointer'
                                    onClick={() => setIsModalOpen_edit_prof(true)}
                                >
                                    <button

                                    >
                                        Edit
                                    </button>
                                </div>

                            </div>

                            <div className='mt-10'>

                                <div
                                    className={`my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === 'home' ? 'py-2 bg-black text-white' : 'bg-white text-black'
                                        }`}
                                    onClick={handleHome}
                                >
                                    {/* {!activePage && <Image
                                        src={Images.home_icon}
                                        width={25}
                                        className=''
                                        alt=""
                                    />} */}
                                    <svg
                                        className={activePage === 'home' ? 'active-svg' : ''}
                                        xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            // fill='#000000'
                                            stroke="none">
                                            <path d="M2487 4590 c-27 -5 -72 -20 -100 -34 -31 -16 -520 -416 -1212 -994 -1222 -1019 -1188 -988 -1172 -1054 4 -13 58 -85 122 -160 96 -114 121 -138 149 -144 19 -3 44 -3 55 1 11 3 517 420 1123 925 607 506 1105 920 1108 920 3 0 501 -414 1108 -920 606 -505 1112 -922 1123 -925 11 -4 36 -4 55 -1 28 6 53 30 149 144 64 75 118 147 122 160 15 62 3 74 -367 382 l-355 296 -5 672 -5 672 -28 27 -27 28 -323 3 c-210 2 -335 0 -358 -7 -68 -20 -68 -22 -71 -386 l-3 -327 -408 340 c-437 365 -450 374 -572 385 -33 3 -82 2 -108 -3z" />
                                            <path d="M1642 3018 l-912 -752 0 -780 c0 -537 4 -794 11 -821 15 -55 83 -119 142 -133 32 -9 228 -12 656 -12 l611 0 0 610 0 610 410 0 410 0 0 -610 0 -610 611 0 c407 0 625 4 653 11 56 14 114 62 137 113 18 39 19 84 19 832 l0 790 -909 749 c-499 412 -912 750 -917 752 -5 2 -420 -335 -922 -749z" />
                                        </g>
                                    </svg>

                                    <button
                                        className='w-32 text-start'
                                    >
                                        Home
                                    </button>
                                </div>

                                <div
                                    // className=' my-5 w-100 rounded-full py-1 flex flex-row justify-evenly'
                                    className={`my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === 'live_campaign' ? 'py-2 bg-black text-white' : ''
                                        }`}
                                    onClick={handleLiveCampaign}
                                >
                                    {/* <Image
                                        src={Images.campaign_icon}
                                        width={25}
                                        className=''
                                        alt=""
                                    /> */}
                                    <svg
                                        className={activePage === 'live_campaign' ? 'active-svg' : ''}
                                        xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            // fill="#000000"
                                            stroke="none">
                                            <path d="M3816 4788 c-30 -31 -35 -47 -85 -286 -58 -279 -58 -301 -1 -342 34 -24 106 -27 138 -4 37 26 48 59 101 312 47 223 50 245 37 275 -20 50 -60 77 -113 77 -37 0 -50 -5 -77 -32z" />
                                            <path d="M2565 4609 c-45 -12 -110 -72 -134 -122 -15 -30 -21 -63 -21 -108 0 -79 -67 44 732 -1339 551 -953 638 -1098 675 -1126 197 -150 465 68 359 291 -13 28 -120 217 -238 422 l-215 372 57 35 c76 47 135 113 173 194 30 63 32 74 32 177 0 103 -2 114 -31 176 -111 233 -383 317 -609 189 l-51 -29 -226 392 c-125 216 -242 406 -260 424 -18 18 -50 39 -70 47 -40 17 -124 20 -173 5z" />
                                            <path d="M4516 4042 c-179 -105 -223 -134 -238 -163 -30 -55 -12 -121 43 -153 59 -35 89 -24 324 112 196 113 222 131 239 165 16 33 17 45 7 77 -16 54 -62 90 -114 90 -35 -1 -78 -22 -261 -128z" />
                                            <path d="M2189 3998 c-259 -330 -619 -675 -967 -928 -72 -52 -131 -98 -132 -102 0 -8 847 -1479 858 -1489 4 -4 59 17 122 46 405 184 831 312 1267 380 86 14 158 27 160 29 6 5 -1229 2146 -1237 2146 -4 0 -35 -37 -71 -82z" />
                                            <path d="M4415 3216 c-77 -34 -93 -141 -29 -198 25 -22 471 -168 513 -168 98 0 152 100 99 181 -22 32 -38 39 -268 116 -135 45 -254 82 -265 82 -11 0 -34 -6 -50 -13z" />
                                            <path d="M625 2697 c-222 -128 -259 -152 -331 -223 -66 -65 -90 -97 -122 -165 -78 -161 -91 -334 -38 -491 26 -79 233 -449 310 -555 54 -75 137 -142 233 -189 101 -49 195 -67 318 -61 157 8 179 18 659 296 44 25 80 48 80 51 1 8 -848 1480 -854 1480 -3 0 -118 -64 -255 -143z" />
                                            <path d="M1760 1093 c-140 -80 -257 -148 -260 -150 -7 -6 603 -613 632 -629 35 -18 101 -18 136 0 40 22 259 247 271 279 15 40 13 83 -5 120 -14 29 -500 527 -514 527 -3 0 -120 -66 -260 -147z" />
                                        </g>
                                    </svg>
                                    <button
                                        className='w-32 text-start'
                                    >
                                        Campaigns
                                    </button>
                                </div>

                                <div
                                    className={`my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === 'marketplace' ? 'py-2 bg-black text-white' : ''
                                        }`}
                                    onClick={handleMarketplace}
                                >
                                    {/* <Image
                                        src={Images.market_place_icon}
                                        width={25}
                                        className=''
                                        alt=""
                                    /> */}
                                    <svg
                                        className={activePage === 'marketplace' ? 'active-svg' : ''}
                                        xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            // fill="#000000" 
                                            stroke="none">
                                            <path d="M1110 4694 c-84 -17 -229 -90 -305 -151 -162 -131 -260 -325 -272 -538 -8 -139 13 -239 79 -375 44 -91 62 -115 142 -195 76 -76 106 -99 186 -138 121 -59 207 -80 335 -80 136 0 262 31 361 88 39 23 42 28 64 112 44 170 156 357 277 460 l56 48 -6 90 c-14 205 -113 399 -272 528 -77 63 -220 133 -310 152 -87 18 -249 18 -335 -1z" />
                                            <path d="M3670 4695 c-85 -19 -229 -91 -305 -152 -150 -122 -251 -310 -271 -508 l-6 -61 43 -29 c191 -125 352 -384 384 -612 6 -48 9 -52 48 -67 93 -35 173 -49 277 -49 133 0 217 20 340 80 80 39 110 62 186 138 80 80 98 104 142 195 66 136 87 236 79 375 -18 318 -228 583 -538 680 -75 24 -292 30 -379 10z" />
                                            <path d="M2473 3930 c-184 -33 -357 -138 -468 -285 -63 -84 -95 -145 -127 -245 -19 -64 -23 -96 -23 -215 0 -154 14 -213 77 -338 214 -424 782 -541 1144 -235 277 234 350 610 181 933 -31 60 -65 103 -132 170 -101 101 -196 158 -325 195 -86 24 -247 34 -327 20z" />
                                            <path d="M769 3140 c-379 -80 -671 -375 -749 -757 -19 -95 -20 -131 -18 -539 l3 -437 150 -43 c168 -49 419 -105 570 -129 100 -16 351 -45 391 -45 21 0 22 4 27 208 4 181 8 220 31 307 50 191 172 400 313 537 110 107 298 222 421 259 23 7 42 15 42 19 0 3 -14 19 -31 36 -119 113 -225 346 -245 540 l-7 64 -406 -1 c-352 0 -417 -3 -492 -19z" />
                                            <path d="M3526 3138 c-3 -13 -8 -48 -11 -78 -17 -151 -95 -330 -201 -461 -36 -45 -64 -82 -62 -84 2 -1 29 -12 60 -23 268 -99 492 -301 623 -562 87 -174 113 -293 122 -557 6 -189 6 -193 27 -188 12 2 66 7 121 10 294 19 631 96 838 192 l77 36 0 430 c0 393 -2 437 -21 530 -77 385 -370 679 -753 758 -79 16 -138 19 -453 19 l-363 0 -4 -22z" />
                                            <path d="M2177 2379 c-242 -25 -480 -153 -636 -341 -73 -87 -163 -261 -193 -373 -21 -76 -22 -103 -26 -556 l-3 -476 123 -36 c262 -77 483 -124 728 -157 199 -27 637 -38 814 -21 331 33 616 100 814 192 l84 39 -5 452 c-5 504 -8 529 -74 688 -140 333 -440 553 -802 590 -119 12 -709 11 -824 -1z" />
                                        </g>
                                    </svg>
                                    <button
                                        className='w-32 text-start'
                                    >
                                        Marketplace
                                    </button>
                                </div>

                                <div
                                    className={`my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === 'communication' ? 'py-2 bg-black text-white' : ''
                                        }`}
                                    onClick={handleChats}
                                >
                                    <svg
                                        className={activePage === 'communication' ? 'active-svg' : ''}
                                        xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            // fill="#000000" 
                                            stroke="none">
                                            <path d="M461 4559 c-185 -50 -349 -177 -424 -329 l-32 -65 0 -1040 0 -1040 30 -53 c61 -111 199 -206 365 -251 41 -12 87 -21 102 -21 17 0 28 -5 28 -14 0 -7 -36 -150 -80 -317 -44 -167 -79 -307 -77 -311 1 -3 246 137 544 313 l543 319 1195 0 c1339 0 1280 -3 1432 72 93 45 181 129 217 208 21 45 21 54 24 1070 3 1147 6 1094 -68 1208 -73 112 -180 197 -308 245 l-57 22 -1680 2 c-1647 2 -1681 2 -1754 -18z m719 -1051 c76 -23 150 -94 181 -173 20 -53 15 -154 -11 -213 -43 -99 -154 -172 -260 -172 -176 0 -316 171 -280 343 35 171 199 266 370 215z m1112 -13 c95 -48 158 -153 158 -264 0 -72 -44 -166 -98 -211 -47 -39 -130 -70 -187 -70 -57 0 -140 31 -187 70 -54 45 -98 139 -98 211 0 145 102 268 239 288 56 8 128 -2 173 -24z m1039 14 c87 -22 168 -115 190 -217 38 -184 -121 -358 -308 -339 -237 25 -343 317 -176 484 80 80 171 102 294 72z" />
                                            <path d="M4620 2713 c0 -864 -1 -877 -55 -983 -54 -106 -156 -184 -273 -209 -37 -8 -464 -11 -1444 -11 l-1390 0 3 -77 c3 -60 10 -91 32 -135 54 -111 163 -206 293 -256 l69 -27 1100 -5 1100 -5 388 -228 c214 -126 391 -226 394 -223 4 4 -78 356 -103 437 -4 13 7 17 55 22 164 17 281 133 320 315 17 83 15 1861 -3 1927 -48 179 -165 255 -396 255 l-90 0 0 -797z" />
                                        </g>
                                    </svg>
                                    {/* <Image
                                        src={Images.chats_icon}
                                        width={25}
                                        className=''
                                        alt=""
                                    /> */}
                                    <button
                                        className='w-32 text-start'
                                    >
                                        Chats
                                    </button>
                                </div>

                                <div
                                    className={`my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === 'invoice' ? 'py-2 bg-black text-white' : ''
                                        }`}
                                    onClick={handleInvoice}
                                >

                                    <svg
                                        className={activePage === 'invoice' ? 'active-svg' : ''}
                                        xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            // fill="#000000" 
                                            stroke="none">
                                            <path d="M2577 4556 c-477 -151 -770 -239 -772 -232 -2 6 -8 34 -15 61 -33 144 -141 285 -266 346 -64 32 -75 34 -169 34 -89 0 -106 -3 -150 -26 -78 -42 -151 -121 -195 -214 -51 -107 -58 -143 -66 -328 l-7 -157 -145 -47 c-82 -26 -156 -56 -172 -70 -43 -36 -65 -102 -52 -155 6 -24 241 -771 521 -1661 382 -1213 515 -1625 533 -1644 28 -31 77 -53 117 -53 31 0 327 91 1176 360 275 87 644 204 820 259 783 245 754 234 799 294 13 17 20 43 20 74 0 63 -1015 3292 -1050 3339 -28 38 -80 64 -126 63 -18 0 -379 -110 -801 -243z m-1189 -28 c57 -14 126 -79 141 -134 12 -44 14 -532 2 -819 -6 -169 -8 -184 -34 -237 -93 -189 -311 -235 -452 -94 -35 34 -60 72 -76 111 -22 58 -23 72 -27 371 l-3 312 32 11 c49 17 78 13 104 -14 l25 -24 0 -278 c0 -269 1 -280 23 -323 25 -50 77 -90 116 -90 41 0 86 34 110 84 22 44 23 58 28 493 6 416 5 450 -11 466 -13 13 -22 15 -37 7 -18 -10 -19 -26 -19 -445 l0 -434 -22 -25 c-34 -37 -85 -39 -118 -4 -20 21 -20 33 -20 473 0 452 0 452 23 495 26 50 56 75 113 95 49 18 46 17 102 3z m806 -602 c26 -11 38 -25 55 -68 21 -53 24 -55 74 -67 29 -6 69 -24 90 -38 46 -32 87 -98 87 -140 0 -40 -39 -76 -82 -75 -32 1 -45 12 -89 73 -23 33 -84 32 -111 -1 -27 -34 -21 -87 14 -113 25 -19 31 -19 82 -7 154 37 293 -59 304 -210 5 -70 -10 -120 -50 -166 l-31 -35 17 -42 c22 -58 20 -96 -6 -124 -23 -24 -66 -30 -98 -13 -10 5 -26 31 -36 57 -20 55 -38 73 -71 73 -32 0 -81 26 -121 64 -79 73 -84 159 -12 185 42 14 76 0 101 -43 28 -47 67 -63 108 -42 51 27 56 94 9 129 -26 19 -32 20 -93 8 -89 -18 -148 -3 -211 52 -57 50 -83 105 -84 175 0 58 18 109 55 158 24 31 24 33 9 70 -33 80 -13 138 54 153 1 1 18 -5 36 -13z m1375 -1082 c27 -34 27 -67 -1 -98 -20 -22 -159 -67 -953 -307 -511 -154 -945 -281 -964 -282 -25 -1 -39 6 -57 27 -52 60 -24 105 89 141 353 113 1800 543 1829 544 28 1 41 -5 57 -25z m166 -519 c17 -16 25 -35 25 -58 0 -37 -19 -59 -64 -77 -77 -29 -1858 -560 -1878 -560 -67 1 -97 95 -45 138 9 7 330 108 714 224 384 115 806 243 938 283 132 40 250 74 263 74 13 1 34 -10 47 -24z m175 -525 c29 -29 30 -83 2 -112 -10 -10 -399 -132 -967 -303 -850 -255 -953 -284 -978 -274 -51 21 -65 89 -24 126 15 14 288 101 862 273 462 139 881 265 930 281 109 34 148 36 175 9z" />
                                            <path d="M591 1795 l-1 -1341 23 -44 c14 -30 36 -53 62 -67 40 -22 44 -23 448 -23 l409 0 -36 42 c-20 22 -42 59 -51 82 -8 23 -199 628 -425 1346 -225 718 -414 1314 -419 1325 -6 13 -10 -472 -10 -1320z" />
                                            <path d="M3320 731 c-201 -64 -573 -182 -827 -261 l-461 -145 769 -3 c853 -2 813 -5 865 64 l29 37 3 214 c2 117 -1 213 -5 212 -4 -1 -172 -54 -373 -118z" />
                                        </g>
                                    </svg>
                                    {/* <Image
                                        src={Images.invoices_icon}
                                        width={25}
                                        className=''
                                        alt=""
                                    /> */}
                                    <button
                                        className='w-32 text-start'
                                    >
                                        Invoices
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}
                </>
            )}
        </>
    )
}
export default Left_Dashboard
