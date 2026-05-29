import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  variant?: "before" | "after" | "default";
  priority?: boolean;
}

export default function ProjectImage({
  src,
  alt,
  variant = "default",
  priority = false,
}: ProjectImageProps) {
  const filter =
    variant === "before"
      ? "saturate(0.85) brightness(0.92) contrast(0.95)"
      : undefined;

  return (
    <Image
      className="ba-img"
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 800px) 100vw, 50vw"
      priority={priority}
      style={{ objectFit: "cover", objectPosition: "center", filter }}
    />
  );
}
