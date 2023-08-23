import { useState } from 'react';
import { format, addDays, subDays, isSameDay, isSameMonth, startOfWeek } from 'date-fns';
import { useRouter } from 'next/router';
import Images from '@/images';
import Image from 'next/image';

const Calendar_component = () => {
    const currentDate = new Date(); // Get the current date
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(null);
    const router = useRouter();

    const handlePrevClick = () => {
        setStartDate((prevStartDate) => subDays(prevStartDate, 7));
    };

    const handleNextClick = () => {
        setStartDate((prevStartDate) => addDays(prevStartDate, 7));
    };

    const handleDateClick = (date) => {
        if (!startDate || (startDate && endDate)) {
            // If no start date is set or both start and end dates are set, set a new start date
            setStartDate(date);
            setEndDate(null);

        } else if (date > startDate) {
            // If a start date is set and the clicked date is after the start date, set the end date
            setEndDate(date);
        }
        router.push({
            pathname: '/campaign_info',
            query: {
                start_date: startDate.toISOString(), // Convert to ISO string for easy parsing
                end_date: date.toISOString(),
            },
        });

    };

    const getWeek = (startOfWeek) => {
        const week = [];
        let currentDate = startOfWeek;

        for (let i = 0; i < 7; i++) {
            const isToday = isSameDay(currentDate, new Date());
            const isSelected = startDate && (isSameDay(currentDate, startDate) || (endDate && isSameDay(currentDate, endDate)));

            week.push(
                <div
                    key={i}
                    className={`text-center p-2 ${!isSameMonth(currentDate, startDate || currentDate) ? 'text-gray-400' : ''
                        } ${isToday ? 'bg-blue-200' : ''} ${isSelected ? 'bg-green-200' : ''}`}
                    onClick={() => handleDateClick(currentDate)}
                >
                    <div>{format(currentDate, 'E')}</div>
                    <div>{format(currentDate, 'dd')}</div>
                    <div>{format(currentDate, 'MMM')}</div>
                </div>
            );
            currentDate = addDays(currentDate, 1);
        }

        return week;
    };

    return (
        <div>
            {/* <h2 className="text-2xl font-semibold mb-4">Dynamic Calendar</h2> */}
            <div className="mb-4 flex justify-between items-center">
                <div className="" onClick={handlePrevClick}>
                    <Image
                        src={Images.arrowleft_icon}
                        width={30}
                        alt=""
                    />
                </div>
                {/* <button
                    onClick={handlePrevClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Previous 7 Days
                </button> */}
                <div className="grid grid-cols-7 gap-2">{getWeek(startOfWeek(startDate))}</div>
                <div onClick={handleNextClick}>
                    <Image
                        src={Images.arrowright_icon}
                        width={30}
                        alt=""
                    />
                </div>
                {/* <button
                    onClick={handleNextClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Next 7 Days
                </button> */}
            </div>
            {/* <div className="grid grid-cols-7 gap-2">{getWeek(startOfWeek(startDate))}</div> */}
            {/* {startDate && (
        <p className="mt-4">
          Selected Range: {format(startDate, 'yyyy-MM-dd')} - {endDate ? format(endDate, 'yyyy-MM-dd') : 'Select an end date'}
        </p>
      )} */}
        </div>
    );
};

export default Calendar_component;
