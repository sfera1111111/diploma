import "./Search.css";
export default function Search() { 
  return (
     <div className="Search">
        <input type="text" maxlength="12" placeholder="Search" class="searchbar" />
        <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="searg com" className="button" />
     </div>
  );
}