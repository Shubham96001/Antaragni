"use client";

import { motion } from "framer-motion";
import ShahOverseas from "../../assets/ShahOverseas.jpeg";
import Anantika from "../../assets/Avantika.jpeg";
import KwickCoffee from "../../assets/KwickCoffee.jpeg";
import SSInfotech from "../../assets/SSInfoTech.jpg";
import JBL from "../../assets/JBL.jpeg";
import BalajiBags from "../../assets/BalajiBags.jpeg";
import hoc from "../../assets/HouseOfChap.jpeg";
import AkanshaJwellery from "../../assets/AkanshaJewellery.jpeg";
import SVsolar from "../../assets/SVsolar.jpg";
import ISASIndia from "../../assets/ISASIndia.jpeg"
import MasterChef from "../../assets/MasterChef.png"
import Water from "../../assets/water.jpg"
import JBEducation from "../../assets/JBEducation.png"


const sponsors = {
    poweredBy: [
        { name: "SHAH Overseas", src: ShahOverseas },
        { name: "S S Infotech", src: SSInfotech },
        { name: "Kwick Coffee", src: KwickCoffee },
        { name: "Balaji Bags", src: BalajiBags },
        { name: "Anantika Bag", src: Anantika },
        { name: "House of Chap", src: hoc },
        { name: "Akansha Jewellery", src: AkanshaJwellery },
        { name: "S V Solar", src: SVsolar },
        { name: "Master Chef", src: MasterChef },
        { name: "Water", src: Water },
        { name: "JBL", src: JBL },
        { name: "JB Education", src: JBEducation },
        { name: "ISAS India", src: ISASIndia },
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
                <div className="flex flex-wrap gap-8 justify-center">
                    {sponsors.poweredBy.map((sponsor, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center w-72 bg-gray-50 backdrop-blur-lg border border-orange-600/20 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={sponsor.src?.src || sponsor.src}
                                alt={sponsor.name}
                                className="w-60 h-40 object-contain rounded-lg mb-4 transition-all duration-500 bg-white"
                            />
                            <h3 className="text-xl font-bold">{sponsor.name}</h3>
                            <p className="text-orange-700/80 font-bold">{sponsor.type}</p>
                        </div>
                    ))}
                </div>
            </motion.section>


        </div>
    );
}
