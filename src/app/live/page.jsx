"use client";

import { motion } from "framer-motion";

export default function LivePage() {
    // REPLACE THIS WITH ACTUAL LIVE STREAM ID
    const YOUTUBE_VIDEO_ID = "ZjNzLjInhIk";

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Antaragni 2026 Live Stream',
                text: 'Watch Antaragni 2026 Live from GHRCEN Auditorium!',
                url: window.location.href,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4 max-w-5xl mx-auto">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="relative flex h-3 w-3">
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
                            </span>
                            <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">Stream Ended</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
                            Live streaming ended
                        </h1>
                    </div>
                    <button
                        onClick={handleShare}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 group"
                    >
                        <span>Share Page</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </button>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Video Player Section - Now showing "Ended" message */}
                    <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl relative group mb-8 flex flex-col items-center justify-center p-8 text-center">
                        <div className="mb-6 opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2"></line>
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Live streaming ended</h2>
                        <p className="text-gray-400 text-lg max-w-md mx-auto">
                            Thank you for watching! Explore the official YouTube channel <span className="text-white font-semibold">@GHRCENAGPUROfficial</span> for more content.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="https://www.youtube.com/@GHRCENAGPUROfficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-3 shadow-lg hover:shadow-red-900/20"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            Explore Official YouTube Channel
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
