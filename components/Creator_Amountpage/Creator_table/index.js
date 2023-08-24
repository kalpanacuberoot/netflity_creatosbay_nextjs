import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"

const Creator_table = ({ creatorData }) => {
    console.log("creatorData table", creatorData?.id);
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <h4> Mishi</h4>

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