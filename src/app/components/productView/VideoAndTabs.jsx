"use client"

import { useRef, useState, useTransition } from "react";
import PlayPauseButton from "./PlayPauseButton";
import Image from "next/image";

/**
 * This is a common component for Passenger and Commercial Category section.
 * It create sub category list of individual vehicle type
 *  
*/


const VideoAndTabs = ({ options }) => {
    const [_, startTransition] = useTransition()
    const [selectedTab, setSelectedTab] = useState(options[0]);
    const videoRef = useRef(null)

    // To remove UI blink issue
    const handleChangeVideo = (item) => {
        startTransition(() => setSelectedTab(item))
    }

    return (
        <div className="md:w-[60%] flex justify-center flex-col items-center">
            <div className="md:!px-5">
                <video
                    ref={videoRef}
                    key={selectedTab.id}
                    autoPlay
                    loop
                    muted
                    className="1/4"
                >
                    <source src={selectedTab.relatedVideo} type="video/mp4" />
                </video>

            </div>
            <div className="flex items-center w-screen md:w-full overflow-auto">
                <div className="flex items-end">
                    {
                        options.map(item => (
                            <button
                                key={item.id}
                                className={`${selectedTab.id === item.id ? "opacity-100" : "opacity-60"} !m-5`}
                                onClick={() => handleChangeVideo(item)}
                            >
                                <div className="flex items-center flex-col">
                                    <div><Image src={item.assetPath} alt={item.title} width="50" height="50" className="max-w-8 max-h-8"/></div>
                                    <div className="text-xs md:text-base text-nowrap">{item.title}</div>
                                </div>
                            </button>))
                    }
                </div>

                <div className="w-full text-center">
                    <PlayPauseButton
                        key={selectedTab.id}
                        videoRef={videoRef}
                    />
                </div>
            </div>
        </div>
    )
}
export default VideoAndTabs