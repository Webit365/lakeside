import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M2.5 5.5c0-1.1.9-2 2-2h2.2c.5 0 .9.3 1 .8l.9 3.4c.1.4 0 .8-.3 1.1l-1.5 1.4a13 13 0 0 0 5.7 5.7l1.4-1.5c.3-.3.7-.4 1.1-.3l3.4.9c.5.1.8.5.8 1V17c0 1.1-.9 2-2 2A16 16 0 0 1 2.5 5.5Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function SnowIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 2v20M4.5 5.5 12 12l7.5-6.5M4.5 18.5 12 12l7.5 6.5M2 12h20M5 8l2 4-2 4M19 8l-2 4 2 4" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M4 20c0-8 6-14 16-15C19 14 13 20 5 20H4Z" />
      <path d="M9 15c3-2 5-5 6-8" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M2 6.5h11v9H2zM13 9.5h4l3 3v3h-7z" />
      <circle cx="6" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 2.5 4.5 5.5v6c0 4.5 3 8.4 7.5 10 4.5-1.6 7.5-5.5 7.5-10v-6L12 2.5Z" />
      <path d="m8.5 12 2.3 2.3L15.5 9.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M3 21h18M5 21V5l7-2.5V21M12 21V8l7 2.5V21" />
      <path d="M8 8h1M8 11h1M8 14h1M15 13h1M15 16h1" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M3.5 11 12 4l8.5 7M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function MowerIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M2 16h8l2-6h4M2 16v-3h6M20 10h1l1 4v3h-6" />
      <circle cx="6" cy="18.5" r="1.8" />
      <circle cx="18" cy="18.5" r="1.8" />
    </svg>
  );
}

export function SaltIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M7 8h10l-1 12H8L7 8Z" />
      <path d="M8.5 8V5.5h7V8M10 3.5v2M14 3.5v2M12 2.5v3" />
    </svg>
  );
}

export function ShovelIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M14 3l7 7-3 3-7-7 3-3ZM11 6l-7 7v4h4l7-7" />
    </svg>
  );
}

export function SoilIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M3 16h18v4H3zM6 16c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M12 11V6M12 6l2-2M12 6 10 4" />
    </svg>
  );
}

export const serviceIcons = {
  "commercial-snow-plowing": TruckIcon,
  "snow-plowing": SnowIcon,
  "snow-removal": ShovelIcon,
  "salting-de-icing": SaltIcon,
  "lawn-mowing-maintenance": MowerIcon,
  "landscape-design-installation": LeafIcon,
  "property-maintenance": ShieldIcon,
  "spring-fall-cleanups": LeafIcon,
  "topsoil-gravel-grading": SoilIcon,
} as const;
