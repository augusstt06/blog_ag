import Nav from "./nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Login from "./login";
import { useSession } from "next-auth/react";

export default function Header() {
  const { status } = useSession();
  return (
    <div>
      <div>
        <Link href="/">로고</Link>
        <Login />
      </div>
      <div>
        <a>검색창 - 컴포넌트</a>
      </div>
      <div>
        {status === "unauthenticated" ? <div>X</div> : <Nav />}
        {/* <Nav /> */}
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: space-between;
            padding: 5px 20px;
            align-items: center;
            height: 4rem;
            background: gray;
          }
        `}
      </style>
    </div>
  );
}
