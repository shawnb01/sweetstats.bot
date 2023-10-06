import { Icons } from "@/component/icons";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { useDebounce } from "@/lib/utils";
import { api } from "@/utils/api";
import Link from "next/link";
import { useState } from "react";

export default function Guardians() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const debouncedName = useDebounce(name, 500);
  const debouncedCode = useDebounce(code, 500);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof e.target.value !== "string") return;
    if (e.target.value === "") setCode("");
    if (!isNaN(parseInt(e.target.value))) {
      setCode(e.target.value);
    }
  };

  const searchGuardian = () => {};

  return (
    <div className="m-auto flex w-full flex-col">
      <h1>Search for Guardians</h1>
      <div className="flex w-full max-w-2xl items-center space-x-2">
        <Input
          placeholder="Username"
          name="name"
          onChange={(e) => handleNameChange(e)}
          value={name}
          maxLength={32}
        />
        <Input
          type="text"
          placeholder="Code"
          name="code"
          pattern="/[0-9]{4}/g"
          maxLength={4}
          minLength={4}
          onChange={(e) => handleCodeChange(e)}
          value={code}
          className="w-20"
        />
        <Button onClick={() => searchGuardian()}>
          <Icons.search className="h-4 w-4" />
        </Button>
      </div>

      <div>
        <h2>Pre-loaded Guardians</h2>
      </div>
    </div>
  );
}

const GuardianCard = (name: string, code: string) => {
  const { data } = api.guardian.findPlayerByNameAndCode.useQuery({
    name,
    code,
  });

  if (!data) return null;
};
