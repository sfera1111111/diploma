import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { useContext } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
         <Link to="/orders">{user.displayName}</Link>
          <button className="button__Auth" onClick={logOut}>Sign out</button>
        </span>
      ) : (
        <span>
          <button className="button__Auth" onClick={logIn}>Sign in</button>
        </span>
      )}
     </div>
)}