import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Auth from "../Auth/Auth";
import Search from "../Search/Search";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="layout">
       <header>
        <div className="diplay">
        <Logo />
        <Nav  />
        <CartLink className="cartlink" />
        <Auth />
        </div> 
        <Search />  
       </header>
       <aside>
        <CategoryList />      
       </aside>
       <main>{children}</main>
       <footer>FOOTER</footer>
    </div>
  );
}