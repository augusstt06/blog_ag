import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Login from "./login";
import { useSession } from "next-auth/react";

export default function Header() {
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const { status, data } = useSession();
  const gitUrl = process.env.NEXT_PUBLIC_GIT;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">
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
                <Link className="nav-link" href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={gitUrl}>
                  Git
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Contact
                </Link>
              </li>
              {status === "authenticated" && data.user.email === email ? (
                <li className="nav-item">
                  <Link className="nav-link" href="/post">
                    Post
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
