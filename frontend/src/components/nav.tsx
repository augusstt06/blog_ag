import useDetectClose from "@/hook/useDetectClose";
import { RootState } from "@/store/reducers/rootReducer";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function Nav() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(navRef, false);
  const openNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={openNav}>메뉴 열엉</button>
      <ul ref={navRef}>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
    </div>
  );
}
