"use client";

import { useRef, useState } from "react";

import { videos } from "@/data";
import Navbar from "@/ui/navbar";
import VolumeBttn from "@/components/volume-bttn";
import PlayBttn from "@/components/play-bttn";
import VideoCard from "@/components/video-card";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <>
      <Navbar />

      <div className="flex items-start pt-4 flex-wrap px-4 gap-5">
        <main>
          <div className="relative lg:w-2xl max-h-96 flex items-center group rounded-lg bg-black overflow-hidden">
            <video
              key={currentVideo.id}
              ref={videoRef}
              className="w-full h-full"
            >
              <source src={currentVideo.src} type="video/mp4" />
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

          <p className="mt-2 text-xl">{currentVideo.title}</p>
        </main>

        {/* LISTAGEM DE VIDEOS */}
        <aside className="space-y-4">
          <h2 className="text-lg">Videos recomendados</h2>

          <div className="flex flex-col gap-4">
            {/* exibe os videos diferentes do atual */}
            {videos.map(
              (video) =>
                video.id !== currentVideo.id && (
                  <div
                    key={video.id}
                    className="cursor-pointer"
                    onClick={() => {
                      setCurrentVideo(video);
                      setIsPlaying(false);
                    }}
                  >
                    <VideoCard video={video} />
                  </div>
                )
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
