"use client";

import { RotateCcw } from "lucide-react";

export default function RewindBttn({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  // Função para retroceder o vídeo em 10 segundos
  const handleRewind = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(video.currentTime - 10, 0);
  };

  return (
    <button
      type="button"
      className="h-9 w-9 cursor-pointer bg-almost-black/70 rounded-full flex justify-center items-center"
      onClick={handleRewind}
      tabIndex={-1}
    >
      <RotateCcw color="white" width={16} />
    </button>
  );
}
