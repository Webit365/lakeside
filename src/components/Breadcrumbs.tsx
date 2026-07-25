import Link from "next/link";

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: { name: string; href?: string }[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol
        className={`flex flex-wrap items-center gap-1.5 ${
          light ? "text-frost-200" : "text-ink-muted"
        }`}
      >
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={`hover:underline ${
                    light ? "hover:text-white" : "hover:text-pine-700"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={last ? (light ? "text-white" : "text-ink") : ""}
                  aria-current={last ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
