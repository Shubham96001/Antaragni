"use client";

import { motion } from "framer-motion";
import { FaDownload, FaBookOpen } from "react-icons/fa";

import { useState } from "react";

export default function UdanPage() {
    const [showPdf, setShowPdf] = useState(false);
    return (
        <div className="min-h-screen w-full pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto text-black bg-white">
            <div className="flex flex-col md:flex-row items-center gap-12 mt-10">

                {/* Magazine Cover */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="relative w-[300px] h-[420px] md:w-[400px] md:h-[560px] group perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-r-2xl rounded-l-md blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-full h-full bg-gray-900 border-l-4 border-white/20 rounded-r-2xl rounded-l-sm shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-[-10deg] group-hover:scale-105 origin-left">
                            {/* Cover Image Placeholder */}
                            <img
                                src="events/UDANCover.png"
                                alt="UDAN Magazine Cover"
                                className="w-full h-full object-cover opacity-80"
                            />

                            {/* <div className="absolute top-10 left-0 w-full text-center bg-black/60 backdrop-blur-sm py-4">
                                <h1 className="text-5xl font-bold tracking-[0.2em] font-serif text-white">UDAN</h1>
                                <p className="text-sm uppercase tracking-widest text-gray-300">The Official Magazine</p>
                            </div> */}

                            <div className="absolute bottom-10 right-10">
                                <p className="text-xl font-bold text-white/80">2026 Edition</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Chronicles of <br />
                        <span className="text-[#8a4bcd]">Creativity</span> & <span className="text-[#5A189A]">Innovation</span>
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        **UDAN** is the literary heartbeat of Antaragni. It captures the essence of the festival, featuring student artwork, poetry, technical articles, and behind-the-scenes stories of the Saga Spectrum.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            onClick={() => setShowPdf(!showPdf)}
                            className="flex items-center justify-center gap-3 bg-[#7B2CBF] text-white px-8 py-4 rounded-full font-bold hover:bg-[#5A189A] transition-colors shadow-lg"
                        >
                            <FaBookOpen />
                            {showPdf ? "Close Reader" : "Read Online"}
                        </button>
                        <a
                            href="/events/UDAN2025-DxvGWi_G.pdf"
                            download="UDAN_Magazine_2026.pdf"
                            className="flex items-center justify-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors shadow-lg"
                        >
                            <FaDownload />
                            Download PDF
                        </a>
                    </div>

                    {/* PDF Viewer */}
                    {showPdf && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 w-full h-[600px] border-2 border-gray-200 rounded-xl overflow-hidden shadow-2xl"
                        >
                            <iframe
                                src="/events/UDAN2025-DxvGWi_G.pdf"
                                className="w-full h-full"
                                title="UDAN Magazine Viewer"
                            ></iframe>
                        </motion.div>
                    )}
                </motion.div>

            </div>
        </div>
    );
}
