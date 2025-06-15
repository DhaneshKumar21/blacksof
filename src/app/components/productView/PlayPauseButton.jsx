"use client";
import React, { useEffect, useState } from "react";
import { CircleIcon, PauseIcon, PlayIcon } from "../../commonSvgIcons";

/**
 * This is common paly and pause button to play or stop video in video gallery section
 * It is an individual button seperate from Video gallery as it is rending each time while video is active. 
 * 
*/


const PlayPauseButton = ({ videoRef }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const radius = 23;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const video = videoRef?.current;
        if (!video) return;

        const updateProgress = () => {
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(percent);
        };

        video.addEventListener("timeupdate", updateProgress);
        return () => {
            video.removeEventListener("timeupdate", updateProgress);
        };
    }, [videoRef]);


    const handlePlayPause = () => {
        console.log("hello", isPlaying)
        if (videoRef?.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const dashOffset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative inline-block w-12 h-12 cursor-pointer">
            <button
                title={isPlaying ? "Pause" : "Play"}
                type="button"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50"
                onClick={handlePlayPause}
            >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            <CircleIcon
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
            />

        </div>
    );
};

export default PlayPauseButton;
