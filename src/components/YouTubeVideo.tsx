import { formatDate } from "@lib/utils";

type Props = {
  title: string;
  date: Date;
  location?: string;
  videoUrl: string;
  description?: string;
};

const YouTubeVideo = ({ title, date, location, videoUrl }: Props) => {
  const extractVideoId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^&]+)/
    );
    if (match) {
      return match[1] || match[2];
    }
    return "";
  };

  const videoId = extractVideoId(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      <div class="grid grid-cols-1 grid-rows-3 md:grid-rows-7 border w-auto h-full rounded-lg shadow-lg p-4 items-center group border-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out group-hover:text-black group-hover:dark:text-white blend">
        <div class="text-sm uppercase text-center">
          {formatDate(date)}
          {location && ` • ${location}`}
        </div>
        <div class="row-span-2 font-semibold text-center">{title}</div>
        <img
          class="row-span-4 w-full h-auto rounded-lg shadow-lg"
          src={thumbnailUrl}
          alt="YouTube Video Thumbnail"
        />
      </div>
    </a>
  );
};

export default YouTubeVideo;
