import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/router";

const SignIn = () => {
  const { session } = useSession();
  const router = useRouter();

  const { code } = router.query;

  if (session) {
    router.push("/dashboard");
  }

  return (
    <div>
      <h1>Sign In</h1>
      <p>You are signed out!</p>
      {code && <p>Code: {code}</p>}
    </div>
  );
};

export default SignIn;
