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
    <div data-spy="scroll" data-target=".fixed-top">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
          {/* <a className="navbar-brand logo-image"></a> */}

          <a className="navbar-brand logo-text page-scroll">augusstt</a>

          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link page-scroll">
                  {/* <a className="nav-link page-scroll"> */}
                  Home <span className="sr-only">(current)</span>
                  {/* </a> */}
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Articles
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item page-scroll">programming</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item page-scroll">LostArk</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item page-scroll">Privacy Policy</a>
                </div>
              </li>
              {status === "authenticated" && data.user.email === email ? (
                <li className="nav-item">
                  <Link className="nav-link page-scroll" href="/post">
                    Posting
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li className="nav-item">
                <a className="nav-link page-scroll" onClick={Login}>
                  Google Login
                </a>
              </li>
            </ul>
            {/* <span className="nav-item social-icons">
              <span className="fa-stack">
                <a>
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a>
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
            </span> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
