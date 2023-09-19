// components/Dashboard.js
import Images from '@/images';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Home from './home';
import Live_Campaign from './live_campaign';
import Communication_page from '@/components/Communication_page';
import Marketplace from './marketplace';
import Invoice from './invoice';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Terms_of_service from '@/components/Homepage/Termsofservice';
import Terms_of_service_content from '@/components/Homepage/Termsofservice/Terms_of_service_content';
import Modal_logout from '@/components/Homepage/Modal_logout';
import Logout_content from '@/components/Homepage/Modal_logout/Logout_content';
import Modal_Invite_members from '@/components/Homepage/Modal_Invite_members';
import Invite_members_content from '@/components/Homepage/Modal_Invite_members/Invite_members_content';
import Modal_Edit_Profile from '@/components/Homepage/Modal_Edit_Profile';
import Edit_profile_content from '@/components/Homepage/Modal_Edit_Profile/Edit_profile_content';
import Notification_popup from '@/components/Homepage/Notification_popup';
import Notification_content from '@/components/Homepage/Notification_popup/Notification_content';
import Modal_change_password from '@/components/Homepage/Modal_change_password';
import Change_password_content from '@/components/Homepage/Modal_change_password/Change_password_content';
import { url } from '@/generalfunctions';
import Campaign_infopage from '@/components/Campaign_infopage';
// import fetch from 'node-fetch';

// globalThis.fetch = fetch;

const tabs = ['Home', 'Campaign', 'Marketplace', 'Chats', 'Invoice'];

const Brand_home = () => {

  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

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

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Home />;
      case 1:
        return <Live_Campaign />;
      case 2:
        return <Marketplace />;
      case 3:
        return <Communication_page />;
      case 4:
        return <Invoice />;
       
      default:
        return null;
    }
  };

  const onSwitchBrand = (item, index) => {
    console.log("onSwitchBrand", item, index);
    // JSON.stringify(Cookies.set('brand_detail',item))
    const new_user_name = Cookies.set('brand_detail', JSON.stringify(item), { expires: 106500 });
    setCookie_user_brand(new_user_name);
    router.reload();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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


  return (
    <>
      <div className=''>
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
        <div className="flex flex-row justify-between m-0">
          {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}
          <div className='flex flex-col p-10 m-0 '>
            <div className='my-10'>
              <Image
                src={Images.company_logo}
                width={100} height={100}
                alt=""
                className=' mx-auto'
              />
            </div>
            <div className='border relative flex flex-row justify-between rounded-full ' ref={dropdownRef && settingdropdownRef}>
              {brand_user?.length > 0 && brand_user.map((item, index) => {
                // const isCurrent = item.isCurrent;
                // const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                // console.log("isCurrent left dashboard", isCurrent);
                return (

                  <div
                    className=' my-2 ms-3 w-100 rounded-full flex flex-row justify-evenly cursor-pointer'
                    // className='py-1 my-2 ps-3 w-100 rounded-full border button_clr flex flex-row justify-evenly'
                    key={index}
                  >
                    <Image
                      src={item?.brand?.logo}
                      width={35}
                      height={30}
                      alt=""
                      onClick={toggleDropdown}
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
                      console.log("isCurrent left dashboard", isCurrent, cookie_user_brand?.brand?.id);
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
                {/* <Image
                        src={Images.dropdown_icon}
                        width={20}
                        height={5}
                        className='my-2 mx-1'
                        alt=""settings
                    /> */}

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
                      // onClick={() => setIsModalOpenlogout(true)}
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
                      {/* <button
                                    className=' w-48 dropdown_text text-center'
                                >
                                    
                                </button> */}
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

              {cookie_user_brand && (
                <h4 className='font-bold my-5'>{cookie_user_brand?.name || cookie_user_brand?.brand?.name}</h4>
              )}
              {/* <h5 className='px-2 mb-2'>Neque orro quisquam est qui dolorem</h5> */}
              <div className='w-100 rounded-full bg-slate-800 text-white py-1 cursor-pointer'
                onClick={() => setIsModalOpen_edit_prof(true)}
              >
                <button

                >
                  Edit
                </button>
              </div>

            </div>
            <div className="flex flex-col space-y-4">
              {tabs?.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`${activeTab === index
                    ? ''
                    : ''
                    } flex items-center px-10 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out`}
                >

                  {/* Add the icon component here */}
                  {index === 0 &&
                    <Image
                      src={Images.home_icon}
                      width={25}
                      className='me-5 '
                      alt=""
                    />
                  } {/* Example: Home icon */}
                  {index === 1 &&
                    <Image
                      src={Images.campaign_icon}
                      width={25}
                      className='me-5 '
                      alt=""
                    />
                  } {/* Example: Activity icon */}
                  {index === 2 &&
                    <Image
                      src={Images.market_place_icon}
                      width={25}
                      className='me-5 '
                      alt=""
                    />
                  } {/* Example: Settings icon */}
                  {index === 3 &&
                    <Image
                      src={Images.chats_icon}
                      width={25}
                      className='me-5 '
                      alt=""
                    />
                  }
                  {index === 4 &&
                    <Image
                      src={Images.invoices_icon}
                      width={25}
                      className='me-5 '
                      alt=""
                    />
                  }

                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className=" w-full ">
            {renderTabContent()}
            {/* <Home /> */}
          </div>
        </div>

      </div>
    </>

  );
}

export default Brand_home;
