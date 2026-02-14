"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen w-full bg-white text-black bg-[radial-gradient(#3C007A_1px,transparent_1px)] [background-size:20px_20px] pt-10">
            <div className="min-h-screen w-full pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Have questions? Reach out to us.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="
                bg-white/80 backdrop-blur-lg
                border border-purple-100
                p-8 rounded-3xl
                relative
                shadow-xl
                hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
                transition-all duration-300"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">College Location</h2>

                        <p className="text-purple-600 font-bold mb-4">
                            G. H. Raisoni College of Engineering
                        </p>

                        {/* Map Container */}
                        <div
                            className="
      w-full h-[350px]
      rounded-xl overflow-hidden
      border border-gray-200
      shadow-inner
    "
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1835199044062!2d79.0034903!3d21.105248399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4954f412ca411%3A0x4fd4cb2d05b49c7d!2sG.%20H.%20Raisoni%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1770207426052!5m2!1sen!2sin"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/80 backdrop-blur-md border border-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Address</h3>
                                <p className="text-gray-600 text-sm font-medium">
                                    GH Raisoni College of Engineering<br />
                                    CRPF Gate No. 3, Hingna Road, Digdoh Hills<br />
                                    Nagpur - 440016<br />
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-md border border-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                    <FaEnvelope size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-1 text-gray-800">Email</h3>
                                <p className="text-gray-600 text-sm font-medium">
                                    src.ghrce@raisoni.net
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-md border border-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all md:col-span-2">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                    <FaPhone size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Contact Us</h3>
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                    <div>
                                        <p className="font-bold text-black">Tanish Tawri</p>
                                        <p className="font-semibold text-purple-700">Joint Gathering Secretory</p>
                                        <p className="text-gray-600 text-sm font-medium">+91-8080908567</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
