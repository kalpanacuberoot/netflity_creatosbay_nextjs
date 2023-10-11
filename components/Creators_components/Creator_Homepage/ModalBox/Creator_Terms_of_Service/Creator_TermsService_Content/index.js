import Images from "@/images"
import Image from "next/image"
import Colors from "@/styles/Colors"
import Creator_Modal_Header from "../../Creator_Modal_Header"

const Creator_TermsService_Content = () => {
    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <Creator_Modal_Header/>

                <div className="p-10 space-y-6">
                    <h2 className="font-bold capitalize">Terms of services</h2>
                    <div className="popup_para_container">
                        <div className="popup_para font_size_20 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            👋 Hi I’m Ben Low, Lead Experience Designer based in Perth, Western Australia. Firstly, thanks for looking at this file! I’m stoked you’ve taken the time to explore it further. I hope you learn something new from it 🙌.

                            I’ve set myself a goal. To give back to the design community which I’ve learnt so much from over the past 10+ years. I am motivated to help you and others learn and upskill their UX/UI skills to take them to the next level 🚀.

                            I put in a lot of time and effort making simple design files that are well structured, leverage Figma’s updates and are easy for you change to suit your needs.

                            If you like this work, and want to see more, drop a ❤️ for this file in the Figma Community. If you’re feeling really generous, you can buy me a coffee @benlow244

                            For any new file suggestions, questions or feedback, follow me on twitter @benlow24.
                            👋 Hi I’m Ben Low, Lead Experience Designer based in Perth, Western Australia. Firstly, thanks for looking at this file! I’m stoked you’ve taken the time to explore it further. I hope you learn something new from it 🙌.

                            I’ve set myself a goal. To give back to the design community which I’ve learnt so much from over the past 10+ years. I am motivated to help you and others learn and upskill their UX/UI skills to take them to the next level 🚀.

                            I put in a lot of time and effort making simple design files that are well structured, leverage Figma’s updates and are easy for you change to suit your needs.

                            If you like this work, and want to see more, drop a ❤️ for this file in the Figma Community. If you’re feeling really generous, you can buy me a coffee @benlow244

                            For any new file suggestions, questions or feedback, follow me on twitter @benlow24.
                            👋 Hi I’m Ben Low, Lead Experience Designer based in Perth, Western Australia. Firstly, thanks for looking at this file! I’m stoked you’ve taken the time to explore it further. I hope you learn something new from it 🙌.

                            I’ve set myself a goal. To give back to the design community which I’ve learnt so much from over the past 10+ years. I am motivated to help you and others learn and upskill their UX/UI skills to take them to the next level 🚀.

                            I put in a lot of time and effort making simple design files that are well structured, leverage Figma’s updates and are easy for you change to suit your needs.

                            If you like this work, and want to see more, drop a ❤️ for this file in the Figma Community. If you’re feeling really generous, you can buy me a coffee @benlow244

                            For any new file suggestions, questions or feedback, follow me on twitter @benlow24.
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-10 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                style={{background:Colors.light_bg_clr}}
                >
                    <h2 className="font-bold mb-3 capitalize">Ways to support</h2>
                    <div className="flex">
                        <div className="flex flex-col me-3">
                            <Image
                                src={Images.share_like}
                                width={64}
                                height={64}
                                className="mx-auto p-1"
                                alt=""
                            />
                            <div className="font_size_20 leading-6">Share a Like</div>
                        </div>
                        <div className="flex flex-col ms-3">
                            <Image
                                src={Images.twitter}
                                width={64}
                                height={64}
                                className="mx-auto  p-1"
                                alt=""
                            />
                            <div className="font_size_20  leading-6">Follow me on Twitter</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creator_TermsService_Content