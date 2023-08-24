import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"

const Creator_table = () => {
    return (
        <>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border">
                <table className="text-center w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="border-b border-gray-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr className="font_size_17">
                            <th scope="col" className="px-6 py-5">
                                Creator Name
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Video
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Payout
                            </th>

                        </tr>

                    </thead>

                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <h4> Mishi</h4>

                            </th>
                            <td className="px-6 py-4">
                                0
                            </td>
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                6000.00
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Creator_table