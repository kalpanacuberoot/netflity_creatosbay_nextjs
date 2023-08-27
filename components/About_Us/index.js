import Images from "@/images"
import Image from "next/image"
import Buttons from "../Button"

const About_Us = () => {
    return (
        <>
            <div className="block md:flex  items-center p-2">
                <div className="p-0 mx-5 w-full md:w-5/12">
                    <h1 className="text-5xl font-bold">We’re changing the way people connect.</h1>
                    <p className="mt-5 text-lg text-gray-500">
                        Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
                    </p>
                    <div className="w-64">
                        <Buttons
                            label={"Get Started"}
                            buttoncss={"py-3 my-5 w-auto"}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center w-full md:w-7/12">
                    <div className="px-3">
                        <Image
                            src={Images.c}
                            alt=""
                            width="" className="py-3 h-60 object-cover rounded-3xl"
                        />
                    </div>
                    <div className="px-3">
                        <Image
                            src={Images.c}
                            alt=""
                            width=""
                            className="py-3 h-60 object-cover rounded-3xl"
                        />
                        <Image
                            src={Images.c}
                            alt=""
                            width=""
                            className="py-3 h-60 object-cover rounded-3xl"
                        />
                    </div>
                    <div className="px-3">
                        <Image
                            src={Images.c}
                            alt=""
                            width=""
                            className="py-3 h-60 object-cover rounded-3xl"
                        />
                        <Image
                            src={Images.c}
                            alt=""
                            width=""
                            className="py-3 h-60 object-cover rounded-3xl"
                        />
                        <Image
                            src={Images.c}
                            alt=""
                            width=""
                            className="py-3 h-60 object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_Us