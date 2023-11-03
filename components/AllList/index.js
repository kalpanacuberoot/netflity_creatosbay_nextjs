import { url } from "@/generalfunation";
import Images from "@/images";
import Colors from "@/styles/Colors"
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMyContext } from "../AppContext";

const AllListpage = () => {

    const router = useRouter();

    const { setData } = useMyContext();

    const [creatorData, setCreatorData] = useState([]);
    const [totalPageCreatorCount, setTotalPageCreatorCount] = useState(1);
    const [currentCreatorPage, setCurrentCreatorPage] = useState(1);

    const [brandData, setBrandData] = useState([]);
    const [totalPageBrandCount, setTotalPageBrandCount] = useState(1);
    const [currentBrandPage, setCurrentBrandPage] = useState(1);

    useEffect(() => {
        fetchTotalCreatorCount();
        fetchTotalBrandCount();
    }, [])

    const fetchTotalCreatorCount = async () => {
        try {
            const userData = Cookies.get('creator_user_data');
            const cookieValue = JSON.parse(userData)
            const apiUrl = `${url}/creators?order=desc`;
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },
            };
            const response = await fetch(apiUrl, requestOptions);

            if (response.ok) {
                const responseData = await response.json();
                console.log("responseData creator notification", responseData);
                const totalCount = responseData?.data?.total;
                const itemsPerPage = 10; // Change this to your desired items per page.
                const totalPageCount = Math.ceil(totalCount / itemsPerPage);
                console.log("totalPageCount noti", totalPageCount);
                // setNotificationData(responseData.data);
                // setTotalPages(responseData.last_page);
                setTotalPageCreatorCount(totalPageCount)
                fetchCreatorData(currentCreatorPage);
            } else {
                console.error(`Failed to fetch data for page `);
            }
        } catch (error) {
            console.error(`Error fetching data for page:`, error);
        }
    };

    const fetchCreatorData = async (page) => {
        console.log("currentPage", page);
        try {

            const userData = Cookies.get('creator_user_data');
            const cookieValue = JSON.parse(userData)
            const apiUrl = `${url}/creators?current_page=${page}&order=desc`;
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },
            };

            const response = await fetch(apiUrl, requestOptions);

            if (response.ok) {
                const responseData = await response.json();
                setCreatorData(responseData?.data?.data);
            } else {
                console.error(`Failed to fetch data for page ${currentCreatorPage}`);
            }
        } catch (error) {
            console.error(`Error fetching data for page ${currentCreatorPage}:`, error);
        }
    };

    const fetchTotalBrandCount = async () => {
        try {
            const userData = Cookies.get('creator_user_data');
            const cookieValue = JSON.parse(userData)
            const apiUrl = `${url}/brands?order=desc`;
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },
            };
            const response = await fetch(apiUrl, requestOptions);

            if (response.ok) {
                const responseData = await response.json();
                console.log("responseData creator notification", responseData);
                const totalCount = responseData?.data?.total;
                const itemsPerPage = 10; // Change this to your desired items per page.
                const totalPageCount = Math.ceil(totalCount / itemsPerPage);
                console.log("totalPageCount noti", totalPageCount);
                setTotalPageBrandCount(totalPageCount)
                fetchBrandData(currentCreatorPage);
            } else {
                console.error(`Failed to fetch data for page `);
            }
        } catch (error) {
            console.error(`Error fetching data for page:`, error);
        }
    };

    const fetchBrandData = async (page) => {
        console.log("currentPage", page);
        try {

            const userData = Cookies.get('creator_user_data');
            const cookieValue = JSON.parse(userData)
            const apiUrl = `${url}/brands?current_page=${page}&order=desc`;
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },
            };

            const response = await fetch(apiUrl, requestOptions);

            if (response.ok) {
                const responseData = await response.json();
                setBrandData(responseData?.data?.data);
            } else {
                console.error(`Failed to fetch data for page ${currentBrandPage}`);
            }
        } catch (error) {
            console.error(`Error fetching data for page ${currentBrandPage}:`, error);
        }
    };

    function formatNumber(number) {
        if (number >= 1000000) {
            return (number / 1000000).toFixed(1) + 'M';
        } else if (number >= 1000) {
            return (number / 1000).toFixed(1) + 'K';
        }
        return number.toString();
    }

    console.log(formatNumber(1000000)); // Output: "1M"
    console.log(formatNumber(1000));    // Output: "1K"
    console.log(formatNumber(1500));    // Output: "1.5K"
    console.log(formatNumber(500));     // Output: "500"

    const handleCreatorPreviousPage = () => {
        if (currentCreatorPage > 1) {
            setCurrentCreatorPage(currentCreatorPage - 1);
            fetchCreatorData(currentCreatorPage - 1);
        }
    };

    const handleCreatorNextPage = () => {
        if (currentCreatorPage < totalPageCreatorCount) {
            setCurrentCreatorPage(currentCreatorPage + 1);
            fetchCreatorData(currentCreatorPage + 1);
        }
    };

    const handleBrandPreviousPage = () => {
        if (currentBrandPage > 1) {
            setCurrentBrandPage(currentBrandPage - 1);
            fetchBrandData(currentBrandPage - 1);
        }
    };

    const handleBrandNextPage = () => {
        if (currentBrandPage < totalPageBrandCount) {
            setCurrentBrandPage(currentBrandPage + 1);
            fetchBrandData(currentBrandPage + 1);
        }
    };

    const handleSingleList = (creator) => {
        console.log("singl creator item",creator);
        router.push('/single_creator_list')
        setData(creator)
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12 w-full">
                <div className="mx-auto w-2/3 px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl   xl:p-10 lg:p-10">
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        className="auto-cols-max p-3 rounded-md flex flex-row mb-5"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">
                            <div className="text-2xl font-bold ps-5" style={{ color: Colors.white_clr }}>
                                All Lists
                            </div>
                        </div>

                    </div>
                    <div className="rounded-lg shadow-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                        <div className="flex justify-between items-center mb-6">
                            <div className="w-full text-xl font-semibold text-black dark:text-white text-center underline ">
                                Creators List
                            </div>
                            <div
                                className="pink_clr font-bold text-center rounded px-8 py-2 cursor-pointer"
                                onClick={() => router.push('/creator_form')}
                            >
                                Create
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
                                <div className="p-2.5 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        S.No
                                    </h5>
                                </div>

                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Name
                                    </h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Email
                                    </h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Gender
                                    </h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Type
                                    </h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Instagram
                                    </h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Youtube
                                    </h5>
                                </div>
                            </div>

                            {creatorData.map((creator, key) => (
                                <div
                                    className={`grid grid-cols-5 sm:grid-cols-7 items-center cursor-pointer ${key === creator.length - 1
                                        ? ""
                                        : "border-b border-stroke dark:border-strokedark"
                                        }`}
                                    key={key}
                                    onClick={() => handleSingleList(creator)}
                                >
                                    <div
                                        className="flex items-center gap-3 p-2.5 xl:p-5"
                                    >
                                        <div className="flex-shrink-0">
                                            {creator?.id && typeof creator.id === 'string' ? (
                                                creator.id
                                                    .split(',')
                                                    .map(Number)
                                                    .sort((a, b) => a - b)
                                                    .join(', ')
                                            ) : creator.id}
                                        </div>
                                        <p className="hidden text-black dark:text-white sm:block">
                                            <Image
                                                src={creator?.profile_pic}
                                                width={25}
                                                height={25}
                                                alt=""
                                                className="rounded-full"
                                            />
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        <p className="text-black dark:text-white">
                                            {creator?.user?.name}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        <p className="text-meta-3">
                                            {creator?.user?.email}
                                        </p>
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="text-black dark:text-white capitalize">
                                            {creator?.gender}
                                        </p>
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="text-meta-5">
                                            {creator?.user?.type}
                                        </p>
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="text-meta-5">
                                            {formatNumber(creator?.instagram_followers)}
                                        </p>
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="text-meta-5">
                                            {formatNumber(creator?.youtube_subscribers)}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {totalPageCreatorCount > 1 && (
                                <div className="pagination w-full text-end my-5">
                                    <button
                                        onClick={handleCreatorPreviousPage}
                                        disabled={currentCreatorPage === 1}
                                        className="px-5 py-2 bg-green-500 text-white rounded-lg"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleCreatorNextPage}
                                        disabled={currentCreatorPage === totalPageCreatorCount}
                                        className="ms-5 px-5 py-2 bg-green-500 text-white rounded-lg"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* <div className="mt-10 rounded-lg shadow-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white text-center underline ">
                            Brands List
                        </h4>

                        <div className="flex flex-col">
                            <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
                                <div className="p-2.5 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        S.No
                                    </h5>
                                </div>

                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Name
                                    </h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Creators
                                    </h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Categories
                                    </h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Images
                                    </h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                                        Videos
                                    </h5>
                                </div>
                            </div>

                            {brandData.map((brand, key) => (
                                <div
                                    className={`grid grid-cols-4 sm:grid-cols-6 items-center  ${key === brand.length - 1
                                        ? ""
                                        : "border-b border-stroke dark:border-strokedark"
                                        }`}
                                    key={key}
                                >
                                    <div
                                     
                                        className="flex items-center gap-3 p-2.5 xl:p-5"
                                    >
                                        <div className="flex-shrink-0">
                                            {brand?.id}
                                        </div>
                                        <p className="hidden text-black dark:text-white sm:block">
                                            <Image
                                                src={brand?.logo}
                                                width={25}
                                                height={25}
                                                alt=""
                                                className="rounded-full"
                                            />
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        <p className="text-black dark:text-white">
                                            {brand?.name}
                                        </p>
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="text-black dark:text-white capitalize">
                                            {brand?.creators}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        {brand?.categories.map((category) => (
                                            <li key={category.id}>{category.name}</li>
                                        ))}
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="text-black dark:text-white capitalize">
                                            {brand?.images}
                                        </p>
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="text-meta-5">
                                            {brand?.videos}
                                        </p>
                                    </div>

                                </div>
                            ))}

                            {totalPageBrandCount > 1 && (
                                <div className="pagination w-full text-end my-5">
                                    <button
                                        onClick={handleBrandPreviousPage}
                                        disabled={currentBrandPage === 1}
                                        className="px-5 py-2 bg-green-500 text-white rounded-lg"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleBrandNextPage}
                                        disabled={currentBrandPage === totalPageBrandCount}
                                        className="ms-5 px-5 py-2 bg-green-500 text-white rounded-lg"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default AllListpage