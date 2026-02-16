"use client";

import PrismHero from "@/components/hero/PrismHero";
import EventCategories from "@/components/sections/EventCategories";
import EventTimeline from "@/components/home/EventTimeline";
import LiveEventFeature from "@/components/home/LiveEventFeature";
import ChiefGuest from "@/components/home/ChiefGuest";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
            <PrismHero />
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 mt-10 mb-10 px-4">
                <LiveEventFeature compact={true} />
                <ChiefGuest />
            </div>
            <EventCategories />
            <EventTimeline />
        </div>
    );
}
