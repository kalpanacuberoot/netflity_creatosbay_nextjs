import Colors from "@/styles/Colors"
import Left_Dashboard from "../Homepage/leftDashboard"
import Images from "@/images";
import Image from "next/image";
import Date_range_picker from "../Invoicepage/daterangepicker";
import Creator_table from "./Creator_table";
import Buttons from "../Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { url } from "@/generalfunctions";
import Modal_Creators_details_form from "./Modal_Creators_details_form";
import Creators_form_content from "./Modal_Creators_details_form/Creators_form_content";
import Creator_invoice_pdf_page from "../Invoicepage/Creator_invoice_pdf";

const Creator_Amountpage = () => {

    const router = useRouter();

    const [campaigndata, setCampaigndata] = useState(null);
    const [isModalOpenlogout, setIsModalOpenlogout] = useState(false);
    const [totalAmount, setTotalAmount] = useState(Cookies.get('all_creator_amount'));
    // const [creatorTotalAmount, setCreatorTotalAmount] = useState(0);


    const getCompanyCraetors = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        const campaign_id = JSON.parse(Cookies.get('campaign_id'));
        const creator_id = Cookies.get('creator_id');
        const creator_profile_id = Cookies.get('creator_profile_id');

        let creatorId = null;

        if (creator_id) {
            try {
                creatorId = JSON.parse(brand_detail);
            } catch (error) {
                console.error('Error parsing brand_detail:', error);
            }
        }

        if (!creatorId && creator_profile_id) {
            try {
                creatorId = JSON.parse(brandIds);
            } catch (error) {
                console.error('Error parsing brand_ids:', error);
            }
        }
        console.log('creator_profile_id:', creator_profile_id);
        // const creator_id = JSON.parse(Cookies.get('creator_id'));
        // console.log("creator_id campaign_id", creator_id, campaign_id);

        try {
            const response = await fetch(`${url}/campaigns/${campaign_id}`, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },

            });

            console.log('campaigns reposne  response------', response)

            if (response.ok) {
                const result = await response.json();
                console.log("campaigns creator amount result------------", result?.data);
                setCampaigndata(result?.data)
            } else {
                console.error('Error:', response?.statusText);

            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getCompanyCraetors();
    }, []);

    const handleSubmit = () => {
        // router.push('/payment_gateway')  
        setIsModalOpenlogout(true)
    }

    // console.log("creatorTotalAmount",creatorTotalAmount);

    const selectedCreatorIds = [2, 1]; // The array of creator_id values to match

    const filteredCreators = campaigndata?.creators?.filter((creator) => {
        return selectedCreatorIds.includes(creator.creator_id);
    });

    console.log("filteredCreators", filteredCreators);

    // Check if filteredCreators is defined and not null
    if (filteredCreators && filteredCreators.length > 0) {
        // Initialize a variable to store the total amount
        let totalCreatorAmount = 0;

        // Iterate through the filteredCreators array and calculate the total amount
        filteredCreators.forEach((creator_item) => {
            const creatorAmount = (creator_item?.image_count || 0) * 500 + (creator_item?.video_count || 0) * 500;
            totalCreatorAmount += creatorAmount;
        });

        Cookies.set('all_creator_amount',totalCreatorAmount)

        // Now, the variable 'totalAmount' contains the total amount for all creators
        console.log('Total Amount for All Creators:', totalCreatorAmount);
    } else {
        console.log('No creators found or filteredCreators is undefined.');
    }


    console.log('Total Amount for All Creators:adasd', totalAmount);

    const usageChargePercent = 15;
    const gstRate = 18;

    const calculateAmountWithGST = (amount) => {
        const gstAmount = (amount * gstRate) / 100;
        return amount + gstAmount;
    };

    const firstAmount = totalAmount / 2;
    const secondAmount = totalAmount / 2;
    const firstAmountWithGST = calculateAmountWithGST(firstAmount);

    // Cookies.set('firstAmountWithGST', firstAmountWithGST);
    const secondAmountWithGST = calculateAmountWithGST(secondAmount);

    const refundAmount = usageChargePercent * totalAmount / 100;

    return (
        <>

            <Modal_Creators_details_form isOpen={isModalOpenlogout} onClose={() => setIsModalOpenlogout(false)}>

                <div className="relative w-full max-w-2xl max-h-full">

                    <Creators_form_content />
                </div>

            </Modal_Creators_details_form>
            <div
                className="flex container_invoice container w-full"
                style={{ backgroundColor: Colors.button_light_clr }}
            >
                <div
                    className="auto-cols-max  px-5 py-5 border w-1/5"
                    style={{ backgroundColor: Colors.white_clr }}
                >
                    <Left_Dashboard />
                </div>
                {/* top section */}
                <div className="m-2 w-full auto-cols-max ">
                    {/* <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
                        className="auto-cols-max  p-3 rounded-md flex flex-row grid grid-cols-3"
                    >

                        <div className="text-white shadow-md rounded-md mx-3 p-4">
                            <div className="font_size_31">
                                Overdue
                                <div className="flex flex-row justify-between items-center">
                                    <h1>157</h1>
                                    <Image
                                        src={Images.overdue_icon}
                                        width={50}
                                        height={50}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-white shadow-md rounded-md mx-3 p-4">
                            <div className="font_size_31">
                                Paid
                                <div className="flex flex-row justify-between items-center">
                                    <h1>02</h1>
                                    <Image
                                        src={Images.overdue_icon}
                                        width={50}
                                        height={50}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-white shadow-md rounded-md mx-3 p-4">
                            <div className="font_size_31">
                                Unpaid
                                <div className="flex flex-row justify-between items-center">
                                    <h1>57</h1>
                                    <Image
                                        src={Images.overdue_icon}
                                        width={50}
                                        height={50}
                                        alt="" />
                                </div>
                            </div>
                        </div>



                    </div> */}
                    {/* invoices data */}
                    <div style={{ backgroundColor: Colors.white_clr }}
                        className="rounded-md container-fluid h-screen p-5 my-2 flex flex-col justify-between min-h-screen overflow-y-auto"
                    >
                        <div className="font_size_31 p-10">
                            {campaigndata?.name}
                            <div className="py-5">

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg border">
                                    <table className="text-center w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="border-b border-gray-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr className="font_size_17">
                                                <th scope="col" className="px-6 py-5">
                                                    Creator Name
                                                </th>
                                                <th scope="col" className="px-6 py-5">
                                                    unit price image
                                                </th>
                                                <th scope="col" className="px-6 py-5">
                                                    Images
                                                </th>
                                                <th scope="col" className="px-6 py-5">
                                                    unit price video
                                                </th>
                                                <th scope="col" className="px-6 py-5">
                                                    Videos
                                                </th>
                                                <th scope="col" className="px-6 py-5">
                                                    Payout
                                                </th>
                                                <th scope="col" className="px-6 py-5">
                                                    Actions
                                                </th>

                                            </tr>

                                        </thead>
                                        {/* {campaigndata?.creators?.length > 0 ? campaigndata?.creators.map((creator_item, index) => {

                                            const creatorAmount = (creator_item?.image_count || 0) * 500 + (creator_item?.video_count || 0) * 500;

                                            console.log('creatorAmount', creatorAmount);

                                            const currentTotalAmount = creatorAmount[creator_item.creator_id] || 0;

                                            console.log('currentTotalAmount', currentTotalAmount);

                                            // setTotalAmount((prevTotal) => prevTotal + creatorAmount); // Update total amount
                                            // Update the total amount for this creator_id
                                            setTotalAmount((prevTotalAmounts) => ({
                                                ...prevTotalAmounts,
                                                [creator_item.creator_id]: currentTotalAmount + creatorAmount,
                                            }));

                                            return (
                                                <tbody key={index}>
                                                    {Object.keys(totalAmount).map((creatorId) => (
                                                        <div key={creatorId}>
                                                            Creator ID: {creatorId}, Total Amount: {totalAmount[creatorId]}
                                                        </div>
                                                    ))}


                                                    {/* <Creator_table creatorData={creator_item} T={console.log("creator_item", creator_item)} /> */}
                                        {/* <div>Total Amount for All Creators: {totalAmount}</div>
                                                </tbody>

                                            )
                                        })
                                            :
                                            "No Creator is found"
                                        // } */}

                                        {filteredCreators?.length > 0 ? filteredCreators.map((creator_item, index) => {

                                            const creatorAmount = (creator_item?.image_count || 0) * 500 + (creator_item?.video_count || 0) * 500;

                                            // setTotalAmount((prevTotal) => prevTotal + creatorAmount); // Update total amount

                                            console.log('creatorAmount', creatorAmount);

                                            return (
                                                <>
                                                    <tbody key={index}>
                                                        <Creator_table creatorData={creator_item} />
                                                    </tbody>
                                                </>
                                            )
                                        })
                                            :
                                            "No Creator is found"
                                        }



                                    </table>
                                </div>


                            </div>
                            <div className="invoice-total text-base mt-5">

                                <table className="ms-auto">
                                    <tr>
                                        <th>Sub Total :</th>
                                        <td>{totalAmount}.00</td>
                                    </tr>
                                    <tr>
                                        <th>First Amount :</th>
                                        <td>{firstAmount}.00</td>
                                    </tr>
                                    <tr>
                                        <th>GST (18%) :</th>
                                        <td> {calculateAmountWithGST(firstAmount) - firstAmount}.00</td>
                                    </tr>
                                    <tr className="font-bold" style={{ color: Colors.pink_clr }}>
                                        <th>Total Amount :</th>
                                        <td>{firstAmountWithGST}.00</td>
                                    </tr>


                                </table>



                            </div>
                        </div>


                        {/* <Creator_invoice_pdf_page /> */}

                        {/* <div>
                            <h1>Total Amount: {totalAmount}</h1>
                            <h2>First Amount:</h2>
                            <p>Base Amount: {firstAmount}</p>
                            <p>GST ({gstRate}%): {calculateAmountWithGST(firstAmount) - firstAmount}</p>
                            <p>Total: {firstAmountWithGST}</p>
                            <h2>Second Amount:</h2>
                            <p>Base Amount: {secondAmount}</p>
                            <p>GST ({gstRate}%): {calculateAmountWithGST(secondAmount) - secondAmount}</p>
                            <p>Total: {secondAmountWithGST}</p>
                            <button onClick={() => console.log('Accept')} >Accept</button>
                            <button onClick={() => console.log('Reject')} >Reject</button>
                            <h2>Refund Amount:</h2>
                            <p>{refundAmount}</p>
                        </div> */}
                        <div className=" my-5  ms-auto mb-10 text-xl">
                            <Buttons
                                label={"Continue"}
                                buttoncss={"bottom-0 py-3 px-5 "}
                                // onClick={() => router.push('/payment_gateway')}
                                onClick={() => handleSubmit()}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Creator_Amountpage