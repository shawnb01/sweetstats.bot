import Link from "next/link";

export default function Guardians() {
  const guardians = [
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
  ];
  return (
    <div>
      <h1>Guardians</h1>
      <ul>
        {guardians.map((guardian) => (
          <Link href={`/guardians/${guardian.id}`} key={guardian.id}>
            <li>{guardian.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
