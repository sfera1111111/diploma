import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Auth from "../Auth/Auth";
import "./Layout.css";


export default function Layout(props) {
  return (
    <div className="layout">
       <header>
        <Logo />
        <Nav />
        <CartLink className="cartlink" />
        <Auth />
       </header>
       <aside>
        <CategoryList />      
       </aside>
       <main>{props.children}</main>
       <footer>FOOTER</footer>
    </div>
  );
}