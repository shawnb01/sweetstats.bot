import { siteConfig } from "@/config/site";
import { MainNav } from "./main-nav";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import ThemeToggle from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import CommandMenu from "./command-menu";
import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";

export const SiteHeader = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
              </div>
            </Link>
            <ThemeToggle />
            {!isSignedIn ? <SignInButton /> : <SignOutButton />}
          </nav>
        </div>
      </div>
    </header>
  );
};
