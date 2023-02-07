// import useDetectClose from "@/hook/useDetectClose";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import Git from "../asset/github.svg";
import Mail from "../asset/mail.svg";
import Write from "../asset/write.svg";

export default function Nav() {
  // const navRef = useRef(null);
  // const [isOpen, setIsOpen] = useDetectClose(navRef, false);
  // const openNav = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active text-dark " aria-current="page">
            <Image src={Git} width="20" height="20" alt="git" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark">
            <Image src={Mail} width="20" height="20" alt="mail" />
          </a>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark" href="/post">
            <Image src={Write} width="20" height="20" alt="write" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
