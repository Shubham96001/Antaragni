import parakramEvents from "@/data/events/parakram.json";
import antaragniEvents from "@/data/events/antaragni.json";
import technorionEvents from "@/data/events/technorion.json";

// Helper to normalize strings for comparison
export const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

// Combine all event data
export const allEventsData = [...parakramEvents, ...antaragniEvents, ...technorionEvents];

export const getEventDetails = (eventName) => {
    // Try to find exact match or partial match
    const normalizedName = normalize(eventName);
    const event = allEventsData.find(e => normalize(e.name).includes(normalizedName) || normalizedName.includes(normalize(e.name)));
    return event || {};
};
