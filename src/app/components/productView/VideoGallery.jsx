"use client";

import { startTransition, useState } from "react";
import { commercialVehiclesTabs, passengerVehiclesTabs, vehiclesTypes } from "./data";
import VideoAndTabs from "./VideoAndTabs";

/**
 * This component is used for showing Vehicle types.
 * It will show a video section for selected Vehicle type
 * 
*/

const VideoGallery = () => {
    const [selectedVehicleType, setSelectedVehicleType] = useState(vehiclesTypes[0]);

    return (
        <div className="flex justify-center items-center w-full h-auto flex-wrap-reverse">
            <div className="flex items-center justify-center space-x-6 md:w-[40%]">
                {/* Line Container */}
                <div className="relative w-[4px] h-64 bg-gray-500 rounded-md hidden md:block">
                    <div
                        className="absolute left-0 w-full bg-white transition-all duration-300 rounded-2xl"
                        style={{
                            top: `${selectedVehicleType.id * 100 / vehiclesTypes.length}%`,
                            height: `${100 / vehiclesTypes.length}%`,
                        }}
                    ></div>
                </div>

                {/* Vehicle Options */}
                <div className="flex gap-5 md:flex-col justify-center items-start space-y-5 !ms-12">
                    {vehiclesTypes.map((item) => (
                        <div
                            key={item.id}
                            className={`!my-5 ${selectedVehicleType.id === item.id ? "opacity-100" : "opacity-60"}`}
                        >
                            <button
                                className="text-start text-white"
                                onClick={() => startTransition(() => setSelectedVehicleType(item))}
                            >
                                <p className="text-sm md:text-3xl font-bold">{item.title}</p>
                                <p className="font-normal">{item.description}</p>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tab content */}
            {
                selectedVehicleType.value === "PASSENGER" &&
                <VideoAndTabs options={passengerVehiclesTabs} />
            }
            {
                selectedVehicleType.value === "COMMERCIAL" &&
                <VideoAndTabs options={commercialVehiclesTabs} />
            }


        </div>
    );
};


export default VideoGallery;
