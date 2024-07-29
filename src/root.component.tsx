//import "./root.component.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  return <BrowserRouter>

    <nav className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/hacker-news" className="link">
        News Reader
      </Link>
      <Link to="/books-store" className="link">
        Books Store
      </Link>
    </nav>
  </BrowserRouter>

}