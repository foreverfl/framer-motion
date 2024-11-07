import React from "react";

type IFrameEmbedProps = {
  sandboxId: string; // "framer-motion-2-layout-animations-kij8p"
  height?: string;
  width?: string;
};

const IFrameEmbed: React.FC<IFrameEmbedProps> = ({
  sandboxId,
  height = "500px",
  width = "100%",
}) => {
  // src와 title 생성
  const src = `https://codesandbox.io/embed/${sandboxId}?fontsize=14&hidenavigation=1&theme=dark&view=preview&codemirror=1&hidedevtools=1`;

  const title = sandboxId
    .split("-")
    .slice(0, -1) // 마지막 부분 제외
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 첫 글자만 대문자로
    .join(" ");

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
      allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
};

export default IFrameEmbed;
