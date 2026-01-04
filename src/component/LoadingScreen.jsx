import React, { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const messages = [
        "Initializing the environment...",
        "Loading resources...",
        "Preparing experience...",
        "Welcome to my world...",
    ];

    useEffect(() => {
        let hasMinTimePassed = false;
        let isContentLoaded = false;

        // Progress bar animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        // Message rotation
        const messageInterval = setInterval(() => {
            setCurrentMessageIndex((prev) => {
                if (prev < messages.length - 1) {
                    return prev + 1;
                }
                return prev;
            });
        }, 800);

        const checkComplete = () => {
            if (hasMinTimePassed && isContentLoaded) {
                setIsExiting(true);
                setTimeout(() => {
                    onLoadingComplete();
                }, 600);
            }
        };

        // Minimum 3 seconds timer
        const minTimeTimeout = setTimeout(() => {
            hasMinTimePassed = true;
            checkComplete();
        }, 5000);

        // Check if content is loaded
        const handleContentLoad = () => {
            isContentLoaded = true;
            checkComplete();
        };

        // Wait for window load event (all resources loaded)
        if (document.readyState === "complete") {
            handleContentLoad();
        } else {
            window.addEventListener("load", handleContentLoad);
        }

        return () => {
            clearInterval(progressInterval);
            clearInterval(messageInterval);
            clearTimeout(minTimeTimeout);
            window.removeEventListener("load", handleContentLoad);
        };
    }, [onLoadingComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-600 ${isExiting ? "opacity-0" : "opacity-100"
                }`}
        >
            <div className="text-center space-y-8 px-4">
                {/* Animated Logo/Icon */}
                <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 bg-linear-to-r from-sky-500 to-emerald-500 rounded-full animate-ping opacity-20"></div>
                    <div className="relative w-24 h-24 bg-linear-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-sky-500/50">
                        <svg
                            className="w-12 h-12 text-white animate-pulse"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                        </svg>
                    </div>
                </div>

                {/* Loading Message */}
                <div className="h-8 flex items-center justify-center">
                    <p
                        key={currentMessageIndex}
                        className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-emerald-400 animate-fade-in"
                    >
                        {messages[currentMessageIndex]}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-72 md:w-96 mx-auto">
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden shadow-inner">
                        <div
                            className="h-full bg-linear-to-r from-sky-500 to-emerald-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-sky-500/50"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sky-400 text-sm mt-3 font-mono">{progress}%</p>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-center gap-2 mt-8">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-linear-to-r from-sky-500 to-emerald-500 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
