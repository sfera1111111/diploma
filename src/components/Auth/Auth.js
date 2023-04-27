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
          <h3>Hello <Link to="/orders" >{user.displayName}</Link> </h3>
          <button onClick={logOut}>Sign out</button>
        </span>
      ) : (
        <span>
          <h3>Hello guest!</h3>
          <button onClick={logIn}>Sign in</button>
        </span>
      )}
     </div>
)}