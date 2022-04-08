import React from 'react'

function Customized() {
  return (
    <div className='customized'>
        <div className="wave-wrapper">
            <img src="images/wave-white.png" alt="decorative" />
        </div>
        <div className='customized-landing'>
            <div className="cust-header">
            <h2>Customized Per Order</h2>
                <p>Just as no two treatment plants are the same, no two of our screening, grit handling or sludge thickening products are either. We’ll help determine exactly what you need.</p>
            </div>
            <div className='service-container'>
                <div className='service'>
                    <img src="images/machine-01-300x274.png" alt="Screening" />
                    <div className="container-text">
                        <h3>Screening</h3>
                        <a href="#0">View Selection</a>
                    </div>
                </div>
                <div className='service'>
                    <img src="images/machine-02-300x274.png" alt="Screenings Handling" />
                    <div className="container-text">
                        <h3>Screenings Handling</h3>
                        <a href="#0">View Selection</a>
                    </div>
                </div>
                <div className='service'>
                    <img src="images/machine-03-300x274.png" alt="Grit Handling" />
                    <div className="container-text">
                        <h3>Grit Handling</h3>
                        <a href="#0">View Selection</a>
                    </div>
                </div>
                <div className='service'>
                    <img src="images/machine-04-300x274.png" alt="Sludge Thickening" />
                    <div className="container-text">
                        <h3>Sludge Thickening</h3>
                        <a href="#0">View Selection</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

  )
}

export default Customized