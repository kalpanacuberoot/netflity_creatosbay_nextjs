import Images from "@/images"
import Image from "next/image"

const Team = () => {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl  p-6 lg:px-8 border">
                {/* <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 border"> */}
                    <div className="max-w-2xl mb-5">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                    </div>

                    
                    <div className="flex flex-row  w-full flex-wrap justify-between gap-2 gap-y-10 ">
                        <div className="w-full md:w-3/12">
                            <Image
                                src={Images.communication_one}
                                alt=""
                            width={800}
                            height={700}
                            className=" w-full h-80 object-cover rounded-3xl "
                            />
                            {/* <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                            <div className="mt-5">
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                        <div className="w-full md:w-3/12">
                            <Image
                                src={Images.communication_two}
                                alt=""
                            width={800}
                            height={800}
                            className=" w-full h-80 object-cover rounded-3xl  "
                            />
                            {/* <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                            <div className="mt-5">
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                        <div className="w-full md:w-3/12">
                            <Image
                                src={Images.communication_two}
                                alt=""
                            width={800}
                            height={700}
                            className=" w-full h-80 object-cover rounded-3xl "
                            />
                            {/* <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                            <div className="mt-5">
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                        <div className="w-full md:w-3/12">
                            <Image
                                src={Images.communication_one}
                                alt=""
                            width={800}
                            height={700}
                            className=" w-full h-80 object-cover rounded-3xl "
                            />
                            {/* <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                            <div className="mt-5">
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                        <div className="w-full md:w-3/12">
                            <Image
                                src={Images.communication_two}
                                alt=""
                            width={800}
                            height={800}
                            className=" w-full h-80 object-cover rounded-3xl  "
                            />
                            {/* <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                            <div className="mt-5">
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                        <div className="w-full md:w-3/12">
                            <Image
                                src={Images.communication_two}
                                alt=""
                            width={800}
                            height={700}
                            className=" w-full h-80 object-cover rounded-3xl "
                            />
                            {/* <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                            <div className="mt-5">
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                        
                    </div>
                    {/* <!-- More people... --> */}

                </div>
            </div>
        </>
    )
}

export default Team