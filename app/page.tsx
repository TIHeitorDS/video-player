"use client";

import { useRef, useState } from "react";

import { Play } from "lucide-react";
import { Pause } from "lucide-react";
import { Volume2 } from "lucide-react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handlePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    setVolume(parseFloat(e.target.value));

    videoRef.current.volume = volume;
  };

  return (
    <div className="h-screen bg-black flex items-start pt-6 lg:items-center justify-center">
      <main className="lg:h-3/4 w-11/12 rounded-lg overflow-hidden relative group bg-[#1e1e1e]">
        <video ref={videoRef} className="w-full h-full">
          <source src="video.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 z-50 h-12 px-6 group-hover:opacity-100 opacity-0 transition-opacity duration-200 bg-black/30 w-full flex items-center">
          <p className="font-bold text-white text-xl tracking-wide">BLEACH</p>
        </div>

        <div className="flex justify-between items-center bg-black/30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 w-full absolute z-50 bottom-0 h-12 px-6">
          <button
            onClick={handlePlay}
            type="button"
            className=" h-6.5 w-6.5 cursor-pointer"
            tabIndex={-1}
          >
            {isPlaying ? <Pause color="#39FF14" /> : <Play color="#39FF14" />}
          </button>

          <div className="flex items-center gap-x-3.5">
            <button type="button">
              <Volume2 color="#39FF14" />
            </button>

            <input
              type="range"
              name="volume"
              id="volume"
              min="0"
              max="1"
              value={volume}
              step="0.01"
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
