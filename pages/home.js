import { useEffect, useState } from "react";
import Homepage from "@/components/Homepage"
import Tab1 from "@/components/userAuth/Modal_onboarding_screens/Tab1";
import Tab2 from "@/components/userAuth/Modal_onboarding_screens/Tab2";
import Tab3 from "@/components/userAuth/Modal_onboarding_screens/Tab3";
import Modal_onboarding_screens from "@/components/userAuth/Modal_onboarding_screens";
import Onbording_content from "@/components/userAuth/Modal_onboarding_screens/Onbording_content";
import Cookies from "js-cookie";


const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      const hasSeenModal = Cookies.get('hasSeenHomeModal');
  
      if (!hasSeenModal) {
        setIsModalOpen(true);

        Cookies.set('hasSeenHomeModal', true, { path: '/' });
      }
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
            <Modal_onboarding_screens isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="relative w-full max-w-4xl max-h-full min-w-xl min-h-0">

                    <Onbording_content tabs={tabs} isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </Modal_onboarding_screens>
            <Homepage />
        </>
    )
}

export default Home