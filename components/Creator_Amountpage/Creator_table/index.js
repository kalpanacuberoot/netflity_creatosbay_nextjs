import { url } from "@/generalfunation";
import Images from "@/images"
import Colors from "@/styles/Colors"
import Cookies from "js-cookie";
import Image from "next/image"
import { useEffect, useState } from "react";

const Creator_table = ({ creatorData }) => {

    const [creator_name,setCreator_name] = useState(null);
    console.log("creatorData table", creatorData?.id);

    const handleSubmit = async () => {

        const creator_id = JSON.parse(Cookies.get('creator_id'));
        console.log("creator_id campaign_id", creator_id);

        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue-----parsedData-------1', cookieValue?.token);

        try {

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/creators/${creator_id}`, {
                method: 'Get',
                headers: headers,

            });
            console.log('creator_details response:1 amount papge', response);
            if (response?.ok) {
                const responseData = await response.json();
                console.log('creator_details response: amount papge', responseData?.data);
                setCreator_name(responseData?.data)

                // Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });

                if (responseData.status) {
                    // toast.success('Brand Successfully Created', {
                    //     position: 'top-center',
                    //     autoClose: 5000,
                    // });

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

    useEffect(() => {
        handleSubmit();
    },[])

    console.log("creator_name",creator_name?.user?.name);

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <h4> {creator_name?.user?.name}</h4>

                </th>
                <td className="px-6 py-4">
                    {creatorData?.image_count}
                </td>
                <td className="px-6 py-4">
                    {creatorData?.video_count}
                </td>
                <td className="px-6 py-4">
                    6000.00
                </td>

            </tr>
        </>
    )
}

export default Creator_table