import { api } from "@/utils/api";

export default async function Leaderboards() {
  // const { data } = await api.guardian.top100.useQuery();

  return (
    <div>
      <h1>Leaderboards</h1>
      <div>
        {/* {data?.guardians.map((guardian) => (
          <div key={guardian.id}>
            <p>{guardian.name}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
