import Image from 'next/image';
// import company_logo from '../../images/logo_.png';
import Images from '@/images';
import Colors from '@/styles/Colors';
import styled from "styled-components";
import { useState } from 'react';
import Right_side_Dashboard from './rightDashboard';
import Left_Dashboard from './leftDashboard';
import Link from 'next/link';


const Homepage = () => {

    const [home_icon, setHome_icon] = useState(false);

    const [cardfirstshowmore, setCardfirstshowmore] = useState(false);
    const [cardsecondshowmore, setCardsecondshowmore] = useState(false);
    const [cardthirdshowmore, setCardthirdshowmore] = useState(false);
    const [cardfourthshowmore, setCardfourthshowmore] = useState(false);

    const [dropdown_menu, setDropdown_menu] = useState(false);
    return (


        <div

            className="flex"
            style={{ backgroundColor: Colors.button_light_clr }}
        >
            <div
                className='auto-cols-max w-96 px-3 py-5 border'
                style={{ backgroundColor: Colors.white_clr }}
            >

                <Left_Dashboard />
            </div>
            <div
                // className="grid grid-flow-col border w-100 px-3"
                className='w-full auto-cols-max me-3 ps-5 rounded-md'

            >
                <div className='my-4 ps-3 rounded-md' style={{ backgroundColor: Colors.white_clr }}>
                    <div className='flex flex-row  w-full justify-between'>
                        <div className='flex flex-col w-full justify-evenly'>
                            <div className='home_title'>Welcome to <small className='golden_home_title'>Creators</small> bay</div>
                            {/* <div className='home_title'>Welcome to Creators bay</div> */}
                            <h3>Your content is just a click away !</h3>
                            <Link href={'/campaign_info'}>
                                <button className='start_campaign_btn px-5 py-1 rounded-full w-48'>
                                    Start Campaign
                                </button>
                            </Link>
                        </div>
                        <Image

                            src={Images.home_title_bg}
                            width={200}
                            height={100}
                            alt=""
                            className=''
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-evenly py-4 rounded-md flex-wrap' style={{ backgroundColor: Colors.white_clr }}>
                    <div className='w-96 my-2'>
                        <div className='relative'>
                            <Image

                                src={Images.card_img}
                                width={500}
                                height={100}
                                alt=""
                                className=' mx-auto'
                            />
                            <Image

                                src={Images.reel_creator_card}
                                width={50}
                                height={50}
                                alt=""
                                className='reel_creator_card mx-auto'

                            />
                        </div>
                        <div className='px-5 py-5 border rounded-b-lg'>
                            <div className='flex flex-row justify-between items-end mt-4'>
                                <h4 className=' '>Reels creators</h4>
                                <div className='flex flex-row items-center px-3 rounded-md' style={{ backgroundColor: Colors.delay_clr }}>
                                    <Image

                                        src={Images.clock}
                                        width={12}
                                        height={10}
                                        alt=""
                                        className='me-2'

                                    />
                                    <h6>Delay</h6>
                                </div>
                            </div>
                            <h2 className='font-bold'>Ant Studio llp</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                {cardfirstshowmore && <> Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry......</>}
                                <p className='text-red-600'
                                    onClick={() => setCardfirstshowmore(!cardfirstshowmore)}>{cardfirstshowmore ? "Less More" : "Read More"}
                                </p>

                            </p>
                            <div className='px-5 border py-3 rounded-md text-center  mt-2'>
                                <h6>04/06/2023</h6>
                                <div className='w-100 rounded-full border edit_button_clr py-1'>
                                    <buttton> Check Details</buttton>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-96 my-2'>
                        <div className='relative'>
                            <Image

                                src={Images.card_img}
                                width={500}
                                height={100}
                                alt=""
                                className=' mx-auto'
                            />
                            <Image

                                src={Images.reel_creator_card}
                                width={50}
                                height={50}
                                alt=""
                                className='reel_creator_card mx-auto'

                            />
                        </div>
                        <div className='px-5 py-5 border rounded-b-lg'>
                            <div className='flex flex-row justify-between items-end mt-4'>
                                <h4 className=' '>Reels creators</h4>
                                <div className='flex flex-row items-center px-3 rounded-md' style={{ backgroundColor: Colors.active_clr }}>
                                    <Image

                                        src={Images.clock}
                                        width={12}
                                        height={10}
                                        alt=""
                                        className='me-2'

                                    />
                                    <h6>Active</h6>
                                </div>
                            </div>
                            <h2 className='font-bold'>Ant Studio llp</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                {cardsecondshowmore && <> Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry......</>}
                                <p className='text-red-600'
                                    onClick={() => setCardsecondshowmore(!cardsecondshowmore)}>{cardsecondshowmore ? "Less More" : "Read More"}
                                </p>

                            </p>
                            <div className='px-5 border py-3 rounded-md text-center  mt-2'>
                                <h6>04/06/2023</h6>
                                <div className='w-100 rounded-full border edit_button_clr py-1'>
                                    <buttton> Check Details</buttton>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-96 my-2'>
                        <div className='relative'>
                            <Image

                                src={Images.card_img}
                                width={500}
                                height={100}
                                alt=""
                                className=' mx-auto'
                            />
                            <Image

                                src={Images.reel_creator_card}
                                width={50}
                                height={50}
                                alt=""
                                className='reel_creator_card mx-auto'

                            />
                        </div>
                        <div className='px-5 py-5 border rounded-b-lg'>
                            <div className='flex flex-row justify-between items-end mt-4'>
                                <h4 className=' '>Reels creators</h4>
                                <div className='flex flex-row items-center px-3 rounded-md' style={{ backgroundColor: Colors.pending_clr }}>
                                    <Image

                                        src={Images.clock}
                                        width={12}
                                        height={10}
                                        alt=""
                                        className='me-2'

                                    />
                                    <h6>Pending</h6>
                                </div>
                            </div>
                            <h2 className='font-bold'>Ant Studio llp</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                {cardthirdshowmore && <> Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry......</>}
                                <p className='text-red-600'
                                    onClick={() => setCardthirdshowmore(!cardthirdshowmore)}>{cardthirdshowmore ? "Less More" : "Read More"}
                                </p>

                            </p>
                            <div className='px-5 border py-3 rounded-md text-center  mt-2'>
                                <h6>04/06/2023</h6>
                                <div className='w-100 rounded-full border edit_button_clr py-1'>
                                    <buttton> Check Details</buttton>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-96 my-2'>
                        <div className='relative'>
                            <Image

                                src={Images.card_img}
                                width={500}
                                height={100}
                                alt=""
                                className=' mx-auto'
                            />
                            <Image

                                src={Images.reel_creator_card}
                                width={50}
                                height={50}
                                alt=""
                                className='reel_creator_card mx-auto'

                            />
                        </div>
                        <div className='px-5 py-5 border rounded-b-lg'>
                            <div className='flex flex-row justify-between items-end mt-4'>
                                <h4 className=' '>Reels creators</h4>
                                <div className='flex flex-row items-center px-3 rounded-md' style={{ backgroundColor: Colors.delay_clr }}>
                                    <Image

                                        src={Images.clock}
                                        width={12}
                                        height={10}
                                        alt=""
                                        className='me-2'

                                    />
                                    <h6>Delay</h6>
                                </div>
                            </div>
                            <h2 className='font-bold'>Ant Studio llp</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                {cardfourthshowmore && <> Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry......</>}
                                <p className='text-red-600'
                                    onClick={() => setCardfourthshowmore(!cardfourthshowmore)}>{cardfourthshowmore ? "Less More" : "Read More"}
                                </p>

                            </p>
                            <div className='px-5 border py-3 rounded-md text-center  mt-2'>
                                <h6>04/06/2023</h6>
                                <div className='w-100 rounded-full border edit_button_clr py-1'>
                                    <buttton> Check Details</buttton>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div
                // className="grid grid-flow-col border"
                className='w-96 auto-cols-max rounded-md grid grid-cols-1 divide-y mt-4'

            >

                <Right_side_Dashboard />

            </div>

        </div>

    )
}


export default Homepage

const Buttonn = styled.button`
  background: '#CBD2E0';
  width: 200px;
  height: 50px;
  bordercolor: black;
  font-size: 24px;
  color: black;
  text-align: center;
  &:hover {
    background: black;
    color: white;
  }
`;

