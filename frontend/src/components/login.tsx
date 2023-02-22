import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data, status } = useSession();
  //   console.log(status);
  //   console.log("로그인 데이터", data);
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
