"use client";

import PrismHero from "@/components/hero/PrismHero";
import EventCategories from "@/components/sections/EventCategories";
import EventTimeline from "@/components/home/EventTimeline";
import LiveEventFeature from "@/components/home/LiveEventFeature";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
            <PrismHero />
            <LiveEventFeature />
            <EventCategories />
            <EventTimeline />
        </div>
    );
}
