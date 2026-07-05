import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  variant?: "before" | "after" | "default";
  priority?: boolean;
  objectPosition?: string;
}

export default function ProjectImage({
  src,
  alt,
  variant = "default",
  priority = false,
  objectPosition = "center",
}: ProjectImageProps) {
  const filter =
    variant === "before"
      ? "saturate(0.85) brightness(0.92) contrast(0.95)"
      : undefined;

  return (
    <div
      className="ba-img-wrap"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Image
        className="ba-img"
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
        priority={priority}
        style={{ objectFit: "cover", objectPosition, filter }}
      />
    </div>
  );
}
