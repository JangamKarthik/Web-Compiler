import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none">WebLit</h2>
      </Link>
      <ul className="flex gap-2 select-none">
        <li>
          <Link to="/compiler"><Button variant="secondary">Compiler</Button></Link>
        </li>
      </ul>
    </nav>
  );
}
