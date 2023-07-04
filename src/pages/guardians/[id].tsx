import { useRouter } from "next/router";

export default function GuardianPage() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      {/* Back button to go to leaderboards */}
      <button onClick={() => router.back()}>{"<-"} Back</button>
      <h1>Guardian {id}</h1>
    </div>
  );
}
