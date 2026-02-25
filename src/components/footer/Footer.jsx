"use client";

import Link from "next/link";
import config from "@/data/config.json";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";


export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [visits, setVisits] = useState(0);

    return (
        <footer className="relative bg-[var(--color-footer-bg)] text-[var(--color-text-muted)] text-sm overflow-hidden border-t border-[var(--color-border)]/10">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Brand Column */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-4">
                            <img src="/events/SRClogo.png" alt="SRC Logo" className=" w-24 h-24 object-contain bg-white/5 p-2 rounded-xl border border-white/10" />
                            <div>
                                <h3 className="event-title text-[var(--color-text-inverted)] font-bold text-2xl leading-none">{config.festivalName}</h3>
                                <p className=" event-title text-sm text-[var(--color-primary-light)] font-medium tracking-wide mt-1">Experience the Legacy</p>
                            </div>
                        </div>
                        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-[250px]">
                            {config.tagline}
                        </p>
                        <div className="flex gap-3 pt-2">
                            {[
                                { icon: FaInstagram, link: "https://www.instagram.com/src.ghrce/" },
                                { icon: FaFacebook, link: "https://www.facebook.com/GHRCE.Official/" },
                                { icon: FaTwitter, link: "https://x.com/ghrce_nagpur" },
                                { icon: FaYoutube, link: "https://www.youtube.com/@RaisoniWorld" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1"
                                >
                                    <social.icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Link Column 1 */}
                    <div>
                        <h4 className=" event-title text-[var(--color-text-inverted)] font-bold mb-4 text-xs uppercase tracking-wider">Festival</h4>
                        <ul className="space-y-2">
                            {['Events', 'Gallery', 'Sponsors'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)] group-hover:bg-[var(--color-accent)] transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Link Column 2 */}
                    <div>
                        <h4 className="event-title text-[var(--color-text-inverted)] font-bold mb-4 text-xs uppercase tracking-wider">Info</h4>
                        <ul className="space-y-2">
                            {['About', 'Contact', 'UDAN'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Team' ? '/about#team' : `/${item.toLowerCase().replace(' ', '')}`}
                                        className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)] group-hover:bg-[var(--color-accent)] transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="event-title text-[var(--color-text-inverted)] font-bold mb-4 text-xs uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3 text-xs">
                            <li className="flex gap-3">
                                <FaMapMarkerAlt className="text-[var(--color-primary-light)] shrink-0 mt-0.5" />
                                <span>{config.collegeName}, {config.address.city}</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <FaPhone className="text-[var(--color-primary-light)] shrink-0" />
                                <a href={`tel:${config.contact[0].phone}`} className="hover:text-[var(--color-text-inverted)] transition-colors">
                                    {config.contact[0].phone}
                                </a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <FaEnvelope className="text-[var(--color-primary-light)] shrink-0" />
                                <a href={`mailto:${config.contact[0].email}`} className="hover:text-[var(--color-text-inverted)] transition-colors">
                                    {config.contact[0].email}
                                </a>
                            </li>
                            <li className="pt-2">
                                <div className="bg-white rounded px-3 py-1 inline-flex items-center gap-2">

                                    <img
                                        src="https://hits.sh/src-ghrce.vercel.app.svg?style=flat-square&label=visits&color=000&labelColor=fff"
                                        alt="Visitor Counter"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {currentYear} {config.collegeName}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
