"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/events/DSC_3150.jpg",
    "/events/ant3-FugJqVfC.JPG",
    "/events/ant8-B2bLfqP2.JPG",
    "/events/_DSC6997-fI_ZGXh3.JPG",
    "/events/jantaRaja2.jpg",
    "/events/fashionshow.jpg"
];

// --- Sub-Component: The Styled Countdown Timer ---
function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-2 md:mx-4">
            {/* Solid block style from reference image */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-indigo-700 border border-white/20 rounded-xl flex items-center justify-center mb-2 shadow-xl">
                <span className="text-2xl md:text-5xl font-black text-white drop-shadow-md">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-cyan-400 uppercase font-bold">
                {label}
            </span>
        </div>
    );



    return (
        <div className="flex justify-center items-center mt-6">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}



// --- Main Export ---
export default function PrismHero() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000); // 3 seconds interval
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen w-full relative overflow-hidden bg-white">
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImageIndex}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 z-0 opacity-50"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${heroImages[currentImageIndex]}')`,
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay Content */}
            <>
                <div className="absolute inset-0 z-30 flex items-center justify-center overflow-hidden">
                    <div className="relative h-auto flex flex-col items-center justify-center text-center px-4 pointer-events-none w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="p-8 md:p-4 pointer-events-auto max-w-full w-full mx-auto"
                        >
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-[13vw] md:text-[9vw] leading-none font-black mb-2 tracking-tighter "
                            >
                                <span className="text-[#3C007A]">
                                    ANTARAGNI
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-2xl md:text-4xl font-extrabold text-[var(--color-primary)] tracking-[0.3em] uppercase mb-6 drop-shadow-sm"
                            >
                                Spectrum Saga
                            </motion.h2>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="text-purple-950 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-bold leading-relaxed"
                            >
                                Immerse yourself in the prism of possibilities. <br />
                                Where every color tells a story of courage and creativity.
                            </motion.p>

                            {/* <motion.h1
                                className="text-2xl text-[var(--color-primary)] drop-shadow-sm"
                            >The SAGA BEGINS IN
                            </motion.h1> */}

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                <CountdownTimer targetDate="2026-02-19T00:00:00" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black/50 z-20"
            >
                <div className="w-px h-16 bg-linear-to-b from-cyan-400 to-transparent mx-auto" />
            </motion.div>
        </section >
    );
}
