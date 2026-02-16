"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlay, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTrophy } from "react-icons/fa";
import { schedule } from "@/data/schedule";
import { getEventDetails } from "@/utils/eventHelpers";

export default function LiveEventFeature({ compact = false }) {
    const [activeEvent, setActiveEvent] = useState(null);
    const [eventStatus, setEventStatus] = useState("loading"); // 'live', 'upcoming', 'none'
    const [timeRemaining, setTimeRemaining] = useState("");

    useEffect(() => {
        const calculateActiveEvent = () => {
            const now = new Date();
            const currentYear = now.getFullYear();
            const allScheduledEvents = [];

            // Helper to parse time string "9:30 AM" or "3:30 PM - 5:30 PM"
            const parseTime = (dateStr, timeStr) => {
                if (!timeStr) return null;

                // Extract start time (part before "-")
                const startTimePart = timeStr.split("-")[0].trim();
                const startDateTimeString = `${dateStr}, ${currentYear} ${startTimePart}`;
                const startDate = new Date(startDateTimeString);

                let endDate;
                if (timeStr.includes("-")) {
                    const endTimePart = timeStr.split("-")[1].trim();
                    const endDateTimeString = `${dateStr}, ${currentYear} ${endTimePart}`;
                    endDate = new Date(endDateTimeString);
                } else {
                    // Default duration 2 hours if no end time specified
                    endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
                }

                return { start: startDate, end: endDate };
            };

            // Process all events from the schedule
            Object.entries(schedule).forEach(([category, days]) => {
                days.forEach(day => {
                    day.events.forEach(eventName => {
                        const details = getEventDetails(eventName);
                        if (details && details.name) {
                            // Use the date from the schedule (e.g., "Feb 15"), but time from details
                            const timeString = details.details?.time || "9:00 AM"; // Default fallback
                            const times = parseTime(day.date, timeString);

                            if (times && !isNaN(times.start)) {
                                allScheduledEvents.push({
                                    ...details,
                                    displayName: eventName, // Use name from schedule as display name
                                    category,
                                    subtitle: day.subtitle,
                                    start: times.start,
                                    end: times.end,
                                    location: details.details?.venue || "Main Campus"
                                });
                            }
                        }
                    });
                });
            });

            // unique ID for sorting/filtering
            allScheduledEvents.forEach((e, i) => e.idx = i);

            // 1. Check for LIVE events
            const liveEvents = allScheduledEvents.filter(e => now >= e.start && now <= e.end);

            if (liveEvents.length > 0) {
                // If multiple live, pick the one starting latest (most recent) or just first
                setActiveEvent(liveEvents[0]);
                setEventStatus("live");
            } else {
                // 2. Check for UPCOMING events
                const upcomingEvents = allScheduledEvents
                    .filter(e => e.start > now)
                    .sort((a, b) => a.start - b.start);

                if (upcomingEvents.length > 0) {
                    setActiveEvent(upcomingEvents[0]);
                    setEventStatus("upcoming");

                    // Calculate countdown
                    const diff = upcomingEvents[0].start - now;
                    const hours = Math.floor(diff / (1000 * 60 * 60));
                    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    setTimeRemaining(`Starts in ${hours}h ${minutes}m`);
                } else {
                    setEventStatus("none");
                }
            }
        };

        calculateActiveEvent();
        const interval = setInterval(calculateActiveEvent, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    if (eventStatus === "loading") {
        return (
            <div className={`py-12 relative px-4 md:px-8 ${compact ? 'w-full' : 'max-w-7xl mx-auto'} animate-pulse`}>
                <div className="h-64 bg-gray-200 rounded-3xl"></div>
            </div>
        );
    }

    // Fallback if no active event found - show the first event of the fest as a teaser
    const displayEvent = activeEvent || {
        displayName: "Antaragni",
        subtitle: "The Saga Spectrum",
        description: "Join us for the biggest cultural fest of Central India.",
        bannerImage: "/events/parakram.jpeg",
        location: "GHRCE Campus",
        start: new Date(),
        category: "Fest",
    };

    // Use displayEvent properties
    const { displayName, subtitle, description, bannerImage, location, start, category } = displayEvent;

    // Format time display
    const timeDisplay = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <section className={`py-12 relative px-4 md:px-8 ${compact ? 'w-full' : 'max-w-7xl mx-auto'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 blur-3xl -z-10" />

            <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 bg-red-500`}></span>
                </span>
                <h2 className="font-bold tracking-wider uppercase text-lg md:text-xl">
                    Happening Now
                </h2>
            </div>

            <motion.div
                key={displayName || "default"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`grid ${compact ? 'grid-cols-1' : 'md:grid-cols-2'} gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-primary)]/20 group h-full`}
            >
                {/* Image Section */}
                <div className={`relative ${compact ? 'aspect-video md:aspect-square w-full' : 'h-64 md:h-auto'} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img
                        src={bannerImage || "/events/tech.png"}
                        alt={displayName || "Event"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <span className={`text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-red-600`}>
                            {category || "Event"}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-[var(--color-cream)] relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                        <FaTrophy className="text-9xl text-[var(--color-primary)]" />
                    </div>

                    <h3 className="font-bold mb-2 leading-tight text-3xl md:text-4xl text-[var(--color-primary)]">
                        {displayName}
                    </h3>
                    <p className="text-xl text-[var(--color-primary-light)] font-medium mb-4">
                        {subtitle}
                    </p>

                    <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                        {description || "Join us for this exciting event!"}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                                <FaClock />
                            </div>
                            <div>
                                <span className="block text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Time</span>
                                <span className="text-lg font-semibold text-gray-800">{timeDisplay}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <span className="block text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Location</span>
                                <span className="text-lg font-semibold text-gray-800">{location}</span>
                            </div>
                        </div>
                    </div>

                    {eventStatus === 'live' || true ? ( // Always show button for now as per request/fallback
                        <a
                            href="https://www.youtube.com/@GHRCENAGPUROfficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                        >
                            <FaPlay className="animate-pulse" /> Watch Live Stream
                        </a>
                    ) : (
                        <div className="w-full md:w-auto bg-gray-100 text-gray-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                            <FaCalendarAlt /> Starting Soon
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
