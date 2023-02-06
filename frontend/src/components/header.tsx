import Nav from "./nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div>
        <Link href="/">로고</Link>
      </div>
      <div>검색창 - 컴포넌트</div>
      <div>
        <Nav />
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
