import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
import { Key, MoveRight, UserCircle2 } from "lucide-react";
import { Label } from "./ui/label";

export const SignInDialog = () => {
  const siteName = siteConfig.name.split(" ");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="w-9 px-0 lg:w-24 lg:px-2">
          <span className="hidden lg:inline">Sign In</span>
          <Icons.logIn className="h-4 w-4 lg:ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-xs">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            to continue to{" "}
            <span className="hidden font-bold sm:inline-block">
              {siteName[0]}
              <span className="text-blue-600">{siteName[1]}</span>
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full md:max-w-2xl">
          <SignInOAuthButtons />
        </div>
        <div className="flex items-center justify-center">
          <span className="flex h-[1px] grow justify-start bg-border" />
          <span className="m-4">or</span>
          <span className="flex h-[1px] grow justify-normal bg-border" />
        </div>
        <div>
          <Label htmlFor="email">Username</Label>
          <div className="mb-2 flex w-full flex-row items-center justify-center gap-2">
            <UserCircle2 className="h-4 w-4" />
            <Input placeholder="Username" />
          </div>
          <Label htmlFor="password">Password</Label>
          <div className="flex w-full flex-row items-center justify-center gap-2">
            <Key className="h-4 w-4" />
            <Input
              className="outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="default"
            onClick={() => {
              console.log("Button!");
            }}
          >
            Sign In
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const SignInOAuthButtons = () => {
  const { signIn } = useSignIn();

  if (!signIn) {
    return null;
  }

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: `/SSOCallback`,
      redirectUrlComplete: "/",
    });
  };

  return (
    <div className="w-full">
      <Button
        className="group w-full flex-row justify-start"
        variant="secondary"
        onClick={() => signInWith("oauth_discord")}
      >
        <Icons.discord className="mr-2 h-4 w-4" color={"#5865F2"} />
        <span className="m-auto">Sign in with Discord</span>
        <MoveRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-50" />
      </Button>
    </div>
  );
};
