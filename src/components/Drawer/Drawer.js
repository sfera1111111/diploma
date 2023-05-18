import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import "./Drawer.css"

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <Search />
        <Nav />
      </div>
    </div>
  );
}

export default Drawer; 