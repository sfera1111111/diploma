import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Auth from "../Auth/Auth";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import "./layout.css";
import { useState } from "react";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="layout">
       <header>
         <div className="header__body">
         <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <div className="mg_l">
        <Auth />
        <CartLink />
        </div>
         </div>
      </header>
       <aside>
        <CategoryList  className="CategoryList"/>      
       </aside>
       <main>{props.children}</main>
       <footer>FOOTER</footer>
    </div>
  );
}