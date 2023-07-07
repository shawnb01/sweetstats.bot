import { api } from "@/utils/api";

export default function Dashboard() {
  const { data } = api.example.protectedHello.useQuery();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data ? data.greeting : null}</p>
    </div>
  );
}
