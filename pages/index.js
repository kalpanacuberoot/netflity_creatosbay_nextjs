/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Home from '@/components/Home';
import Layout from '@/components/Layout';
import Splash_screen_slider from '@/components/splash_screen_slider';
import Modal_onboarding_screens from '@/components/userAuth/Modal_onboarding_screens';
import Onbording_content from '@/components/userAuth/Modal_onboarding_screens/Onbording_content';
import Tab1 from '@/components/userAuth/Modal_onboarding_screens/Tab1';
import Tab2 from '@/components/userAuth/Modal_onboarding_screens/Tab2';
import Tab3 from '@/components/userAuth/Modal_onboarding_screens/Tab3';
import Cookies from "js-cookie";


const index = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const hasSeenModal = Cookies.get('hasSeenModal');

    if (!hasSeenModal) {
      setIsModalOpen(true);

      // Set a cookie to indicate that the user has seen the modal
      Cookies.set('hasSeenModal', true, { path: '/' });
    }
    // openModal();
    // setIsModalOpen(true)
  }, [])

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const tabs = [
    {
      title: '',
      content: <Tab1  onSkipClick={closeModal}/>,
    },
    {
      title: '',
      content: <Tab2  onSkipClick={closeModal}/>,
    },
    {
      title: '',
      content: <Tab3 />,
    },
  ];


  return (
    <>

      {/* <Modal_onboarding_screens isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="relative w-full max-w-4xl max-h-full min-w-xl min-h-0">

          <Onbording_content tabs={tabs} isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </Modal_onboarding_screens> */}
      <div className=' container flex flex-row justify-between items-center'>
        <div className='auto-cols-max h-screen border children_layout'>
          <Layout>
            <Home />
          </Layout>
        </div>
        <div className='auto-cols-max h-screen splash_slider border w-3/8'>
          <Splash_screen_slider />
        </div>
      </div>


    </>
  )
}

export default index