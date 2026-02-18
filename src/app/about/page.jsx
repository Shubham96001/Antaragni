"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHistory, FaUsers, FaLightbulb } from "react-icons/fa";

import sunilji from "../../assets/suniljiraisoni-Bl6duqdx.png";
import shobharaisoni from "../../assets/shobharaisoni2-CQnZ9QrQ.png";
import director from "../../assets/director-DX4IHFhE.png";
import jajulwar from "../../assets/jajulwar3-IL2zNYI5.png";
import sonaliJoshi from "../../assets/sonaliJoshi.png";
import sujeshGhodmare from "../../assets/sujeshGhodmare.jpg";
import abhijeetTitarmare from "../../assets/abhijeetTitarmare.avif";
import gatheringSecratery from "../../assets/gatheringSecratery.jpeg";
import jointGathering from "../../assets/jointGathering.jpeg";
import jointGathering1 from "../../assets/jointGathering1.jpeg";
import jointTechnorion from "../../assets/jointTechnorion.jpeg";
import jointTechnorion1 from "../../assets/jointTechnorion1.jpeg";
import technorionPresident from "../../assets/technorionPresident.jpeg";
import gymkhanaPresident from "../../assets/gymkhanaPresident.jpeg";
import gymkhanaJointPresident from "../../assets/jointGymkhana.jpeg";
import gymkhanaJointPresident1 from "../../assets/jointGymkhana1.jpeg";
import treasurer from "../../assets/treasurer.jpeg";
import shubhamVerma from "../../assets/shubhamVerma.jpeg";
import harshKoku from "../../assets/harshKoku.jpeg";
import surajLakade from "../../assets/surajLakade.png";
import jitendraYadav from "../../assets/jitendraYadav.jpeg";
import soujanyaPoshattiwar from "../../assets/soujanyaPoshattiwar.jpeg";
import nehaKathole from "../../assets/nehaKathole.jpeg";
import manthanBhandari from "../../assets/manthanBhandari.jpeg";
import vaishnaviKharche from "../../assets/vaishnaviKharche.jpg";
import parthYerawar from "../../assets/parthYerawar.jpeg";
import pramodWalke from "../../assets/pramodwalke.jpeg";
import santoshJaju from "../../assets/dr-jaju.jpeg";
import sanjayDorle from "../../assets/sanjaydorle.jpeg";
import atiyamadam from "../../assets/atiyamadam.jpeg"
import umakantKadu from "../../assets/decorationLead.jpeg";
import discipline from "../../assets/disciplineLead.jpeg";
import shreyashraisoni from "../../assets/shreyasraisoni2.png";
import ruchamam from "../../assets/ruchamam.jpeg";
import sharaddhaumate from "../../assets/sharaddhaumate.jpeg";
import socialMediaLead from "../../assets/socialMediaLead.jpeg";

const teamSections = [
  {
    title: "PATRONS",
    members: [
      {
        name: "Shri. Sunilji Raisoni",
        role: "Chairman, RGI",
        image: sunilji,
      },
      {
        name: "Smt. Shobha Raisoni",
        role: "Trustee, RGI",
        image: shobharaisoni,
      },
      {
        name: "Mr. Shreyash Raisoni",
        role: "Executive Director, RGI",
        image: shreyashraisoni,
      },
    ],
  },
  {
    title: " DIRECTOR",
    members: [
      {
        name: "Dr. Sachin Untawale",
        role: "Director, GHRCE",
        image: director,
      },
    ],
  },
  {
    title: " STEERING COMMITTEE",
    members: [
      {
        name: "Dr. Pramod Walke",
        role: "Dy. Director & Dean Academics",
        image: pramodWalke,
      },
      {
        name: "Dr. Santosh Jaju",
        role: "Dy. Director & Dean R&D",
        image: santoshJaju,
      },
      {
        name: "Dr. Sanjay Dorle",
        role: "Registrar",
        image: sanjayDorle,
      },
    ],
  },
  {
    title: " GATHERING INCHARGE",
    members: [
      {
        name: "Dr. Kapil Jajulwar",
        role: "Dean Student Activities Council",
        image: jajulwar,
      },
    ],
  },
  {
    title: "GATHERING CO-INCHARGE",
    members: [
      {
        name: "Dr. Sujesh Ghodmare",
        role: "Asst. Registrar",
        image: sujeshGhodmare,
      },
      {
        name: "Dr. Sonali Joshi",
        role: "Dean IQAC",
        image: sonaliJoshi,
      },
      {
        name: "Dr. Abhijeet Titarmare",
        role: "Asscoiate CoE",
        image: abhijeetTitarmare,
      },
      {
        name: "Dr. Shradha Umate",
        role: "Asst. Prof, EE Dept.",
        image: sharaddhaumate,
      },
    ],
  },
  {
    title: " TREASURER",
    members: [
      {
        name: "Prof. Rucha Jichkar",
        role: "Asst. Prof, ETRX Dept.",
        image: ruchamam,
      },
    ],
  },
  {
    title: " OFFICE BEARERS",
    members: [
      {
        name: "Devanshi Baraskar",
        role: "Gathering Secretary",
        image: gatheringSecratery,
      },
      {
        name: "Nandini Kakde",
        role: "Joint Gathering Secretary",
        image: jointGathering,
      },
      {
        name: "Tanish Tawri",
        role: "Joint Gathering Secretary",
        image: jointGathering1,
      },
      {
        name: "Soham Kale",
        role: "Technorion President",
        image: technorionPresident,
      },
      {
        name: "Abhijeet Gour",
        role: "Joint Technorion President",
        image: jointTechnorion,
      },
      {
        name: "Suyog Aware",
        role: "Joint Technorion President",
        image: jointTechnorion1,
      },
      {
        name: "Sanika Guru",
        role: "Gymkhana President",
        image: gymkhanaPresident,
      },
      {
        name: "Shreyash Shriwas",
        role: "Joint Gymkhana President",
        image: gymkhanaJointPresident,
      },
      {
        name: "Tanmay Khode",
        role: "Joint Gymkhana President",
        image: gymkhanaJointPresident1,
      },
      {
        name: "Vrutant Ratnapure",
        role: "Social Media Head",
        image: socialMediaLead,
      },
      {
        name: "Umakant Kadu",
        role: "Decoration Lead",
        image: umakantKadu,
      },
      {
        name: "Kavya Jaipurkar ",
        role: "Discipline Lead",
        image: discipline,
      },
      {
        name: "Himanshi Joshi",
        role: "Treasurer",
        image: treasurer,
      },
    ],
  },
  {
    title: "WEB DEVELOPMENT INCHARGE",
    members: [
      {
        name: "Dr. Atiya Khan",
        role: "Web Master",
        image: atiyamadam,
      },
    ],
  },
  {
    title: "Web Development Team",
    members: [
      {
        name: "Shubham Verma",
        role: "Web Developer Lead",
        image: shubhamVerma,
      },
      {
        name: "Harsh Koku",
        role: "Web Developer",
        image: harshKoku,
      },
      {
        name: "Suraj Lakade",
        role: "Web Developer & Designer",
        image: surajLakade,
      },

      {
        name: "Soujanya Poshattiwar",
        role: "Web Developer & Version Control",
        image: soujanyaPoshattiwar,
      },
      {
        name: "Neha Kathole",
        role: "Web Designer",
        image: nehaKathole,
      },
      {
        name: "Jitendra Yadav",
        role: "Web Designer",
        image: jitendraYadav,
      },
      {
        name: "Vaishnavi Kharche",
        role: "Web Designer",
        image: vaishnaviKharche,
      },
      {
        name: "Parth Yerawar",
        role: "Web Developer",
        image: parthYerawar,
      },
      {
        name: "Manthan Bhandari",
        role: "Web Designer",
        image: manthanBhandari,
      },
    ],
  },
];

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen w-full pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto text-black bg-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text   bg-gradient-to-r from-black-700 via-black-600 to-black-500 text-black">
          Antaragni 2026
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl   mx-auto leading-relaxed font-medium ">
          Antaragni is not just a festival, it&apos;s a legacy a spectrum of emotions,
          talent, and culture colliding to create magic.
        </p>
      </motion.section>

      {/* Antaragni Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        {/* ghrce Section */}
        <div className="backdrop-blur-md rounded-3xl p-6 md:p-12 border border-purple-200 bg-purple-50/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 hover:scale-102 transform">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 ">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[var(--color-primary)]">About GHRCE</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify font-medium">
                G.H. Raisoni College of Engineering (GHRCE) Nagpur, established in 1996, is an Empowered autonomous institution affiliated to Rashtrasant Tukadoji Maharaj Nagpur University. The institute became Autonomous in 2010 and UGC has renewed autonomous status till 2032. It has been awarded A++ (3.55/4) grade by NAAC during 3 rd cycle in 2023. It is ranked in the band of 201-300 in year 2025 PAN India in Engineering Discipline, as declared by National Institutional Ranking Framework (NIRF) 2025, MoE, Government of India.
              </p>
            </div>
            <div className="md:w-1/2 w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="/videos/ghrcevedio.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Antaragni  Section */}
        <div className="backdrop-blur-md mt-10 rounded-3xl p-6 md:p-12 border border-purple-200 bg-purple-50/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 hover:scale-102 transform">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[var(--color-primary)]">About Antaragni</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify font-medium">
                ANTARAGNI-2026 is the Annual Fest of G. H. Raisoni College of Engineering, taking things to a greater level this year. With competitions in dance, film and photography, music, dramatics, and various technical events with a unique twist, it promises to be an unforgettable event.

                The festival includes events like dancing, singing, and fashion shows. Antaragni, being the cultural part of the gathering, observes the maximum audience participation, starting from day one and concluding with a grand finale featuring a renowned celebrity.
              </p>
            </div>
            <div className="md:w-1/2 w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="/videos/TeaserChangesdone.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Guest video Section */}
        <div className="backdrop-blur-md mt-10 rounded-3xl p-8 md:p-12 border border-purple-200 bg-purple-50/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 hover:scale-102 transform">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[var(--color-primary)]">About Chief Guest</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify font-medium">
                Mr. Rajesh Chitnis is a talented artist, accomplished actor, and creative content creator known for his dynamic presence and artistic excellence. He brings authenticity and passion to every performance and project he undertakes. Through his creative vision and engaging digital content, he continues to inspire and connect with diverse audiences.
              </p>
            </div>
            <div className="md:w-1/2 w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <video className="w-full h-full object-cover" controls playsInline>
                <source src="/videos/Guestvideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </motion.section >

      {/* Team Section */}
      < section className="text-center px-4" >
        {
          teamSections.map((section) => (
            <div key={section.title} className="mb-20">
              <h3 className="text-3xl font-bold text-center mb-10 text-[var(--color-primary)] tracking-tight">
                {section.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {section.members.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-start p-4 text-center  transition-all duration-300 max-w-xs w-full relative group"
                  >
                    {/* Image Container with Gradient */}
                    <div className="relative mb-6 flex justify-center items-center">
                      {/* Glowing Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-purple-600 to-cyan-500 rounded-full blur-2xl opacity-20  transition-all duration-500 scale-125"></div>

                      {/* Image Circle */}
                      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 bg-gray-100">
                        <img
                          src={member.image?.src || member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center  transition-transform duration-700"
                        />
                      </div>
                    </div>

                    <div className="z-10 w-full">
                      <h4 className="font-bold text-xl mb-1 text-black transition-all duration-300">
                        {member.name}
                      </h4>
                      <p className="text-sm font-bold text-gray-500 tracking-wide uppercase transition-colors">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </section >
    </div >
  );
}
