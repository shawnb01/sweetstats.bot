import * as React from "react";

import { DialogProps } from "@radix-ui/react-alert-dialog";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { File, Laptop, Moon, SunMedium, User, Users } from "lucide-react";
import { navItems } from "@/config/nav";
import { useAuth } from "@clerk/nextjs";

export default function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { isSignedIn } = useAuth();
  const { setTheme } = useTheme();
  const data = {
    guardians: [
      {
        name: "Guardian 1",
        id: 1,
      },
      {
        name: "Guardian 2",
        id: 2,
      },
      {
        name: "Guardian 3",
        id: 3,
      },
      {
        name: "Guardian 4",
        id: 4,
      },
      {
        name: "Guardian 5",
        id: 5,
      },
      {
        name: "Guardian 6",
        id: 6,
      },
    ],
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search SweetStats...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search SweetStats..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {/* Nav bar options listed */}
            {navItems.mainNav.map((link) => {
              if (link.signInRequired && !isSignedIn) {
                return null;
              } else {
                return (
                  <CommandItem
                    key={link.name}
                    onSelect={() => runCommand(() => router.push(link.path))}
                  >
                    <File className="mr-2 h-4 w-4" />
                    {link.name}
                  </CommandItem>
                );
              }
            })}
          </CommandGroup>
          {/* Add functionality to search guardians currently in database and upon loading their page update stats */}
          <CommandGroup heading="Leaderboard">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/guardians"))}
            >
              <Users className="mr-2 h-4 w-4" />
              All Guardians
            </CommandItem>
            {/* Get top 10 guardians as a quick link */}
            {data &&
              data.guardians.map((guardian) => {
                return (
                  <CommandItem
                    key={guardian.id}
                    onSelect={() =>
                      runCommand(() => router.push(`/guardians/${guardian.id}`))
                    }
                  >
                    <User className="mr-2 h-4 w-4" />
                    {guardian.name}
                  </CommandItem>
                );
              })}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunMedium className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
