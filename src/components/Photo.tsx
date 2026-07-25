import Image from "next/image";

/**
 * Real photo tile — next/image (auto AVIF/WebP + responsive sizing) inside an
 * aspect-ratio box. Drop-in replacement for <PhotoSlot> where we have a real
 * image. Add `overlay` when text/UI sits on top of the photo.
 */
export function Photo({
  src,
  alt,
  className = "",
  rounded = "rounded-2xl",
  overlay = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  overlay?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-frost-950 ${rounded} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {overlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent"
        />
      )}
    </div>
  );
}
