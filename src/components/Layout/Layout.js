import Nav from "../Nav/Nav";
import pholodilnik from "../../assets/fridge.png";


export default function Layout(props) {
  return (
    <div className="Layout">
       <header>
        <img src="fridge" alt="fridge" />
        <Nav />
       </header>
       <aside>
       <nav>NAV CATEGORIES</nav>
       </aside>
       <main>{props.children}</main>
       <footer>FOOTER</footer>
    </div>
  );
}