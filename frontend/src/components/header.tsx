import Nav from "./nav";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <div>로고</div>
      <div>검색창 - 컴포넌트</div>
      <Nav />
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
