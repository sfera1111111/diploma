import "./Logo.css";
import logo from "../../assets/Logo.png";


export default function Logo() {
  return (
     <div className="Logo">
       <img src={logo} alt="Nologo" className="logo" />      
     </div>
  )
}