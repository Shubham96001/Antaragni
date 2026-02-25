"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about/" },
        { name: "Events", path: "/events/" },
        { name: "Gallery", path: "/gallery/" },
        { name: "Sponsors", path: "/sponsors/" },
        { name: "UDAAN Magazine", path: "/udan/" },
        { name: "Contact", path: "/contact/" },
    ];

    return (
        <header className="w-full bg-white shadow-sm">

            <div className="w-full container mx-auto px-4 md:px-15">
                <div className="flex items-center justify-between h-20 w-full">


                    <Link href="/" className="relative h-20 w-40 sm:w-40 md:w-60 shrink-0">
                        <Image
                            src="/AT.png"
                            alt="Technorion Antaragni Parakram 2026"
                            fill
                            className="object-contain object-left"
                            priority
                            style={{ filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.1))" }}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${pathname === link.path ? "text-[var(--color-primary)]" : "text-gray-600 hover:text-[var(--color-primary)]"
                                    }`}
                            >
                                {link.name}
                                {pathname === link.path && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 -bottom-2 block w-full h-[3px] bg-gradient-to-r from-purple-600 to-orange-500 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.5)]"
                                    />
                                )}
                            </Link>
                        ))}

                        <Link href="https://ghrce.raisoni.net/" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-20 w-50 lg:h-20 lg:w-50 ">
                                <Image
                                    src="/ghrce-logo-white.jpg"
                                    alt="GHRCE College Logo"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 96px, 108px"
                                />
                            </div>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[var(--color-primary)] focus:outline-none z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 md:hidden bg-white z-40 flex flex-col pt-24"
                    >
                        {/* Links in Mobile Menu */}
                        <div className="flex flex-col items-center justify-center grow space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-2xl font-bold uppercase tracking-tighter ${pathname === link.path ? "text-[var(--color-primary)]" : "text-gray-600"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* FIX 4: Added the College Logo at the bottom of the mobile menu to match your image */}
                        <div className="p-10 flex justify-center border-t border-gray-200">
                            <div className="relative h-16 w-32">
                                <Image
                                    src="/ghrce-logo-white.jpg"
                                    alt="GHRCE College Logo"
                                    fill
                                    className="object-contain"
                                    sizes="128px"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
