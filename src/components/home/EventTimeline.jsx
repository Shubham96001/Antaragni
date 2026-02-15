"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTrophy } from "react-icons/fa";
import Link from "next/link";
import { schedule } from "@/data/schedule";
import { getEventDetails } from "@/utils/eventHelpers";

export default function EventTimeline() {
    const [activeMainTab, setActiveMainTab] = useState("parakram");
    const [activeDayIndex, setActiveDayIndex] = useState(0);

    const activeSchedule = schedule[activeMainTab];
    const activeDay = activeSchedule[activeDayIndex];

    return (
        <section className="py-20 bg-[var(--color-cream)] relative min-h-screen">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-bold mb-4 px-4">
                        Event Schedule
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
                        Mark your calendars. Witness the legacy unfolded.
                    </p>
                </div>

                {/* Main Tabs (Parakram vs Antaragni) */}
                <div className="flex flex-col sm:flex-row justify-center items-center mb-10 gap-4 px-4">
                    <button
                        onClick={() => { setActiveMainTab("parakram"); setActiveDayIndex(0); }}
                        className={`w-full sm:w-auto px-6 py-3 md:px-8 rounded-full text-lg md:text-xl font-bold transition-all transform hover:scale-105 active:scale-95 ${activeMainTab === "parakram"
                            ? "bg-gradient-to-r from-fuchsia-800 to-purple-800 text-white shadow-lg shadow-purple-500/30"
                            : "bg-white text-gray-500 hover:text-purple-500 border border-gray-200"
                            }`}
                    >
                        Parakram
                    </button>
                    <button
                        onClick={() => { setActiveMainTab("antaragni"); setActiveDayIndex(0); }}
                        className={`w-full sm:w-auto px-6 py-3 md:px-8 rounded-full text-lg md:text-xl font-bold transition-all transform hover:scale-105 active:scale-95 ${activeMainTab === "antaragni"
                            ? "bg-gradient-to-r from-purple-800 to-fuchsia-800 text-white shadow-lg shadow-purple-500/30"
                            : "bg-white text-gray-500 hover:text-purple-500 border border-gray-200"
                            }`}
                    >
                        Antaragni & Technorion
                    </button>
                </div>

                {/* Day Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
                    {activeSchedule.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveDayIndex(index)}
                            className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-bold transition-all transform hover:scale-105 active:scale-95 ${activeDayIndex === index
                                ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                                : "bg-white text-gray-500 hover:text-gray-900 border border-gray-200"
                                }`}
                        >
                            {item.day} <span className={`text-xs ml-1 ${activeDayIndex === index ? "text-white/90" : "text-gray-400"}`}>({item.date})</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeMainTab}-${activeDayIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="mb-10 text-center">
                            <h3 className="font-bold inline-block pb-2 border-b-2 border-gray-100">
                                {activeDay.subtitle}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {activeDay.events.map((eventName, idx) => {
                                const details = getEventDetails(eventName);
                                return (
                                    <EventDetailCard
                                        key={idx}
                                        name={eventName}
                                        details={details}
                                        color={activeDay.color}
                                        idx={idx}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}

function EventDetailCard({ name, details, color, idx }) {
    const time = details?.details?.time || "TBA";
    const venue = details?.details?.venue || "TBA";
    const image = details?.bannerImage || details?.image;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            {/* Image Header */}
            <div className="h-32 bg-gray-200 relative overflow-hidden">
                {image ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow-md">
                    {name}
                </div>
            </div>

            {/* Details Body */}
            <div className="p-4">
                <div className="flex items-center gap-2 mb-2 text-gray-700 text-sm font-medium">
                    <span className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded-full text-xs">🕒</span>
                    {time}
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-xs font-semibold">
                    <span className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded-full text-[10px]">📍</span>
                    {venue}
                </div>
            </div>
        </motion.div>
    );
}
