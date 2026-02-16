import { notFound } from "next/navigation";
import EventClient from "./EventClient";

// Import your data
import antaragniEvents from "@/data/events/antaragni.json";
import technorionEvents from "@/data/events/technorion.json";
import parakramEvents from "@/data/events/parakram.json";

// Helper to find event logic
function getEventData(category, slug) {
    let events = [];
    if (category === "antaragni") events = antaragniEvents;
    else if (category === "technorion") events = technorionEvents;
    else if (category === "parakram") events = parakramEvents;

    return events.find((e) => e.slug === slug);
}

// This function now runs correctly at build time!
export async function generateStaticParams() {
    const paths = [];

    antaragniEvents.forEach((event) => {
        paths.push({ category: "antaragni", slug: event.slug });
    });

    technorionEvents.forEach((event) => {
        paths.push({ category: "technorion", slug: event.slug });
    });

    parakramEvents.forEach((event) => {
        paths.push({ category: "parakram", slug: event.slug });
    });

    return paths;
}

export default async function EventDetailPage({ params }) {
    // In Next.js 15, params is a Promise. We await it here on the server.
    const resolvedParams = await params;
    const { category, slug } = resolvedParams;

    const event = getEventData(category, slug);

    if (!event) {
        return notFound();
    }

    // Pass data to the Client Component
    return <EventClient event={event} category={category} />;
}