import logo from "./favicon-32x32.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar sticky-top justify-content-center">
      <a class="navbar-brand" href="/">
        <img src={logo} width="32px" height="32px" alt="Logo"></img>
        Kitchen Helper
      </a>
    </nav>
  );
}
export default Navbar;
