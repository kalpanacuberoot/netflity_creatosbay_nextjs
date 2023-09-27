import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"
import Link from "next/link"
import Creator_Card from "./Creator_Card"

const Creator_Home = () => {
    return (
        <>
            <div className="flex w-full" style={{ backgroundColor: Colors.button_light_clr }}>

                <div
                    className="w-full auto-cols-max me-3 ps-5 rounded-md pb-3 "
                >
                    <div
                        className="my-4 ps-3 rounded-md"
                        style={{ backgroundColor: Colors.white_clr }}
                    >
                        <div className="flex flex-row  w-full justify-between">
                            <div className="flex flex-col w-full justify-evenly ps-10 pb-5">
                                <div className="home_title">

                                    Welcome to

                                    <span className="golden_home_title"> Creators</span>{" "}
                                    bay

                                </div>

                                <h3>Your content is just a click away !</h3>

                            </div>
                            <Image
                                src={Images.home_title_bg}
                                width={200}
                                height={100}
                                alt=""
                                className=""
                            />
                        </div>
                    </div>
                    <div
                        className="flex flex-row justify-evenly items-start p-5 rounded-md flex-wrap overflow-y-auto min-h-screen h-auto"
                        style={{ backgroundColor: Colors.white_clr }}
                    >
                        <Creator_Card />
                        <Creator_Card />
                        <Creator_Card />    

                        {/* <div className="relative p-10 w-full">
                            <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 font-bold">
                                            S.No.
                                        </th>
                                        <th scope="col" className="px-6 py-3 font-bold">
                                            Campaign name
                                        </th>
                                        <th scope="col" className="px-6 py-3 font-bold">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3 font-bold">
                                            No. of Creators
                                        </th>
                                        <th scope="col" className="px-6 py-3 font-bold">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            1
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            test
                                        </th>
                                        <td className="px-6 py-4">
                                            12-08-23 - 15-08-23
                                        </td>
                                        <td className="px-6 py-4">
                                            4
                                        </td>
                                        <td className="px-6 py-4">
                                            Draft
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            2
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            test
                                        </th>
                                        <td className="px-6 py-4">
                                            12-08-23 - 15-08-23
                                        </td>
                                        <td className="px-6 py-4">
                                            4
                                        </td>
                                        <td className="px-6 py-4">
                                            Draft
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            3
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            test
                                        </th>
                                        <td className="px-6 py-4">
                                            12-08-23 - 15-08-23
                                        </td>
                                        <td className="px-6 py-4">
                                            4
                                        </td>
                                        <td className="px-6 py-4">
                                            Draft
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}


                    </div>
                </div>

            </div >
        </>
    )
}

export default Creator_Home