import { useSession } from "@clerk/nextjs";

export default function Dashboard() {
  const { session } = useSession();

  console.log(session);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
