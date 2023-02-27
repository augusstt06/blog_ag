import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Login() {
  const { data } = useSession();

  const autoLogout = () => {
    if (data !== null && data !== undefined) {
      setTimeout(() => {
        const out = confirm(
          "곧 로그인이 해제됩니다. 로그인을 유지하려면 확인 버튼을 눌러주세요"
        );
        if (out) {
          alert("로그인이 갱신 되었습니다.");
          console.log("유지", data);
        } else {
          signOut();
          console.log("로그아웃", data);
          ("로그아웃 되었습니다.");
        }
      }, 100000);
    }
  };
  useEffect(() => {
    autoLogout();
  });
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
