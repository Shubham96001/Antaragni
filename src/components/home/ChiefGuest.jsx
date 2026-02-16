"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChiefGuest() {
    return (
        <section className="py-12 relative px-4 md:px-8 h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 blur-3xl -z-10" />

            <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-purple-400"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
                <h2 className="font-bold tracking-wider uppercase text-lg md:text-xl">
                    Chief Guest
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-primary)]/20 h-full flex flex-col"
            >
                <div className="relative aspect-square w-full overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    {/* Placeholder image - replace with actual image later */}
                    <img
                        src="https://avatar.iran.liara.run/public/boy?username=ChiefGuest"
                        alt="Chief Guest"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                    />
                </div>

                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-[var(--color-cream)] flex-grow">
                    <h3 className="font-bold mb-2 leading-tight text-3xl md:text-4xl text-[var(--color-primary)]">
                        Chief Guest Name
                    </h3>
                    <p className="text-xl text-[var(--color-primary-light)] font-medium mb-4">
                        Designation
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Chief guest of event Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt accusantium nesciunt, ea a assumenda sed in rem tempore eum? Debitis autem veniam fugit pariatur!
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
