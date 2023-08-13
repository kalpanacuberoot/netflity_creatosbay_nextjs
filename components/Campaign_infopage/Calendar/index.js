import Images from "@/images"
import Image from "next/image"

const Calendar = () => {
    return (
        <>
            {/* <!-- component -->
<!-- https://dribbble.com/shots/14959823-Dashboard-UI-Elements --> */}
            {/* <div className="h-screen  p-6"> */}
            <div className="px-6">
                

                <div className='items-center justify-evenly w-full flex bg-white justify-start md:justify-center rounded-lg mx-auto py-4 px-2 '>
                    <div className="">
                        <Image
                            src={Images.arrowleft_icon}
                            width={50}
                        />
                    </div>
                    <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Sun </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 11 </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> Aug </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Mon </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 12 </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> Aug </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Tue </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 13</p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> Aug </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex group bg-purple-600 shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16'>
                        <span className="flex h-3 w-3 absolute -top-1 -right-1">
                            {/* <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span> */}
                            {/* <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span> */}
                        </span>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-100 text-sm'> Wed </p>
                                <p className='text-gray-100  text-sm mt-3 font-bold'> 14 </p>
                                <p className='text-gray-100 text-sm font-bold'> Aug </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Thu </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 15 </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> Aug </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Fri </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 16 </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> Aug </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                        <div className='flex items-center px-4 py-4'>
                            <div className='text-center'>
                                <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Sat </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 17 </p>
                                <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> Aug </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={Images.arrowright_icon}
                            width={50}
                        />
                    </div>

                </div>

                
                <br /><br />

            </div>
        </>
    )
}
export default Calendar