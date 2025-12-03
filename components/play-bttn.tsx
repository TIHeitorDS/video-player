"use client";

interface PlayBttnProps {
  isPlaying: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

import { Play } from "lucide-react";
import { Pause } from "lucide-react";

export default function PlayBttn({
  isPlaying,
  videoRef,
  setIsPlaying,
}: PlayBttnProps) {
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

  return (
    <button
      onClick={handlePlay}
      type="button"
      className="h-9 w-9 cursor-pointer bg-almost-black/70 rounded-full flex justify-center items-center"
      tabIndex={-1}
    >
      {isPlaying ? (
        <Pause color="white" fill="white" width={16} />
      ) : (
        <Play color="white" fill="white" width={16} />
      )}
    </button>
  );
}
