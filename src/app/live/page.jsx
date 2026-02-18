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
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                            </span>
                            <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Live Now</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
                            Live Streaming.....
                        </h1>
                    </div>
                    <button
                        onClick={handleShare}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 group"
                    >
                        <span>Share Stream</span>
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
                    {/* Video Player Section */}
                    <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl relative group mb-8">
                        {/* Stream Embed */}
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1`}
                            title="Live Stream"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                        {/* Minimal Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white/80 text-sm font-medium">Live from GHRCE Nagpur</p>
                        </div>
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
                            Visit Official GHRCE Channel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
