"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";

export default function LiveEventFeature({ compact = false }) {
    // Post-event static content
    const displayEvent = {
        displayName: "Antaragni 2025",
        subtitle: "The Saga Spectrum",
        description: "Antaragni 2026 was a resounding success! We thank all participants, sponsors, and organizers for making this edition truly memorable. Relive the magic through our captured moments.",
        bannerImage: "/events/parakram.jpeg",
        location: "GHRCE Campus",
        category: "Fest Concluded",
    };

    const { displayName, subtitle, description, bannerImage, category } = displayEvent;

    return (
        <section className={`py-12 relative px-4 md:px-8 ${compact ? 'w-full' : 'max-w-7xl mx-auto'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 blur-3xl -z-10" />

            <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
                <h2 className="font-bold tracking-wider uppercase text-lg md:text-xl">
                    Antaragni '25
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`grid ${compact ? 'grid-cols-1' : 'md:grid-cols-2'} gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-primary)]/20 group h-full`}
            >
                {/* Image Section */}
                <div className={`relative ${compact ? 'aspect-video w-full' : 'aspect-video md:aspect-auto md:h-full'} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img
                        src={bannerImage || "/events/tech.png"}
                        alt={displayName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <span className={`text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-purple-600`}>
                            {category}
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

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {description}
                    </p>

                    <Link
                        href="/gallery"
                        className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                    >
                        Explore Event Gallery
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
