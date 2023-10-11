import Images from "@/images";
import Image from "next/image";
import { useState } from "react";
import Colors from "@/styles/Colors";
import { useRouter } from "next/router";

const Home_Card2 = () => {

  const router = useRouter();

  const [cardsecondshowmore, setCardsecondshowmore] = useState(false);


  return (
    <>
      <div className="my-10 mx-2 overflow-y-auto scroll  max-w-96 lg:w-2/5 md:w-full sm:w-full" >
        {/* <div className=" max-h-96 h-96 max-w-96 w-96"> */}
        <div className="relative">
          <div className="max-h-64 h-52 max-w-96 w-full border rounded-t-lg">

            <Image
              src={Images.card_img}
              width={350}
              height={50}
              alt=""
              className="w-full h-52 mx-auto"
            />

          </div>
        </div>
        <div className="px-5 py-5 border rounded-b-lg" style={{ background: Colors.white_clr }}>
          <div className="flex flex-row justify-between items-end mt-4 mx-0">
            <div className="font_size_17 flex items-center">Creators
              <span
                // style={{ background: Colors.pink_clr, borderColor: Colors.light_grey_clr }}
                className="px-3 py-1 rounded-md border ms-3 text-white bg-slate-800">
                0
              </span>
            </div>
            <div
              className="flex flex-row px-3 py-1 items-center rounded-md mx-0"
              // style={{ backgroundColor: Colors.delay_clr }}
              style={{ backgroundColor: Colors.active_clr }}
            >
              <Image
                src={Images.clock}
                width={15}
                height={10}
                alt=""
                className="me-2"
              />
              <h5 className="capitalize">Active</h5>
            </div>
          </div>
          <h4 className="font-bold capitalize mt-2">Ant Studio llp</h4>
          <div className="max-h-64"  style={{ wordWrap: 'break-word' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </div>
          <div className="px-5 border py-3 rounded-md text-center  mt-2">
            <h6>13-11-2023 - 30-11-2023</h6>
            {/* <Link href={'/communication'}> */}
            <div className="w-100 rounded-full border edit_button_clr py-1 cursor-pointer"
            // onClick={() => handleId(items)}
            onClick={() => router.push('/communication')}
            >
              <buttton> Check Details</buttton>
            </div>
            {/* </Link> */}
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* <div className=" my-2 mx-2">
        <div className="relative">
          <Image
            src={Images.card_img}
            width={500}
            height={100}
            alt=""
            className=" mx-auto"
          />
          <Image
            src={Images.reel_creator_card}
            width={50}
            height={50}
            alt=""
            className="reel_creator_card mx-auto"
          />
        </div>
        <div className="px-5 py-5 border rounded-b-lg" style={{ background: Colors.white_clr }}>
          <div className="flex flex-row justify-between items-end mt-4">
            <div className="font_size_17 ">Reels creators</div>
            <div
              className="flex flex-row items-center px-3 rounded-md"
              style={{ backgroundColor: Colors.active_clr }}
            >
              <Image
                src={Images.clock}
                width={12}
                height={10}
                alt=""
                className="me-2"
              />
              <h6>Active</h6>
            </div>
          </div>
          <h2 className="font-bold">Ant Studio llp</h2>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            {cardsecondshowmore && (
              <>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry......
              </>
            )}
            <h6
              className="text-red-600"
              onClick={() => setCardsecondshowmore(!cardsecondshowmore)}
            >
              {cardsecondshowmore ? "Less More" : "Read More"}
            </h6>
          </h6>
          <div className="px-5 border py-3 rounded-md text-center  mt-2">
            <h6>04/06/2023</h6>
            <div className="w-100 rounded-full border edit_button_clr py-1">
              <buttton> Check Details</buttton>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
export default Home_Card2