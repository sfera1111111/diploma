import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Auth from "../Auth/Auth";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import Search from "../Search/Search";
import "./layout.css";
import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="layout">
       <header>
         <div className="header__body">
          <div className="flex">
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        </div>
        <div className="mg_l">
        <Search />
        <Auth />
        <CartLink />
        </div>
         </div>
      </header>
       <aside>
        <CategoryList  className="CategoryList"/>      
       </aside>
       <main>{props.children}</main>
       <footer>
        footer
        <Wrapper />
        </footer>
    </div>
  );
}