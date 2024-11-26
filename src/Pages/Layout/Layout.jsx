// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Nav from "../../component/Nav/Nav";




export default function Layout() {
    return (
        <>
          <Nav/>
          <Outlet/>
          <Footer/>
        </>
      )
}
