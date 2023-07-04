import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { navItems } from "@/config/nav";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const siteName = siteConfig.name.split(" ");

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteName[0]}
          <span className="text-blue-600">{siteName[1]}</span>
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navItems.mainNav.map((item) => {
          return (
            <Link
              href={item.path}
              key={item.name}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.path
                  ? "text-foreground/"
                  : "text-foreground/40"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
