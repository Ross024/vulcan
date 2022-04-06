import VulcanIcon from "./VulcanIcon";
import Carousel from "./Carousel";
import NavMain from "./NavMain";

// import header1 from '../../public/images/header-slider-img-01.jpg'

function Header() {
  return (
    <div className="header">
      <div className="links">
        <ul className="primary-links">
            <li>
              <a href="#0">INSTALL MAP</a>
            </li>
            <li>
              <a href="#0">PRODUCT LITERATURE</a>
            </li>
        </ul>
        <ul className="secondary-links">          
          <li>
            <a href="#0"></a>
          </li>
          <li>+1 712-642-2755</li>
          <li>
            <a href="#0">CONTACT US</a>
          </li>
        </ul>
      </div>
      <NavMain />

        <Carousel />

        <div className="text-container">
        <h1>
          We design and fabricate indestructible wastewater screens. Enough
          said.
        </h1>
        <button>View Products</button>
        <button> View Services</button>
      </div>

      


    </div>
  );
}

export default Header;
