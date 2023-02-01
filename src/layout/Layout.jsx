import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-xl m-auto bg-red-500">{children}</main>
    </>
  );
};

export default Layout;
