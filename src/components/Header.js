// I think for the background image slider, we should put the images inside div's
// in the HTML, and position text and button absolutely (over top the slider)
// within the Header component.

import VulcanIcon from './VulcanIcon';

function Header() {
  return (
    <div className="header">
        <ul className='primary-links'>
            <li><a href="#0">INSTALL MAP</a></li>
            <li><a href="#0">PRODUCT LITERATURE</a></li>
            {/* <li><a href="#0"></a></li> */}
            <li>+1 712-642-2755</li>
            <li><a href="#0">CONTACT US</a></li>
        </ul>
        <div className="header-overlay">
          <h2>We design and fabricate indestructible wastewater screens. Enough said.</h2>
          <div className="btn-container">
            <button>View Products</button>
            <button> View Services</button>
          </div>
        </div>
    </div>
  )
}

export default Header