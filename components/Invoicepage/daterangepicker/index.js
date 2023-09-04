import Images from '@/images';
import Image from 'next/image';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';

const Date_range_picker = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <>

            <div className="flex flex-row space-y-4 border rounded-md">
                <div className='relative'>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        className="w-full p-2 rounded ps-9"
                    />
                    <div className="absolute top-2.5 left-0 text-gray-400 ps-2">
                        <Image
                            src={Images.calendar_icon}
                            alt=""
                            width={20}
                        />
                    </div>
                    <span className="mx-4 text-gray-500">-</span>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="End Date"
                        className="w-full p-2 rounded ps-9"
                    />
                </div>
                {/* <div className='relative'>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="End Date"
                        className="w-full p-2 border rounded ps-9"
                    />
                    <div className="absolute top-2.5 left-0 text-gray-400 ps-2">
                        <Image
                            src={Images.calendar_icon}
                            alt=""
                            width={20}
                        />
                    </div>
                </div> */}

            </div>
        </>
    )
}
export default Date_range_picker