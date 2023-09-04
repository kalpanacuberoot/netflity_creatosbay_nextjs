import Images from "@/images";
import Colors from "@/styles/Colors";
import Image from "next/image";

const Marketplace_card = () => {

    const imageUrl = "https://imgs.search.brave.com/NgHQTuyleY9W2nUR9RbSI6kFqixjPx0UkxP_2qthm7w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTU3/MTI2OC9wZXhlbHMt/cGhvdG8tOTU3MTI2/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA";

    return (
        <>
            <div className=" bg-white p-3 rounded-lg">
                <div className="grid grid-cols-3 rounded-md gap-1" >

                    <Image
                        width={500}
                        height={100}
                        className="w-full h-64 object-cover"
                        src={imageUrl}
                        alt=""
                    />
                    <Image
                        width={500}
                        height={100}
                        className="w-full h-64 object-cover"
                        src={imageUrl}
                        alt=""
                    />
                    <Image
                        width={500}
                        height={100}
                        className="w-full h-64 object-cover"
                        src={imageUrl}
                        alt=""
                    />

                </div>
                <div className="flex justify-between mb-2 mt-2">
                    <div> <h2 className="font-bold">Lily_youg</h2></div>
                    {/* <div className="flex gap-4"><h3>x</h3> */}
                        {/* <h3>|</h3></div> */}
                </div>
                <div className="flex justify-between mb-2 mt-2">
                    <div> <h4>Lily_youg</h4></div>
                    <div className="flex gap-1"><h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#lifestyle</h6>
                        <h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#fashion</h6><h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#coffe</h6><h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#mother</h6></div>
                </div>
                <button className="w-full rounded-full p-2 mt-3" style={{ backgroundColor: Colors.logo_clr, color: Colors.white_clr }}>View profile</button>
            </div>
        </>
    )
};

export default Marketplace_card