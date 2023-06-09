import Image from "next/image";
import logo from "../images/logo.png";

export default function Home() {
  return (
    <>
      <div className="container flex min-w-full bg-zinc-100">
        <div className="w-1/1 ">
          <Image src={logo} width={190} alt="" />
          <div className="flex justify-center p-20">
            <div className="p-10 bg-white border-gray-300 border-solid w-90 rounded-2xl border-1">
              <h4 className="mt-0 mb-5 text-6xl font-extrabold text-left text-gray-900 leading-20 ">
                Make Your Brand a next <br /> social media star &#x2B50;
              </h4>
              <p className="pt-5 text-base ">
                Sets the width of the element to a specific width of 64 pixels.
                Additionally, you can combine the w-1/2 class with other utility
                classes or use responsive variants to apply different widths at
                different screen
              </p>
              <p className="pt-4 text-base">
                different widths at different screen sizes. For example,
                md:w-2/3 sets the width of the element
              </p>
              <div className="flex justify-between pt-5 mt-10 align-middle ">
                <button className="flex pt-5 pb-5 font-bold tracking-wider text-white rounded-full p-36 bg-cyan-600">
                  Get Started{" "}
                  <svg
                    data-te-animation-init
                    data-te-animation-reset="true"
                    data-te-animation="[slide-right_1s_ease-in-out]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-7 w-8 pl-3"
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
                <h6 className="flex items-center justify-center text-base font-bold leading-9 text-cyan-600">
                  How it's Works
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-1/1">
          <div className="w-1/2">
            <logo-slider>
              <div>
                <img src="https://www.worldphoto.org/sites/default/files/%C2%A9%20Henry%20Oude%20Egberink%2C%20Netherlands%2C%20entry%2C%20Open%20competition%20%2C%20Creative%20%2C%202020%20Sony%20World%20Photography%20Awards.jpg" />
                <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                <img src="https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Alone-Boy-Images.jpg" />
                <img src="https://images.pexels.com/photos/2816893/pexels-photo-2816893.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                <img src="https://images.pexels.com/photos/1510149/pexels-photo-1510149.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                <img src="https://images.pexels.com/photos/1510149/pexels-photo-1510149.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                <img src="https://i.pinimg.com/222x/a9/67/91/a96791a3c302f73450f8db4c39bb0a5b.jpg" />
                <img src="https://cdn.shopify.com/s/files/1/0603/6412/8462/files/cute-good-morning-pics-for-2023_13_600x600.jpg?v=1672142598" />
              </div>

              <div>
                <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1662654376.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=1200:*" />
                <img src="https://cdn.shopify.com/s/files/1/0603/6412/8462/files/cute-good-morning-pics-for-2023_13_600x600.jpg?v=1672142598" />
                <img src="https://i.pinimg.com/736x/0e/70/b0/0e70b0f6712f3b8e9d04ca18d902ef83.jpg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoiHSEmqep8irLEF_qh3jKZFw3hIYrPNkpg7uakggISOyzlzuuGGjinq_7y4oboMAmFo2jLLKSbk&usqp=CAU&ec=48600113" />
                <img src="https://photosfile.com/wp-content/uploads/2022/04/Funny-DP-29.jpeg" />
                <img src="https://static.boredpanda.com/blog/wp-content/uploads/2020/01/funny-celebrities-social-media-memes-14-5e2b0580712b1__700.jpg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoiHSEmqep8irLEF_qh3jKZFw3hIYrPNkpg7uakggISOyzlzuuGGjinq_7y4oboMAmFo2jLLKSbk&usqp=CAU&ec=48600113" />
                <img src="https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-HD-Funny-Whatsapp-DP-Pics-Download.jpg" />
              </div>
            </logo-slider>
          </div>
          <div className="w-1/2">
            <logo-slider className="lslider">
              <div>
                <img src="https://picsum.photos/100" />
                <img src="https://picsum.photos/102" />
                <img src="https://picsum.photos/103" />
                <img src="https://picsum.photos/104" />
                <img src="https://picsum.photos/105" />
                <img src="https://picsum.photos/106" />
                <img src="https://picsum.photos/107" />
                <img src="https://picsum.photos/108" />
              </div>

              <div>
                <img src="https://picsum.photos/100" />
                <img src="https://picsum.photos/102" />
                <img src="https://picsum.photos/103" />
                <img src="https://picsum.photos/104" />
                <img src="https://picsum.photos/105" />
                <img src="https://picsum.photos/106" />
                <img src="https://picsum.photos/107" />
                <img src="https://picsum.photos/108" />
              </div>
            </logo-slider>
          </div>
        </div>
      </div>
    </>
  );
}
