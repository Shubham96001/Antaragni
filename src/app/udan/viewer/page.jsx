"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FaArrowLeft, FaDownload } from "react-icons/fa";

const FlipBookViewer = dynamic(() => import("@/components/ui/FlipBookViewer"), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center gap-4 text-white">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="animate-pulse">Loading Viewer...</p>
        </div>
    ),
});

export default function UdanViewerPage() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] flex flex-col pt-4">
            {/* Toolbar */}
            <div className="px-4 md:px-8 py-4 flex items-center justify-between border-b border-white/10">
                <Link
                    href="/udan"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
                >
                    <FaArrowLeft />
                    <span>Back to UDAAN</span>
                </Link>

                <div className="text-white font-bold text-xl tracking-wider">
                    UDAAN <span className="text-purple-500">2026</span>
                </div>

                <a
                    href="/events/UdanMagazine2026.pdf"
                    download
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all text-sm font-bold"
                >
                    <FaDownload />
                    <span className="hidden sm:inline">Download</span>
                </a>
            </div>

            {/* Viewer Area */}
            <div className="flex-grow relative overflow-hidden flex items-center justify-center p-4">
                <FlipBookViewer pdfUrl="/events/UdanMagazine2026.pdf" />
            </div>

            {/* Hint */}
            <div className="py-4 text-center text-white/40 text-xs">
                Use your mouse or swipe to flip pages
            </div>
        </div>
    );
}
