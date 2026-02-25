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
import ISASIndia from "../../assets/ISASIndia.jpeg";
import Water from "../../assets/water stall.jpeg";
import JBEducation from "../../assets/JBEducation.png";
import shubis_mocktail from "../../assets/shubis mocktail1.jpeg";
import Aaynaa from "../../assets/Aaynaa.jpeg";
import aelin from "../../assets/aelin.jpeg";
import yamini_imitation_jewellry from "../../assets/yamini imitation jewellry.png";
import BakkerBros from "../../assets/BakkerBros.jpeg"
import burgerSingh from "../../assets/burgerSingh.jpeg"

const sponsors = {
    titleSponsor: [
        { name: "SHAH OVERSEAS", src: ShahOverseas },
    ],

    stylePartner: [
        { name: "ISAS INDIA", src: ISASIndia },
    ],

    educationPartner: [
        { name: "GEEBEE EDUCATION", src: JBEducation },
    ],

    inAssociationWith: [
        { name: "S V SOLAR", src: SVsolar },
        { name: "JBL", src: JBL },
        { name: "S S INFOTECH", src: SSInfotech },
        { name: "BALAJI BAGS", src: BalajiBags },
        { name: "ANANTAKA BAG", src: Anantika },
        { name: "AKANSHA JEWELLERY", src: AkanshaJwellery },
        { name: "AAYNAA PRODUCTS", src: Aaynaa },
        { name: "AELIN", src: aelin },
        { name: "YAMINI IMITATION JEWELLRY", src: yamini_imitation_jewellry },
    ],

    foodSponsor: [
        { name: "HOUSE OF CHAAP", src: hoc },
        { name: "KWICK COFFEE", src: KwickCoffee },
        { name: "HYDRATED HUB", src: Water },
        { name: "BURGER SINGH", src: burgerSingh },
        { name: "BAKKER BROS", src: BakkerBros },

    ],
};

export default function SponsorsPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const renderSection = (title, data) => (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
        >
            <h2 className="text-xl md:text-4xl font-bold mb-6 md:mb-10">{title}</h2>
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
                {data.map((sponsor, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center w-32 md:w-72 bg-gray-50 backdrop-blur-lg border border-orange-600/20 rounded-2xl p-2 md:p-6 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={sponsor.src?.src || sponsor.src}
                            alt={sponsor.name}
                            className="w-full h-16 md:h-40 object-contain rounded-lg mb-2 md:mb-4 transition-all duration-500 bg-white"
                        />
                        <p className="text-[18px] md:text-lg font-bold text-center normal-case text-gray-900 tracking-tight leading-tight px-1 break-words w-full">
                            {sponsor.name}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );

    return (
        <div className="min-h-screen w-full pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto text-black bg-white text-center">
            {/* Header */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="mb-16"
            >
                <h1 className="text-3xl md:text-7xl font-bold mb-6 bg-clip-text text-black">
                    Our Partners
                </h1>
                <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
                    The pillars of strength behind the grand saga of Antaragni.
                </p>
            </motion.div>


            {renderSection("Powered By", sponsors.titleSponsor)}
            {renderSection("Style Partner", sponsors.stylePartner)}
            {renderSection("Education Partner", sponsors.educationPartner)}
            {renderSection("In Association With", sponsors.inAssociationWith)}
            {renderSection("Food & Beverage Partners", sponsors.foodSponsor)}
        </div>
    );
}