import { SkipBack } from "lucide-react";
export default function BackBttn({
  handleBackVideo,
}: {
  handleBackVideo: () => void;
}) {
  return (
    <button
      type="button"
      className="h-9 w-9 cursor-pointer bg-almost-black/70 rounded-full flex justify-center items-center"
      tabIndex={-1}
      onClick={handleBackVideo}
    >
      <SkipBack color="white" fill="white" width={16} />
    </button>
  );
}
