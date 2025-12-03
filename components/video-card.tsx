import type { Video } from "@/types";
export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="flex gap-4">
      <div className="min-w-36 max-w-36 h-16 rounded-sm overflow-hidden">
        <figure className="h-full w-full">
          <img src={video.thumbnail} alt={video.title} className="w-full"/>
        </figure>
      </div>

      <div className="space-y-1">
        <p>{video.title}</p>
        <p className="text-xs text-white/40">{video.author}</p>
      </div>
    </div>
  );
}
