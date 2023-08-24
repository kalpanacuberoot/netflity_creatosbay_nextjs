import Left_Dashboard from "@/components/Homepage/leftDashboard";
import Colors from "@/styles/Colors";

import Link from "next/link";



const Payment_successpage = () => {




  return (
    <>
      <div className="flex" style={{ backgroundColor: Colors.button_light_clr }}>
        <div
          className="auto-cols-max w-96 px-3 py-5 border"
          style={{ backgroundColor: Colors.white_clr }}
        >

          <Left_Dashboard />

        </div>
        <div
          className="w-full flex justify-center align-middle items-center flex-col border"
          style={{ backgroundColor: Colors.white_clr }}
        >
          <div className="border p-10 shadow-lg rounded">
            <h1 className="text-center font-bold" style={{ color: Colors.logo_clr }}>Your Payment is <br /> Successfully done</h1>
            <Link href={"/"}>
              <button className="mt-5 px-12 py-2 rounded-md w-full"
                style={{ backgroundColor: Colors.logo_clr, color: Colors.white_clr }}>
                OK
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Payment_successpage;