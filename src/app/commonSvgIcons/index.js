export const PlayIcon = (props) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="currentColor"
            d="M8 5v14l11-7z"
        />
    </svg>
}

export const PauseIcon = (props) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="currentColor"
            d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 
                .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 
                2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
        />
    </svg>
}

export const CircleIcon = (props) => {
    return <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 48 48"
        style={{ transform: "rotate(-90deg)" }}
    >
        <circle
            cx="24"
            cy="24"
            r="23"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2.5"
        />
        <circle
            cx="24"
            cy="24"
            r="23"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
            {...props}
        />
    </svg>
}

export const CloseIcon = () => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
}