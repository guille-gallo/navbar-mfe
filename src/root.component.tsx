import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar.component";
import './root.component.scss';

export default function Root() {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}