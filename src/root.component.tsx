import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar.component";

export default function Root() {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}
