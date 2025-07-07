// app/competitions/CtfFeed.js
"use client";

import useSWR from "swr";
import CtfCard from "./CtfCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CtfFeed({ initialCtfs }) {
  const { data: ctfs, error } = useSWR("/api/ctf", fetcher, {
    fallbackData: initialCtfs,
    refreshInterval: 300000,
  });

  if (error)
    return (
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <p className="text-red-400">Failed to load CTF events.</p>
      </div>
    );

  if (!ctfs)
    return (
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ctfs.map((ctf) => (
        <CtfCard key={ctf.id} ctf={ctf} />
      ))}
    </div>
  );
}
