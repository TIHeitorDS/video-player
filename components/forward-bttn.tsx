"use client";

import { RotateCw } from "lucide-react";

export default function ForwardBttn({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  // Função para avançar o vídeo em 10 segundos
  const handleForward = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.min(video.currentTime + 10, video.duration);
  };

  return (
    <button
      type="button"
      className="h-9 w-9 cursor-pointer bg-almost-black/70 rounded-full flex justify-center items-center"
      onClick={handleForward}
      tabIndex={-1}
    >
      <RotateCw color="white" width={16} />
    </button>
  );
}
