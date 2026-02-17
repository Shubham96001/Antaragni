"use client";

import EventCard from "./EventCard";

export default function EventGrid({ events, title }) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {title && (
                    <h2 className="font-bold mb-10 tracking-tight">
                        {title}
                    </h2>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
