import Left_Dashboard from "@/components/Homepage/leftDashboard";
import Colors from "@/styles/Colors";
import Link from "next/link";

const Payment_failurepage = () => {

  return (
    <>
      <div className="flex h-full" style={{ backgroundColor: Colors.button_light_clr }}>

        <div
          className="w-full flex justify-center align-middle items-center flex-col border"
          style={{ backgroundColor: Colors.white_clr }}
        >
          <div className=" text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800 border p-10 shadow-lg ">

            <h1 className="text-center font-bold">Your Transaction is <br /> Failed</h1>

            <Link href={"/home"}>
              <button className="mt-5 px-12 py-2 rounded-md w-full bg-yellow-800 text-white"

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