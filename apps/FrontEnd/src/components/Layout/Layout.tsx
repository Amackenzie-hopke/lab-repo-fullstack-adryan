import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer"
import {Nav} from "./navbar/NavBar"
import {Header} from "./header/Header"
export function Layout() {
  return (
    <div className= "Layout">
      <Nav/>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
