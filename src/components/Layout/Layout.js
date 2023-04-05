import { Children } from "react";

export default function Layout(props) {
  return (
    <div className="Layout">
       <header>
        <Nav />
       </header>
       <aside>
       <nav>NAV CATEGORIES</nav>
       </aside>
       <main>{props.Children}</main>
       <footer>FOOTER</footer>
    </div>
  );
}