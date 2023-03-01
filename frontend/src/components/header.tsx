import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Login from "./login";
import { useSession } from "next-auth/react";

export default function Header() {
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const { status, data } = useSession();
  const gitUrl = process.env.NEXT_PUBLIC_GIT;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#!">
          <Login />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                <Link className="nav-link text-white" href="/">
                  Home
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link className="nav-link text-white" href={gitUrl}>
                  Git
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link className="nav-link text-white" href="/">
                  Contact
                </Link>
              </a>
            </li>
            {status === "authenticated" && data.user.email === email ? (
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="nav-link text-white" href="/post">
                    Post
                  </Link>
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
