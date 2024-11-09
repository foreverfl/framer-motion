import React from "react";

type YouTubeEmbedProps = {
  videoId: string; // 유튜브 비디오 ID (예: "dQw4w9WgXcQ")
  height?: string;
  width?: string;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  height = "500px",
  width = "100%",
}) => {
  // src와 title 생성
  const src = `https://www.youtube.com/embed/${videoId}`;
  const title = "YouTube Video";

  return (
    <iframe
      src={src}
      title={title}
      style={{
        width,
        height,
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
        margin: "16px 0",
      }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default YouTubeEmbed;
