"use client";

import { useEffect, useRef, useState } from "react";

import { videos } from "@/data";
import Navbar from "@/ui/navbar";
import VolumeBttn from "@/components/volume-bttn";
import PlayBttn from "@/components/play-bttn";
import VideoCard from "@/components/video-card";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [videoDuration, setVideoDuration] = useState("00:00");

  const handleFormatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  // Função para alterar a posição do vídeo quando o usuário clica na barra de progresso
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progressBar = progressBarRef.current;

    if (!video || !progressBar) return;

    const rect = progressBar.parentElement!.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;

    video.currentTime = newTime;
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const duration = video.duration;

      setVideoDuration(handleFormatTime(duration));
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentVideo]);

  useEffect(() => {
    const video = videoRef.current;
    const progressBar = progressBarRef.current;

    if (!video || !progressBar) return;

    const handleTimeUpdate = () => {
      const current = video.currentTime;

      setCurrentTime(handleFormatTime(current));
      const progressPercent = (current / video.duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentVideo]);

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

            {/* CONTROLES */}
            <div className="flex flex-col gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 w-full absolute z-50 bottom-0 h-fit ">
              {/* tempo do vídeo */}
              <div>
                <div className="flex justify-between px-1 text-sm">
                  <p>{currentTime}</p>

                  <p>{videoDuration}</p>
                </div>

                {/* barra de progresso */}
                <div className="relative cursor-pointer" onClick={handleProgressBarClick}>
                  <div className="h-1 bg-gray-400 w-full"></div>
                  <div ref={progressBarRef} className="h-1 w-0 bg-red-500 absolute top-0"></div>
                </div>
              </div>

              {/* botões */}
              <div className="flex items-center gap-4 pb-2 px-4">
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
                      setCurrentTime("00:00");
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
