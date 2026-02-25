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
                // Desktop needs more space for the fixed nav/toolbar (250px)
                // Mobile needs less space to maximize the view (180px)
                const availableHeight = window.innerHeight - (mobile ? 180 : 250);

                if (!mobile) {
                    // Desktop: Two pages
                    const maxWidth = Math.min(availableWidth - 40, 1200); // Limit max width for luxury feel
                    // For two pages: TotalWidth = Height * (2 / 1.414) = Height * 1.414 approximation
                    const bookWidth = Math.min(maxWidth, availableHeight * 1.414);
                    setWidth(Math.floor(bookWidth / 2));
                    setHeight(Math.floor((bookWidth / 2) * 1.414));
                } else {
                    // Mobile: Single page
                    const maxWidth = availableWidth - 10;
                    const bookWidth = Math.min(maxWidth, availableHeight / 1.414);
                    setWidth(Math.floor(bookWidth));
                    setHeight(Math.floor(bookWidth * 1.414));
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
                    <div className="flex justify-center items-center w-full">
                        <HTMLFlipBook
                            key={isMobile ? 'mobile-view' : 'desktop-view'}
                            width={width}
                            height={height}
                            size="fixed"
                            minWidth={width}
                            maxWidth={width}
                            minHeight={height}
                            maxHeight={height}
                            maxShadowOpacity={0.5}
                            showCover={!isMobile}
                            mobileScrollSupport={true}
                            className="shadow-2xl mx-auto"
                            ref={flipBookRef}
                            startPage={0}
                            drawShadow={true}
                            flippingTime={1000}
                            usePortrait={isMobile}
                            startZIndex={0}
                            autoSize={true}
                            clickEventForward={true}
                            useMouseEvents={true}
                            swipeDistance={30}
                            showPageCorners={true}
                            disableFlipByClick={false}
                        >
                            {pages}
                        </HTMLFlipBook>
                    </div>
                )}
            </Document>

            {numPages && (
                <div className="mt-4 md:mt-6 flex items-center gap-4 md:gap-6">
                    <button
                        onClick={() => flipBookRef.current.pageFlip().flipPrev()}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 md:px-6 md:py-2 rounded-full border border-white/20 transition-all font-bold backdrop-blur-sm text-sm md:text-base"
                    >
                        Prev
                    </button>
                    <div className="text-white/60 font-medium text-xs md:text-sm">
                        Total {numPages}
                    </div>
                    <button
                        onClick={() => flipBookRef.current.pageFlip().flipNext()}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 md:px-6 md:py-2 rounded-full border border-white/20 transition-all font-bold backdrop-blur-sm text-sm md:text-base"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
