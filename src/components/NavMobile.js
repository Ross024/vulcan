import VulcanIcon from "./VulcanIcon"

function NavMobile() {
  return (
    <header className="mobileHeader">
        <a href="#" className="mobileLogo"><VulcanIcon /></a>

        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>

        <nav className="mobileNav">
            <ul className="mobileMenu">
                <li><a href="#0">About</a></li>
                <li><a href="#0">Products</a></li>
                <li><a href="#0">Services</a></li>
                <li><a href="#0">Parts</a></li>
                <li><a href="#0">News</a></li>
                <li><a href="#0">Contacts</a></li>
                <li><a href="#0">Installation Map</a></li>
                <li><a href="#0">Product Literature</a></li>
            </ul>
        </nav>

    </header>  
  )
}

export default NavMobile