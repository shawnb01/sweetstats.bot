import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "SweetStats",
  description: "Destiny 2 Guardian Leaderboards",
};

export default function Home() {
  const { isSignedIn } = useAuth();

  const dashboardDescription =
    "Manage your server and view your guardians on the SweetStats dashboard.";
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center bg-background text-foreground">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Sweet<span className="text-blue-600">Stats</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <QuickLinkCard
            href="/dashboard"
            title="Dashboard →"
            description={
              isSignedIn
                ? dashboardDescription
                : dashboardDescription + " (Login required)"
            }
          />
          <QuickLinkCard
            href="/docs"
            title="Documentation →"
            description="Learn more about SweetStats and how to use it in your server."
          />
          <QuickLinkCard
            href="/leaderboards"
            title="Leaderboards →"
            description="View the top 100 guardians in the SweetStats database."
          />
          <QuickLinkCard
            href="https://discord.com/api/oauth2/authorize?client_id=341290534318374925&permissions=43024&scope=bot"
            title="Add to server →"
            description="Add SweetStats to your Discord server and start racking and stacking your guardians between each other."
            target="_blank"
          />
        </div>
      </div>
    </main>
  );
}

const QuickLinkCard = ({
  href,
  title,
  description,
  target,
  className,
}: {
  href: string;
  title: string;
  description: string;
  target?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-xs gap-4 rounded-xl bg-zinc-200 p-4 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700",
        className
      )}
    >
      <Link href={href} target={target || "_self"}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="text-lg">{description}</div>
      </Link>
    </div>
  );
};
