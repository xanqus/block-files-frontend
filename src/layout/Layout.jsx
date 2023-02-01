import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-xl m-auto">{children}</main>
    </>
  );
};

export default Layout;
