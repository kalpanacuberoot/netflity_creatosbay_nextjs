import Left_Dashboard from "@/components/Homepage/leftDashboard";
import Colors from "@/styles/Colors";

import Link from "next/link";



const Payment_failurepage = () => {




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
          <div className=" text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800 border p-10 shadow-lg ">
            {/* <h1 className="text-center font-bold" style={{ color: Colors.red_clr }}>Your Payment is <br /> Failed</h1> */}
            <h1 className="text-center font-bold">Your Transaction is <br /> Failed</h1>

            {/* <div class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
              </div>
            </div> */}
            

            <Link href={"/home"}>
              <button className="mt-5 px-12 py-2 rounded-md w-full bg-yellow-800 text-white"
                // style={{ backgroundColor: Colors.red_clr, color: Colors.white_clr }}
                >
                OK
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Payment_failurepage;