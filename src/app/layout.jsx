import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import NewsTicker from "@/components/ui/NewsTicker";



const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

const nunito = Nunito_Sans({
    variable: "--font-nunito",
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
    title: "Antaragni 2026 | GHRCEN",
    description: "Official website of Antaragni 2026, cultural festival of GHRCEN.",
    metadataBase: new URL('https://antaragni.raisoni.net/'), // Replace with your actual domain
    keywords: ["Antaragni", "GHRCEN", "Cultural Festival", "Technorion", "Parakram", "Nagpur", "College Fest"],
    authors: [{ name: "GHRCEN" }],
    icons: {
        icon: '/AT.png',
        apple: '/AT.png',
    },
    openGraph: {
        title: "Antaragni 2026 | GHRCEN",
        description: "Official website of Antaragni 2026, cultural festival of GHRCEN.",
        url: "https://antaragni.raisoni.net/",
        siteName: "Antaragni 2026",
        images: [
            {
                url: "/AT.png",
                width: 800,
                height: 600,
                alt: "Antaragni 2026 Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Antaragni 2026 | GHRCEN",
        description: "Official website of Antaragni 2026, cultural festival of GHRCEN.",
        images: ["/AT.png"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${nunito.variable} ${poppins.variable} antialiased bg-white text-black min-h-screen flex flex-col font-sans`}
            >
                {/* Fixed Header Stack: NewsTicker -> Navbar */}
                <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
                    <NewsTicker />
                    <Navbar />
                </div>

                {/* Main Content with padding to account for fixed header */}
                <main className="flex-grow pt-[145px]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
