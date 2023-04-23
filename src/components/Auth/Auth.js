import { signOut } from "firebase/auth";
import { signIn } from "../../firebase";
import { AppContext } from "../../App";
import { useContext } from "react";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      <button onClick={signIn}>Sing in</button>
      {user ? <span>{user.displayName}</span> : null}
      {user ? <button onClick={signOut}>Sign out</button> : null} 
    </div>
  );
}