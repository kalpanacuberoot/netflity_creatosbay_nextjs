
import ModalHeader from "@/components/Homepage/ModalHeader";
import { useState } from "react";

const Onbording_content = ({ tabs, onClose, isOpen }) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const content = tabs[activeTab].content;

 
    const textContent = content.props.children;

   
    const isSkipButtonPresent = typeof textContent === 'string' && textContent.includes('Skip');

    // const isSkipButtonPresent = typeof tabs[activeTab].content === 'string' && tabs[activeTab].content.trim().includes('Skip');

    const handleNextClick = () => {
        if (activeTab < tabs.length - 1) {
            setActiveTab(activeTab + 1);

        } else {

            if (isSkipButtonPresent) {
               
                onClose();
            }
        }
    };
    console.log("skipButtonPresent====1", isSkipButtonPresent, tabs[activeTab].content);

    if (!isOpen) return null;

    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <ModalHeader />

                <div className="space-y-6 container-fluid p-14">
                    <div className="border rounded-lg p-10  text-center shadow-lg">
                        <div className="flex items-center justify-between relative ">
                            <div className=" border border-3 border-zinc-300 absolute w-full"></div>
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTabClick(index) || onClose(index)}
                                    className={`relative px-2 py-2  my-3 rounded-md ${activeTab === index ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4">
                            <div className="mb-4"
                                onClick={handleNextClick}
                            > {tabs[activeTab].content}</div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Onbording_content