import Image from 'next/image';
// import company_logo from '../../images/logo_.png';
import Images from '@/images';
import Colors from '@/styles/Colors';
import styled from "styled-components";


const Homepage = () => {
    return (


        <div
            // className="grid grid-flow-row grid-cols-3 md:grid-cols-3"
            className="flex"
        >
            <div
                // className="grid grid-flow-col p-5 border bg-white w-80"
                className='auto-cols-max w-96 p-5 border'
            >

                <div>
                    <div className=''>
                        <Image
                            src={Images.company_logo}
                            width={100} height={100}
                            alt=""
                            className=' mx-auto'
                        />
                    </div>

                    <div className='border flex flex-row my-5 justify-between rounded-full pe-2'>

                        <Image
                            src={Images.profile_user}
                            width={40}
                            height={30}
                        />
                        <div className='flex flex-row'>
                            <Image
                                src={Images.notification}
                                width={20}
                                height={20}
                                className='my-2 mx-1'
                            />
                            <Image
                                src={Images.settings}
                                width={20}
                                height={30}
                                className='my-2 mx-1'
                            />
                            <Image
                                src={Images.dropdown_icon}
                                width={20}
                                height={5}
                                className='my-2 mx-1'
                            />
                        </div>
                    </div>
                    <div className=' text-center'>
                        <h4 className='font-bold'>Creatorbay Inc.</h4>
                        <h5>Neque orro quisquam est qui dolorem</h5>
                        <div className='w-100 rounded-full border edit_button_clr py-1'

                        >
                            <button
                            >
                                Edit
                            </button>
                        </div>

                    </div>
                    <div className='mt-5'>

                        <div className='items-center w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                        >
                            <Image
                                src={Images.home_icon}
                                width={22}
                                className='button_clr'
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Home
                            </button>
                        </div>
                        <div className=' my-5 w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                        >
                            <Image
                                src={Images.campaign_icon}
                                width={22}
                                className='button_clr'
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Campaign
                            </button>
                        </div>
                        <div className=' my-5 w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                        >
                            <Image
                                src={Images.market_place_icon}
                                width={22}
                                className='button_clr'
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Marketplace
                            </button>
                        </div>
                        <div className=' my-5 w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                        >
                            <Image
                                src={Images.chats_icon}
                                width={22}
                                className='button_clr'
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Chats
                            </button>
                        </div>
                        <div className=' my-5 w-100 rounded-full border button_clr py-1 flex flex-row justify-evenly'

                        >
                            <Image
                                src={Images.invoices_icon}
                                width={22}
                                className='button_clr'
                            />
                            <button
                                className='w-32 text-start'
                            >
                                Invoices
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                // className="grid grid-flow-col border w-100 px-3"
                className='w-full auto-cols-max mx-3 ps-5 rounded-md'
            >
                <div className='border mb-4'>
                    <div className='flex flex-row  w-full justify-between pb-3'>
                        <div className='flex flex-col w-full justify-evenly'>
                            <div className='home_title'>Welcome to <small className='golden_home_title'>Creators</small> bay</div>
                            {/* <div className='home_title'>Welcome to Creators bay</div> */}
                            <h3>Your content is just a click away !</h3>
                            <button className='start_campaign_btn px-5 py-1 rounded-full w-48'>Start Campaign</button>
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
                <div className='border'>
                    <div className='border rounded-b-lg w-96'>
                        <div className='relative border'>
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
                        <div className='px-5 py-5 '>
                            <h4 className='mt-4'>Reels creators</h4>
                            <h2 className='font-bold'>Ant Studio llp</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry......
                                <div className='text-red-600'>Read More</div>
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
                className='w-96 border auto-cols-max'
            >
                <div>
                    <h2>Top Creators</h2>
                    <div className=' px-2 border'>
                        <div className='flex flex-row justify-between items-center'>
                            <h6>Amrish patel</h6>
                            <div className=''>
                                <div className='flex flex-row justify-evenly w-32 items-center'>
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.fill_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <Image

                                        src={Images.empty_star}
                                        width={12}
                                        height={5}
                                        alt=""
                                        className=''

                                    />
                                    <h6>4.5</h6>
                                </div>

                            </div>


                        </div>
                        <div className='flex flex-row items-center flex-wrap'>
                            
                            <Image
                                src={Images.profile_user}
                                width={40}
                                height={30}
                            />
                           
                            <div>
                                <h6 className='creator_top px-3 rounded-full'>#unplugged</h6>
                            </div>
                            <div>
                                <h6 className='creator_top px-3 rounded-full'>#unplugged</h6>
                            </div>
                            <div>
                                <h6 className='creator_top px-3 rounded-full'>#go</h6>
                            </div>
                            <div>
                                <h6 className='creator_top px-3 rounded-full'>#livemusic</h6>
                            </div>

                        </div>
                    </div>
                </div>
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

