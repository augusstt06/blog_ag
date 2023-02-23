// import useDetectClose from "@/hook/useDetectClose";
import Link from "next/link";
import Image from "next/image";
import Git from "../asset/github.svg";
import Mail from "../asset/mail.svg";
import Write from "../asset/write.svg";
import { useSession } from "next-auth/react";

export default function Nav() {
  // const navRef = useRef(null);
  // const [isOpen, setIsOpen] = useDetectClose(navRef, false);
  // const openNav = () => {
  //   setIsOpen(!isOpen);
  // };
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const { status, data } = useSession();
  const gitUrl = process.env.NEXT_PUBLIC_GIT;
  const gmail = process.env.NEXT_PUBLIC_GMAIL;
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link text-dark" href={gitUrl}>
            {/* <a className="nav-link active text-dark " aria-current="page"> */}
            <Image src={Git} width="20" height="20" alt="git" />
            {/* </a> */}
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark">
            <Image src={Mail} width="20" height="20" alt="mail" />
          </a>
        </li>
        {status === "authenticated" && data.user.email === email ? (
          <li className="nav-item">
            <Link className="nav-link text-dark" href="/post">
              <Image src={Write} width="20" height="20" alt="write" />
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
