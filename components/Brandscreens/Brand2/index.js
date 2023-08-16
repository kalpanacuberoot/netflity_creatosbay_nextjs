import Colors from "@/styles/Colors"
import Link from "next/link"

const Brand2page = () => {
    return (
        <>
            <div className="p-4 lg:p-10 bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1">
                <div className="bg-white p-5 rounded-md">
                <h6 className="  font-bold" style={{ color: Colors.logo_clr }}>
                    2/2
                </h6>
                <h1 className="mt-0 mb-5  font-bold text-left text-gray-900 ">
                    Brand Details.
                </h1>

                <form>
                    <div className="relative w-full">
                        <label
                            htmlFor="fileInput"
                            className="w-full border-dotted h-44  align-middle border-4 rounded-lg bg-white   py-4 px-6 flex flex-col items-center justify-center cursor-pointer"
                            style={{ borderColor: Colors.logo_clr }}
                        >
                            <div className="mb-2">
                                <h4 className=" text-gray-300">+</h4>
                            </div>
                            <span className="text-base text-gray-300">
                                Company Logo
                            </span>
                        </label>
                        <input
                            id="fileInput"
                            className="absolute inset-0 opacity-0 w-full"
                            type="file"
                        />
                    </div>

                    <textarea
                        id="descriptionInput"
                        type="text"
                        placeholder="Company Description"
                        className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                    ></textarea>
                    <Link href={"/home"}>
                        <button
                            type="submit"
                            className="rounded-3xl mt-5 text-white w-full py-3 px-4  focus:outline-none focus:shadow-outline"
                            style={{ backgroundColor: Colors.logo_clr }}
                        >
                            Save
                        </button>
                    </Link>
                </form>
                </div>
            </div>
        </>
    )
}
export default Brand2page