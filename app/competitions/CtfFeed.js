// app/competitions/CtfFeed.js
"use client";

import useSWR from "swr";
import CtfCard from "./CtfCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CtfFeed({ initialCtfs }) {
  const {
    data: ctfs,
    error,
    mutate,
  } = useSWR("/api/ctf", fetcher, {
    fallbackData: initialCtfs,
    refreshInterval: 300000,
  });

  // Handle loading state
  if (!ctfs) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg text-center col-span-full">
        <p className="text-gray-400">Loading CTF events...</p>
      </div>
    );
  }

  // Handle error or non-array data (e.g., error JSON from API)
  if (error || !Array.isArray(ctfs)) {
    return (
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center col-span-full border border-gray-600">
        <p className="text-red-400 font-semibold mb-4">
          The CTF API is down or failed to load events. It should be back
          shortly!
        </p>
        <button
          onClick={() => mutate()}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Retry Now
        </button>
      </div>
    );
  }

  // Handle empty array (no upcoming events)
  if (ctfs.length === 0) {
    return (
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center col-span-full border border-gray-600">
        <p className="text-gray-300 font-semibold mb-4">
          No upcoming CTFs at this time. Check back soon!
        </p>
        <button
          onClick={() => mutate()}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Refresh
        </button>
      </div>
    );
  }

  // Normal render
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ctfs.map((ctf) => (
        <CtfCard key={ctf.id} ctf={ctf} />
      ))}
    </div>
  );
}
