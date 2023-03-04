import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Login from "./login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header() {
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const { status, data } = useSession();
  const gitUrl = process.env.NEXT_PUBLIC_GIT;
  const router = useRouter();
  console.log(router);
  const currentUrl = router.route;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            <Login />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={gitUrl}>
                  Git
                </Link>
              </li>
              {/* <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li> */}
              {currentUrl !== "/post/list" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/post/list">
                      Articles
                    </Link>
                  </li>{" "}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/post/list">
                      Programming
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/post/list">
                      LostArk
                    </Link>
                  </li>
                </>
              )}

              {status === "authenticated" && data.user.email === email ? (
                <li className="nav-item">
                  <Link className="nav-link" href="/post">
                    Posting
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              <li classNameName="nav-item">
                <Link classNameName="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link classNameName="nav-link" href={gitUrl}>
                  Git
                </Link>
              </li>
              {currentUrl !== "/post/list" ? (
                <>
                  <li classNameName="nav-item">
                    <Link classNameName="nav-link" href="/post/list">
                      Articles
                    </Link>
                  </li>{" "}
                </>
              ) : (
                <>
                  <li classNameName="nav-item">
                    <Link classNameName="nav-link" href="/post/list">
                      Programming
                    </Link>
                  </li>
                  <li classNameName="nav-item">
                    <Link classNameName="nav-link" href="/post/list">
                      LostArk
                    </Link>
                  </li>
                </>
              )}

              {status === "authenticated" && data.user.email === email ? (
                <li classNameName="nav-item">
                  <Link classNameName="nav-link" href="/post">
                    Posting
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}
