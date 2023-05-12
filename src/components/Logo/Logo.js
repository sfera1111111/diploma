import "./Logo.css";
import logo from "../../assets/logo.webp";


export default function Logo() {
  return (
     <div className="Logo">
       
       <img src={logo} alt="Nologo" className="logo" />
      
     </div>
  )
}