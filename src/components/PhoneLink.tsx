import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

type Props = {
  className?: string;
  iconClassName?: string;
  label?: string;
  showLabel?: boolean;
};

/** Consistent click-to-call link used across the site. */
export function PhoneLink({
  className = "",
  iconClassName = "h-4 w-4",
  label,
  showLabel = true,
}: Props) {
  return (
    <a
      href={site.phone.href}
      className={className}
      aria-label={`Call or text ${site.legalName} at ${site.phone.display}`}
      data-cta="call"
    >
      <PhoneIcon className={iconClassName} />
      {showLabel && <span>{label ?? site.phone.display}</span>}
    </a>
  );
}
