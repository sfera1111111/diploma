import { Link } from "react-router-dom";
import "./Wrapper.css";

export default function Wrapper() {
  return (
    <div className="Wrapper">
      <div className="Telegram">
      <Link href="https://web.telegram.org/a/#5482570547" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png" alt="Telegram" className="link" />
      </Link>
      </div>
      <div className="Github">
      <Link href="https://github.com/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="Telegram" className="link" />
      </Link>
      </div>
    </div>
  );
}