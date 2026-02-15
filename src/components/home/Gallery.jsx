"use client";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { galleryImages } from "../../data/gallery-images";

const BentoGallery = () => {
    // Card Components
    const ImageCard = ({ src, alt = "Event Image" }) => {
        if (!src) return null;
        return (
            <motion.div whileHover={{ scale: 1.01 }} className="mb-4 break-inside-avoid rounded-[1.5rem] overflow-hidden relative group shadow-lg">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto block object-contain bg-gray-100"
                    loading="lazy"
                />
            </motion.div>
        );
    };

    const TextCard = ({ src, children, className = "" }) => (
        <motion.div whileHover={{ scale: 1.01 }} className={`mb-4 break-inside-avoid relative rounded-[1.5rem] overflow-hidden group shadow-lg ${className}`}>
            {src && (
                <>
                    <img
                        src={src}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover:bg-black/50" />
                </>
            )}
            <div className={`relative z-20 h-full p-6 flex flex-col justify-between min-h-[200px] ${!src ? 'bg-gray-100' : ''}`}>
                {children}
            </div>
        </motion.div>
    );

    const getGalleryContent = () => {
        const images = galleryImages.antaragni || [];

        // Define fixed content cards for the gallery
        const cardInserts = [];

        // Combine text cards and regular images
        const combinedContent = [];
        const imageList = [...images];

        // Strategy: Insert text cards at specific intervals
        const insertionIndices = [0, 2, 4, 7, 9, 12];

        let textCardIndex = 0;
        let imageIndex = 0;

        const totalItems = imageList.length + cardInserts.length;

        for (let i = 0; i < totalItems; i++) {
            if (insertionIndices.includes(i) && textCardIndex < cardInserts.length) {
                combinedContent.push(cardInserts[textCardIndex]);
                textCardIndex++;
            } else if (imageIndex < imageList.length) {
                combinedContent.push(<ImageCard key={`img-${imageIndex}`} src={imageList[imageIndex]} />);
                imageIndex++;
            }
        }

        // Add remaining text cards if any


        // Add remaining images if any
        while (imageIndex < imageList.length) {
            combinedContent.push(<ImageCard key={`img-${imageIndex}`} src={imageList[imageIndex]} />);
            imageIndex++;
        }

        return combinedContent;
    };

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-500 selection:text-white relative overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[#0000ff]/20 transition-colors duration-700" />
                <div className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] rounded-full blur-[120px] bg-[#ff0080]/20 transition-colors duration-700" />
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full blur-[120px] bg-[#00ffff]/20 transition-colors duration-700" />
            </div>

            <div className="relative z-10 mt-10">
                {/* Header Section */}
                <header className="py-12 px-6 container mx-auto flex flex-col items-center text-center">
                    {/* <h1 className="font-bold tracking-tight mb-2 text-6xl">
                        Antaragni 2026
                    </h1> */}
                    {/* <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-black/10 shadow-lg relative">
                        <Image
                            src={ghrcelogo}
                            alt="Antaragni Logo"
                            width={100}
                            height={100}
                            className="object-cover w-full h-full bg-white"
                        />
                    </div> */}
                    <h1 className="font-bold tracking-tight mb-2">
                        Antaragni 2025
                    </h1>
                    <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed mb-8">
                        The biggest Cultural Festival of GHRCE Nagpur <br />
                        Celebrating music, dance, drama, and art !
                    </p>
                </header>

                {/* Masonry Grid */}
                <main className="container mx-auto px-4 md:px-8 pb-20">
                    <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4 animate-in fade-in zoom-in duration-500">
                        {getGalleryContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BentoGallery;
