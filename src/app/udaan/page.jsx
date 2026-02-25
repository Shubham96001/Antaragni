"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaDownload, FaBookOpen } from "react-icons/fa";

export default function UdanPage() {
    return (
        <div className="min-h-screen w-full pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto text-black bg-white">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-10">
                {/* Magazine Cover */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="relative w-64 h-[358px] md:w-[400px] md:h-[560px] group perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-r-2xl rounded-l-md blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-full h-full bg-gray-900 border-l-4 border-white/20 rounded-r-2xl rounded-l-sm shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-[-10deg] group-hover:scale-105 origin-left">
                            {/* Cover Image Placeholder */}
                            <img
                                src="/events/UDANCover.jpeg"
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
                        **UDAAN** is the literary heartbeat of Antaragni. It captures the essence of the festival, featuring student artwork, poetry, technical articles, and behind-the-scenes stories of the Saga Spectrum.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/udaan/viewer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#7B2CBF] text-white px-8 py-4 rounded-full font-bold hover:bg-[#5A189A] transition-colors shadow-lg"
                        >
                            <FaBookOpen />
                            Read Online
                        </Link>
                        <a
                            href="/events/UdanMagazine2026.pdf"
                            download="UdanMagazine2026.pdf"
                            className="flex items-center justify-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors shadow-lg"
                        >
                            <FaDownload />
                            Download PDF
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Previous Editions Link */}
            <div className="mt-16 text-center border-t border-gray-100 pt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Previous Editions</h3>
                <a
                    href="/events/UDAN2025-DxvGWi_G.pdf"
                    download="UDAN_Magazine_2025.pdf"
                    className="inline-flex items-center gap-2 text-[#7B2CBF] hover:text-[#5A189A] font-bold text-lg hover:underline transition-all"
                >
                    <FaDownload /> Download 2025 Edition
                </a>
            </div>
        </div>
    );
}
