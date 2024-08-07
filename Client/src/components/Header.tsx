import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
      <div className="flex justify-center items-center gap-2">
        <img src="https://cdn-icons-png.flaticon.com/512/7207/7207850.png" className="w-7 h-7"/>
        <h2 className="font-bold select-none">WebLit</h2>
        </div>
      </Link>
      <ul className="flex gap-2 select-none">
        <li>
          <Link to="/compiler"><Button variant="secondary">Compiler</Button></Link>
        </li>
        <li>
          <Link to="/login"><Button variant="blue">Login</Button></Link>
        </li>
        <li>
          <Link to="/signup"><Button variant="blue">Signup</Button></Link>
        </li>
      </ul>
    </nav>
  );
}
