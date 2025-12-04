"use client";

interface VolumeBttnProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

import { Volume2 } from "lucide-react";

export default function VolumeBttn({
  videoRef,
  volume,
  setVolume,
}: VolumeBttnProps) {
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    setVolume(parseFloat(e.target.value));

    videoRef.current.volume = volume;
  };

  return (
    <div className="flex items-center gap-x-2 group/controls">
      <button
        type="button"
        className="h-9 w-9 cursor-pointer bg-almost-black/70 rounded-full flex justify-center items-center"
      >
        <Volume2 color="white" fill="white" />
      </button>

      <input
        type="range"
        name="volume"
        id="volume"
        min="0"
        max="1"
        value={volume}
        step="0.01"
        className="lg:opacity-0 lg:pointer-events-none lg:group-hover/controls:opacity-100 lg:group-hover/controls:pointer-events-auto transition-opacity lg:duration-200 w-12 lg:w-24"
        onChange={handleVolumeChange}
      />
    </div>
  );
}
