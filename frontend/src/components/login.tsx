import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data } = useSession();

  return (
    <div>
      {data?.user ? (
        <button type="button" onClick={() => signOut()}>
          Google Logout
        </button>
      ) : (
        <>
          <button type="button" onClick={() => signIn()}>
            Google Login
          </button>
        </>
      )}
    </div>
  );
}
