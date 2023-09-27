import Modal_Invite_members from "@/components/Homepage/Modal_Invite_members"
import Invite_members_content from "@/components/Homepage/Modal_Invite_members/Invite_members_content"
import Terms_of_service from "@/components/Homepage/Termsofservice"
import Terms_of_service_content from "@/components/Homepage/Termsofservice/Terms_of_service_content"
import { url } from "@/generalfunctions"
import Images from "@/images"
import Cookies from "js-cookie"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Creator_InviteMem_Content from "../ModalBox/Creator_Invite_Members/Creator_InviteMem_Content"
import Creator_Invite_Members from "../ModalBox/Creator_Invite_Members"
import Creator_Terms_of_Service from "../ModalBox/Creator_Terms_of_Service"
import Creator_TermsService_Content from "../ModalBox/Creator_Terms_of_Service/Creator_TermsService_Content"
import Creator_logout from "../ModalBox/Creator_logout"
import Creator_logout_content from "../ModalBox/Creator_logout/Creator_logout_content"
import Creator_change_password from "../ModalBox/Creator_change_password"
import Creator_changepass_content from "../ModalBox/Creator_change_password/Creator_changepass_content"

const Creator_leftsidebar = ({ toggleDropdown, dropdown_menu }) => {

    const [creator_img, setCreator_img] = useState(null);
    // const [dropdown_menu, setDropdown_menu] = useState(false);
    const [isModalOpen_terms_service, setIsModalOpen_terms_service] = useState(false);
    const [isModalOpen_invite_mem, setIsModalOpen_invite_mem] = useState(false);
    const [isModalOpenlogout, setIsModalOpenlogout] = useState(false);
    const [isModalOpen_change_password, setIsModalOpen_change_password] = useState(false);
    const settingdropdownRef = useRef(null);

    const creatorImage = async () => {

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'));
        const userId = JSON?.parse(Cookies?.get('creator_user_data'));

        console.log("cookieValue creator", cookieValue?.token, userId?.user?.id);
        try {

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/creators/?user=${userId?.user?.id}`, {
                method: 'Get',
                headers: headers,

            });

            console.log("response get creators", response);

            if (response?.ok) {
                const responseData = await response.json();
                console.log('creators response:', responseData?.data?.data);

                if (responseData?.status === "success") {

                    setCreator_img(responseData?.data?.data);
                    Cookies.set('creator_profile_id', JSON.stringify(responseData?.data?.data))

                } else {
                    console.error('Error:', responseData.message);

                }
            } else {
                console.error('Error:', response.statusText);

            }
        } catch (error) {
            console.error('Error:', error);
        }

    };

    // useEffect(() => {

    //     creatorImage();

    //     function handleClickOutside(event) {
           
    //         if (settingdropdownRef.current && settingdropdownRef.current.contains(event.target)) {
    //             setDropdown_menu(false);
    //         }
    //     }

    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };

    // }, []);

    useEffect(() => {
        creatorImage();
    }, [])

    console.log("creator_img", creator_img);
    return (
        <>

            <Creator_Invite_Members isOpen={isModalOpen_invite_mem} onClose={() => setIsModalOpen_invite_mem(false)}>
                <div className="relative w-full max-w-2xl max-h-full">
                    <Creator_InviteMem_Content />
                </div>
            </Creator_Invite_Members>

            <Creator_Terms_of_Service isOpen={isModalOpen_terms_service} onClose={() => setIsModalOpen_terms_service(false)}>
                <div className="relative w-full max-w-4xl max-h-full min-w-3xl">

                    <Creator_TermsService_Content />
                </div>
            </Creator_Terms_of_Service>

            <Creator_change_password isOpen={isModalOpen_change_password} onClose={() => setIsModalOpen_change_password(false)}>
                <div className="relative w-full max-w-4xl max-h-full min-w-3xl">

                    <Creator_changepass_content />
                </div>
            </Creator_change_password>

            <Creator_logout isOpen={isModalOpenlogout} onClose={() => setIsModalOpenlogout(false)}>
                <div className="relative w-full max-w-2xl max-h-full">
                    <Creator_logout_content />
                </div>
            </Creator_logout>

            <div className="h-screen  w-1/5  px-10"  ref={settingdropdownRef}>

                <div className='my-10'>
                    <Image
                        src={Images.company_logo}
                        width={100} height={100}
                        alt=""
                        className=' mx-auto'
                    />
                </div>

                <div className='border relative flex flex-row my-5 justify-between rounded-full'>
                    <Link href={'/creator_single_profile_id'}>
                        {creator_img?.length > 0 && creator_img.slice(0, 1).map((item, index) => (
                            <div
                                className=' my-2 ms-3 w-100 rounded-full flex flex-row justify-evenly cursor-pointer'
                                key={index}
                            >
                                <Image
                                    src={item ? item?.profile_pic : Images.notification}
                                    width={35}
                                    height={30}
                                    alt=""
                                />

                            </div>
                        ))}
                    </Link>

                    <div className='flex  flex-row items-center justify-end text-right block rounded-md w-full outline-none text-gray-700 leading-tight'
                    >
                        <div>
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
                            // onClick={() => setDropdown_menu(!dropdown_menu)}
                            onClick={toggleDropdown}
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
                                    onClick={() => setIsModalOpen_terms_service(true)}
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
                <div className=' text-center my-10'>

                    {creator_img?.length > 0 && creator_img.slice(0, 1).map((item, index) => (

                        <div
                            className=' my-2 ms-3 w-100 rounded-full flex flex-row justify-evenly cursor-pointer'
                            key={index}
                        >
                            {item?.user?.name}

                        </div>

                    ))}

                    <Link href={'/creator_edit_form'}>
                        <div className='w-100 rounded-full bg-slate-800 text-white py-1 cursor-pointer'

                        >
                            <button

                            >
                                Edit
                            </button>
                        </div>
                    </Link>

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