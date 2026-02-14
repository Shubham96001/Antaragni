"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";

// Mock data for the "Live" event
const LIVE_EVENT = {
    title: "Antaragni Inauguration",
    subtitle: "The Grand Opening of Saga Spectrum",
    time: "NOW LIVE",
    location: "Main Auditorium",
    image: "/events/parakram.jpeg", // Using existing image as placeholder
    description: "Witness the beginning of the biggest cultural fest. Performances, speeches, and the lighting of the torch.",
    status: "live" // 'live' or 'upcoming'
};

export default function LiveEventFeature() {
    return (
        <section className="py-12 relative px-4 md:px-8 max-w-7xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 blur-3xl -z-10" />

            <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h2 className="text-xl font-bold tracking-wider text-[var(--color-primary)] uppercase">Live Event</h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-primary)]/20"
            >
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                        src={LIVE_EVENT.image}
                        alt={LIVE_EVENT.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            {LIVE_EVENT.status === 'live' ? 'Happening Now' : 'Up Next'}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-[var(--color-cream)]">
                    <h3 className="text-3xl md:text-5xl font-bold mb-2 text-[var(--color-primary)] leading-tight">
                        {LIVE_EVENT.title}
                    </h3>
                    <p className="text-xl text-[var(--color-primary-light)] font-medium mb-4">
                        {LIVE_EVENT.subtitle}
                    </p>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {LIVE_EVENT.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <span className="block text-xs uppercase text-gray-400 font-bold tracking-wider">Time</span>
                            <span className="text-lg font-semibold text-gray-800">{LIVE_EVENT.time}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase text-gray-400 font-bold tracking-wider">Location</span>
                            <span className="text-lg font-semibold text-gray-800">{LIVE_EVENT.location}</span>
                        </div>
                    </div>

                    <Link href="/live" className="w-full md:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-[var(--color-accent)]/30 flex items-center justify-center gap-2">
                        <FaPlay /> Watch Stream
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
