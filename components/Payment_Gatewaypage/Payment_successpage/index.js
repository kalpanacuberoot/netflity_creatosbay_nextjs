import Left_Dashboard from "@/components/Homepage/leftDashboard";
import Colors from "@/styles/Colors";

import Link from "next/link";



const Payment_successpage = () => {

  return (
    <>
      <div className="flex h-full" style={{ backgroundColor: Colors.button_light_clr }}>
        {/* <div
          className="auto-cols-max w-96 px-3 py-5 border"
          style={{ backgroundColor: Colors.white_clr }}
        >

          <Left_Dashboard />

        </div> */}
        <div
          className="w-full flex justify-center align-middle items-center flex-col border"
          style={{ backgroundColor: Colors.white_clr }}
        >
          <div className="border p-10 shadow-lg  text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800">
            <h1 className="text-center font-bold" 
            // style={{ color: Colors.logo_clr }}
            >Your Transaction is <br /> Successfully done</h1>
             {/* <div class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
              </div>
            </div> */}
            <Link href={"/home"}>
              <button className="mt-5 px-12 py-2 rounded-md w-full bg-green-800 text-white"
                // style={{ backgroundColor: Colors.logo_clr, color: Colors.white_clr }}
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

export default Payment_successpage;