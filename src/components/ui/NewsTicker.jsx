

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const newsItems = [
    "🔴 LIVE NOW: Antaragni Main Stage - Click here to watch!",
    "🚀 Welcome to the new official website of Antaragni 2026!",
    "📅 Parakram 2026 starts Feb 14th - Don't miss the inauguration!",
    "🏆 Antaragni & Technorion registration closing soon.",
    "📢 Hackathon begins Feb 18th at the Library."
];

export default function NewsTicker() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <Link href="/live" className="block relative z-50">
            <div
                className="bg-[var(--color-primary)] text-white overflow-hidden py-3 border-b border-white/10 cursor-pointer hover:bg-[var(--color-primary-dark)] transition-colors"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex whitespace-nowrap">
                    {/* CSS Animation Track for reliable Pause on Hover */}

                    {/* Let's discard the Framer Motion specific approach for the track and use standard CSS for reliable "Pause on Hover" */}
                    <div
                        className={`flex gap-16 animate-infinite-scroll ${isPaused ? 'paused' : ''}`}
                        style={{
                            animation: `ticker 30s linear infinite`,
                            animationPlayState: isPaused ? 'paused' : 'running',
                            width: 'max-content'
                        }}
                    >
                        {[...newsItems, ...newsItems, ...newsItems, ...newsItems].map((item, index) => (
                            <span key={index} className="text-sm md:text-base font-medium tracking-wide flex items-center gap-2 px-4">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_8px_var(--color-accent)]"></span>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline styles for the custom keyframe if not in globals.css */}
            <style jsx global>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                    /* We duplicate content 4x, so -50% might be safe if we ensure enough width. 
                       Actually, if we have 2 sets of items visible at once, we scroll 1 set width.
                       Let's assume the mapped content is long enough. 
                       Better: translateX(-50%) assumes the content is duplicated exactly once to fill space.
                       We mapped it 4x. moving -25% would be one full set.
                    */
                }
                .paused {
                    animation-play-state: paused !important;
                }
            `}</style>
        </Link>
    );
}