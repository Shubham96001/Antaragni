"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="bg-[#1a1a1a] shadow-2xl rounded-r-lg overflow-hidden border-l-4 border-white/10" ref={ref} data-density="hard">
            <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40">
                {props.children}
            </div>
        </div>
    );
});

const PDFPage = React.forwardRef((props, ref) => {
    return (
        <div className="bg-white shadow-lg overflow-hidden flex justify-center" ref={ref}>
            <Page
                pageNumber={props.pageNumber}
                width={props.width}
                scale={props.scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
            />
        </div>
    );
});

export default function FlipBookViewer({ pdfUrl }) {
    const [numPages, setNumPages] = useState(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const flipBookRef = useRef(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const mobile = window.innerWidth <= 768;
                setIsMobile(mobile);

                const availableWidth = containerRef.current.offsetWidth;
                const availableHeight = window.innerHeight - 250; // More padding for controls

                if (!mobile) {
                    // Desktop: Two pages
                    const maxWidth = availableWidth - 80;
                    const bookWidth = Math.min(maxWidth, availableHeight * 1.414 * 2);
                    setWidth(bookWidth / 2);
                    setHeight((bookWidth / 2) * 1.414);
                } else {
                    // Mobile: Single page
                    const maxWidth = availableWidth - 20;
                    const bookWidth = Math.min(maxWidth, availableHeight / 1.414);
                    setWidth(bookWidth);
                    setHeight(bookWidth * 1.414);
                }
            }
        };

        updateDimensions();
        // Use a small delay to ensure container dimensions are accurate
        const timer = setTimeout(updateDimensions, 100);

        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
            clearTimeout(timer);
        };
    }, []);

    const pages = [];
    if (numPages) {
        for (let i = 1; i <= numPages; i++) {
            pages.push(
                <PDFPage key={`page_${i}`} pageNumber={i} width={width} />
            );
        }
    }

    return (
        <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center p-2">
            {!numPages && (
                <div className="flex flex-col items-center gap-4 text-white">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="animate-pulse">Loading Magazine...</p>
                </div>
            )}

            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} loading={null}>
                {numPages && (
                    <HTMLFlipBook
                        width={width}
                        height={height}
                        size="fixed"
                        minWidth={width}
                        maxWidth={width}
                        minHeight={height}
                        maxHeight={height}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                        className="shadow-2xl"
                        ref={flipBookRef}
                        startPage={0}
                        drawShadow={true}
                        flippingTime={1000}
                        usePortrait={window.innerWidth < 768}
                        startZIndex={0}
                        autoSize={true}
                    >
                        {pages}
                    </HTMLFlipBook>
                )}
            </Document>

            {numPages && (
                <div className="mt-6 flex items-center gap-6">
                    <button
                        onClick={() => flipBookRef.current.pageFlip().flipPrev()}
                        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/20 transition-all font-bold backdrop-blur-sm"
                    >
                        Previous
                    </button>
                    <div className="text-white/60 font-medium text-sm">
                        Pages {numPages}
                    </div>
                    <button
                        onClick={() => flipBookRef.current.pageFlip().flipNext()}
                        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/20 transition-all font-bold backdrop-blur-sm"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
