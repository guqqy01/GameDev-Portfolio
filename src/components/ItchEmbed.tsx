type ItchEmbedProps = {
  uploadId: number | string;
  title: string;
  href: string;
  width?: number;
  height?: number;
  color?: string; // hex without the #
};

export function ItchEmbed({
  uploadId,
  title,
  href,
  width = 960,
  height = 620,
  color = "333333",
}: ItchEmbedProps) {
  return (
    <iframe
      src={`https://itch.io/embed-upload/${uploadId}?color=${color}`}
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
    >
      <a href={href}>{title}</a>
    </iframe>
  );
}

export function ResponsiveItchEmbed({ uploadId, title, href }: ItchEmbedProps) {
  return (
    <div style={{ width: "100%", maxWidth: 960, aspectRatio: "960 / 620" }}>
      <iframe
        src={`https://itch.io/embed-upload/${uploadId}?color=333333`}
        title={title}
        style={{ width: "100%", height: "100%", border: 0 }}
        allowFullScreen
      >
        <a href={href}>{title}</a>
      </iframe>
    </div>
  );
}