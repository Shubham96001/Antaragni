"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parakramEvents from "@/data/events/parakram.json";
import antaragniEvents from "@/data/events/antaragni.json";
import technorionEvents from "@/data/events/technorion.json";

// Helper to normalize strings for comparison
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

// --- Data Preparation ---
// We'll create a mapping of event names to their details for easy lookup.
const allEventsData = [...parakramEvents, ...antaragniEvents, ...technorionEvents];

const getEventDetails = (eventName) => {
    // Try to find exact match or partial match
    const normalizedName = normalize(eventName);
    const event = allEventsData.find(e => normalize(e.name).includes(normalizedName) || normalizedName.includes(normalize(e.name)));
    return event || {};
};

// --- Schedule Configuration ---
const schedule = {
    parakram: [
        {
            day: "Day 1",
            date: "Feb 15",
            subtitle: "Inauguration & Indoor Sports",
            events: ["Inauguration", "Table Tennis", "Pool (8-Ball)", "Carrom", "Chess", "Power Lifting"],
            color: "from-[var(--parakram-primary)] to-[var(--parakram-secondary)]"
        },
        {
            day: "Day 2",
            date: "Feb 16",
            subtitle: "Cricket & Volleyball",
            events: ["Futsal (Women Only)", "Cricket", "Volleyball"],
            color: "from-[var(--parakram-secondary)] to-[var(--parakram-primary)]"
        },
        {
            day: "Day 3",
            date: "Feb 17",
            subtitle: "Team Sports",
            events: ["Tug of War", "Dodge Ball", "Football"],
            color: "from-[var(--parakram-primary)] to-[var(--parakram-tertiary)]" // Note: tertiary not defined for parakram in globals, fallback or define
        },
        {
            day: "Day 4",
            date: "Feb 18",
            subtitle: "Athletics & Court Games",
            events: ["Athletics", "Badminton", "Basketball", "Handball", "Kabaddi"],
            color: "from-[var(--parakram-secondary)] to-[var(--parakram-primary)]"
        }
    ],
    antaragni: [
        {
            day: "Day 1",
            date: "Feb 19",
            subtitle: "Traditional & Tech Day 1",
            events: [
                "Battle of Tradition",
                "Face Painting",
                "Poster Making",
                "Treasure Hunt",
                "Open Mic",
                "Street Dance",
                "Micro Code",
                "Tech Quiz",
                "BGMI",
                "Code-O-Quick",
                "Feeling Se Reeling"
            ],
            color: "from-[var(--antaragni-primary)] to-[var(--color-primary)]"
        },
        {
            day: "Day 2",
            date: "Feb 20",
            subtitle: "Theme & Tech Day 2",
            events: [
                "Talent Hunt",
                "Singing (Solo/Duet)",
                "Theme Dance / Folk Dance",
                "Box Cricket",
                "Mobile Pool",
                "Logo Design",
                "Line Follower",
                "Valorant",
                "Tech Showcase",
                "Ludo King",
                "Strategic Trade",
                "Clash Royale"
            ],
            color: "from-[var(--antaragni-secondary)] to-[var(--antaragni-primary)]"
        },
        {
            day: "Day 3",
            date: "Feb 21",
            subtitle: "Retro & Tech Day 3",
            events: [
                "Fashion Show",
                "Wall Painting",
                "Global Street Master Chef",
                "UNO",
                "Tower Making"
            ],
            color: "from-[var(--technorion-primary)] to-[var(--technorion-secondary)]"
        }
    ]
};

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
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-700 to-red-600 px-4">
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
                            ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/30"
                            : "bg-white text-gray-500 hover:text-red-500 border border-gray-200"
                            }`}
                    >
                        Parakram
                    </button>
                    <button
                        onClick={() => { setActiveMainTab("antaragni"); setActiveDayIndex(0); }}
                        className={`w-full sm:w-auto px-6 py-3 md:px-8 rounded-full text-lg md:text-xl font-bold transition-all transform hover:scale-105 active:scale-95 ${activeMainTab === "antaragni"
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                            : "bg-white text-gray-500 hover:text-blue-500 border border-gray-200"
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
                            <h3 className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${activeDay.color} inline-block pb-2 border-b-2 border-gray-100`}>
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
