export default function Image({
  src,
  alt,
  className,
  priority = false,
  lazy = false,
}) {
  return (
    <picture>
      <source
        srcSet={src.replace(/\.(png|jpeg|JPEG)$/, ".webp")}
        type="image/webp"
      />
      <img
        className={className}
        src={src}
        alt={alt}
        fetchpriority={priority ? "high" : ""}
        loading={lazy ? "lazy" : ""}
      />
    </picture>
  );
}
