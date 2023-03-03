import React from "react";
import Header from "@/components/header";
import { LayoutProps } from "@/type/type";

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
export default Layout;
