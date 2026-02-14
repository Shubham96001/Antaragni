"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const categories = [
    {
        id: "parakram",
        name: "PARAKRAM",
        subtitle: "Sports Events",
        count: "16 Events",
        description: "Athletics, Team Sports & E-Sports",
        color: "white",
        gradient: "white",
        image: "/events/parakram.jpeg",
    },
    {
        id: "technorion",
        name: "TECHNORION",
        subtitle: "Technical Events",
        count: "19 Events",
        description: "Coding, Robotics, Gaming & Innovation",
        color: "white",
        gradient: "white",
        image: "/events/hackathon.jpg",
    },

    {
        id: "antaragni",
        name: "ANTARAGNI",
        subtitle: "Cultural Events",
        count: "14 Events",
        description: "Dance, Music, Drama & Art",
        color: "white",
        gradient: "white",
        image: "/events/theme-dance.jpeg",
    }
];

export default function EventCategories() {
    return (
        <section className="py-32 bg-[var(--color-cream)] relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-bold mb-4">
                        Event Category
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Dive into the world of culture, technology, and sports.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
                    {categories.map((cat, index) => (
                        <Link href={`/events?category=${cat.id}`} key={cat.id} className="block h-full group">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="relative h-[300px] md:h-full w-full rounded-2xl overflow-hidden glass-panel border-0 shadow-2xl shadow-black/20"
                            >
                                {/* Background Image or Video */}
                                {cat.video ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    >
                                        <source src={cat.video} type="video/mp4" />
                                    </video>
                                ) : (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${cat.image.src || cat.image})` }}
                                    />
                                )}

                                {/* Gradient Overlay - Static Contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                        <span
                                            className="inline-block px-3 py-1 rounded-full text-xs font-bold text-black mb-4"
                                            style={{ backgroundColor: cat.color }}
                                        >
                                            {cat.count}
                                        </span>
                                        <h3 className="font-black italic tracking-tighter mb-2 !text-white">
                                            {cat.name}
                                        </h3>
                                        <p className="text-xl font-bold text-white mb-2">
                                            {cat.subtitle}
                                        </p>
                                        <p className="text-white text-sm max-w-xs font-medium leading-relaxed">
                                            {cat.description}
                                        </p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 border border-white/10">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
