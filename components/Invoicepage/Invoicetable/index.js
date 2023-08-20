import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"

const Invoice_Table = () => {
    return (
        <>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border">
                <table className="text-center w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="border-b border-gray-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr className="font_size_17">
                            <th scope="col" className="px-6 py-5">
                                Campaign Name
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Months
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Unique ID
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Payout
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Credited On
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Download
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th> */}
                        </tr>
                        
                    </thead>
                    
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <h4> Jhon Smith</h4>
                                <div className="font_size_14">smith@gmail.com</div>
                            </th>
                            <td className="px-6 py-4">
                                June
                            </td>
                            <td className="px-6 py-4">
                                #WE234345
                            </td>
                            <td className="px-6 py-4">
                                6000.00
                            </td>
                            <td className="px-8 py-4 text-red-600 " style={{}}>
                                <div style={{ background: Colors.credited_date }}
                                    className="rounded-full p-1   flex flex-row items-center justify-center">
                                    <Image
                                        src={Images.circle_icon}
                                        alt=""
                                        width={6}
                                        height={6}
                                        className="me-3"
                                    />
                                    12/06/23
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <Image
                                    src={Images.download_icon}
                                    width={40}
                                    height={40}
                                    alt=""
                                    className="mx-auto"
                                />
                            </td>
                            {/* <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td> */}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <h4> Jhon Smith</h4>
                                <div className="font_size_14">smith@gmail.com</div>
                            </th>
                            <td className="px-6 py-4">
                                June
                            </td>
                            <td className="px-6 py-4">
                                #WE234345
                            </td>
                            <td className="px-6 py-4">
                                6000.00
                            </td>
                            <td className="px-8 py-4 text-red-600 " style={{}}>
                                <div style={{ background: Colors.credited_date }}
                                    className="rounded-full p-1   flex flex-row items-center justify-center">
                                    <Image
                                        src={Images.circle_icon}
                                        alt=""
                                        width={6}
                                        height={6}
                                        className="me-3"
                                    />
                                    12/06/23
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <Image
                                    src={Images.download_icon}
                                    width={40}
                                    height={40}
                                    alt=""
                                    className="mx-auto"
                                />
                            </td>
                            {/* <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td> */}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <h4> Jhon Smith</h4>
                                <div className="font_size_14">smith@gmail.com</div>
                            </th>
                            <td className="px-6 py-4">
                                June
                            </td>
                            <td className="px-6 py-4">
                                #WE234345
                            </td>
                            <td className="px-6 py-4">
                                6000.00
                            </td>
                            <td className="px-8 py-4 text-red-600 " style={{}}>
                                <div style={{ background: Colors.credited_date }}
                                    className="rounded-full p-1   flex flex-row items-center justify-center">
                                    <Image
                                        src={Images.circle_icon}
                                        alt=""
                                        width={6}
                                        height={6}
                                        className="me-3"
                                    />
                                    12/06/23
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <Image
                                    src={Images.download_icon}
                                    width={40}
                                    height={40}
                                    alt=""
                                    className="mx-auto"
                                />
                            </td>
                            {/* <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td> */}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <h4> Jhon Smith</h4>
                                <div className="font_size_14">smith@gmail.com</div>
                            </th>
                            <td className="px-6 py-4">
                                June
                            </td>
                            <td className="px-6 py-4">
                                #WE234345
                            </td>
                            <td className="px-6 py-4">
                                6000.00
                            </td>
                            <td className="px-8 py-4 text-red-600 " style={{}}>
                                <div style={{ background: Colors.credited_date }}
                                    className="rounded-full p-1   flex flex-row items-center justify-center">
                                    <Image
                                        src={Images.circle_icon}
                                        alt=""
                                        width={6}
                                        height={6}
                                        className="me-3"
                                    />
                                    12/06/23
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <Image
                                    src={Images.download_icon}
                                    width={40}
                                    height={40}
                                    alt=""
                                    className="mx-auto"
                                />
                            </td>
                            {/* <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td> */}
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Invoice_Table