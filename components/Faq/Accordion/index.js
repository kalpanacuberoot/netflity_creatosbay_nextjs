import Images from "@/images";
import Colors from "@/styles/Colors";
import Image from 'next/image';
import React, { useState } from 'react';


const items = [
    {
        title: 'Whats the best thing about Switzerland?',
        content: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. ",
    },
    {
        title: "How do you make holy water?",
        content: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
    },
    {
        title: 'What do you call someone with no body and no nose?',
        content: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
    },
    {
        title: 'Whats the best thing about Switzerland?',
        content: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. ",
    },
    {
        title: "How do you make holy water?",
        content: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
    },
    {
        title: 'What do you call someone with no body and no nose?',
        content: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
    }, {
        title: 'Whats the best thing about Switzerland?',
        content: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. ",
    },
    {
        title: "How do you make holy water?",
        content: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
    },
    {
        title: 'What do you call someone with no body and no nose?',
        content: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
    },

    // Add more items as needed
];

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const closeAccordion = () => {
        setActiveIndex(null);
    };

    return (
        <div className=" px-8 w-full my-10">
            <h1 className="font-bold mb-8">Frequently asked questions</h1>
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        className="flex justify-between items-center w-full p-2 text-left edit_button_clr  border-b-2   hover:bg-opacity-40 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{item.title}</span>
                        {activeIndex === index ? (
                            <Image
                                src={Images.pink_plus_icon}
                                classNameName="h-8 w-auto"
                                alt=""
                                width={35}
                            />

                        ) : (<Image
                            src={Images.pink_plus_icon}
                            classNameName="h-8 w-auto"
                            alt=""
                            width={35}
                        />
                        )}
                    </button>
                    {activeIndex === index && (
                        <div className="p-2 bg-white">
                            {item.content}

                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
