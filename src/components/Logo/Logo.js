import "./Logo.css";
import logo from "../../assets/logo.png"

export default function Logo() {
  return (
     <div className="Logo">
       
       <img src={logo} alt="logo" className="logo" />
      
     </div>
  )
}