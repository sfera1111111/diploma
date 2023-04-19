import "./Layout.css"
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";


export default function Layout(props) {
  return (
    <div className="layout">
       <header>
        <Logo />
        <Nav />
        <CartLink />
       </header>
       <aside>
        <CategoryList />      
       </aside>
       <main>{props.children}</main>
       <footer>FOOTER</footer>
    </div>
  );
}