"use client";

import { motion } from "framer-motion";
import ShahOverseas from "../../assets/ShahOverseas.jpeg";
import Anantika from "../../assets/Avantika.jpeg";
import KwickCoffee from "../../assets/KwickCoffee.jpeg";
// import SSInfotech from "../../assets/KwickCoffee.jpeg";
import JBL from "../../assets/JBL.jpeg";
import BalajiBags from "../../assets/BalajiBags.jpeg";
import hoc from "../../assets/HouseOfChap.jpeg";
import AkanshaJwellery from "../../assets/AkanshaJewellery.jpeg";


const sponsors = {
    poweredBy: [
        { name: "SHAH Overseas", src: ShahOverseas },
        { name: "Kwick Coffee", src:  KwickCoffee },
        { name: "BalajiBags", src: BalajiBags },
        { name: "Anantika Bag", src:  Anantika },
        { name: "House of Chap", src: hoc },
        { name: "Akansha Jwellery", src: AkanshaJwellery },
        { name: "S.V.Solar", src: "https://picsum.photos/seed/energy/300/150" },
        { name: "Mater chef", src: "https://picsum.photos/seed/energy/300/150" },
        { name: "water", src: "https://picsum.photos/seed/energy/300/150" },
        { name: "JBL", src: JBL },
        { name: "JB Education", src: "https://picsum.photos/seed/energy/300/150" },
        { name: "Lakme Life Style", src: "https://picsum.photos/seed/energy/300/150" },
    ],
};

export default function SponsorsPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen w-full pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto text-black bg-white text-center">
            {/* Header */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-black">
                    Our Partners
                </h1>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    The pillars of strength behind the grand saga of Antaragni.
                </p>
            </motion.div>


            {/* Powered By */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <div className="flex flex-wrap gap-2">
                    {sponsors.poweredBy.map((sponsor, idx) => (
                        <div
                            key={idx}
                            className="w-100 max-w-md bg-gray-50 backdrop-blur-lg border border-orange-600/20 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 hover:scale-100 hover:shadow-2xl"
                        >
                            <img
                                src={sponsor.src?.src || sponsor.src}
                                alt={sponsor.name}
                                className="w-60 h-50 object-cover rounded-lg mb-4 transition-all duration-500"
                            />
                            <h3 className="text-2xl font-bold">{sponsor.name}</h3>
                            <p className="text-orange-700/80 font-bold">{sponsor.type}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            
        </div>
    );
}
