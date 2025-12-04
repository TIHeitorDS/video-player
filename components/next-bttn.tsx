import { SkipForward } from "lucide-react";

export default function NextBttn({handleNextVideo}: {handleNextVideo: () => void}) {
  return (
    <button
      type="button"
      className="h-9 w-9 cursor-pointer bg-almost-black/70 rounded-full flex justify-center items-center"
      tabIndex={-1}
      onClick={handleNextVideo}
    >
      <SkipForward color="white" fill="white" width={16} />
    </button>
  );
}
