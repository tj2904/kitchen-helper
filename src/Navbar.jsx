import logo from "./logo192.png"
import "./Navbar.css"

function Navbar() {
    return ( 
    <nav class="navbar ">
  <a class="navbar-brand" href="/">
    <img src={logo} width="35" height="35" class="d-inline-block align-top" alt="" className="Nav-logo"></img>
    Kitchen Helper
  </a>
</nav>

);
}
export default Navbar;