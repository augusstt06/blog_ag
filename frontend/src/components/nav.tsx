import useDetectClose from "@/hook/useDetectClose";
import { useRef } from "react";

export default function Nav() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(navRef, false);
  const openNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <ul ref={navRef}>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
    </div>
  );
}
