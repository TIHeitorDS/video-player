"use client";

import { useRef, useState } from "react";

import Navbar from "@/ui/navbar";
import VolumeBttn from "@/components/volume-bttn";
import PlayBttn from "@/components/play-bttn";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  return (
    <>
      <Navbar />

      <div className="flex items-start pt-4 lg:items-center flex-wrap px-4">
        <main>
          <div className="relative lg:w-3xl group rounded-sm overflow-hidden">
            <video ref={videoRef} className="w-full h-full">
              <source src="video.mp4" type="video/mp4" />
            </video>

            <div className="flex justify-between items-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 w-full absolute z-50 bottom-0 h-12 p-4">
              <div className="flex items-center gap-4">
                <PlayBttn
                  isPlaying={isPlaying}
                  videoRef={videoRef}
                  setIsPlaying={setIsPlaying}
                />

                <VolumeBttn
                  videoRef={videoRef}
                  volume={volume}
                  setVolume={setVolume}
                />
              </div>
            </div>
          </div>

          <p className="mt-2 text-xl">Bleach</p>
        </main>
      </div>
    </>
  );
}
