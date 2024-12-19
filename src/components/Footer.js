import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
const Footer = () => {
  return (
<footer className="footer-1 bg-dark">
  <div
    className="container MorganFooter"
    style={{
      width: '100%',
      maxWidth: '1200px',
      padding: '20px 10%',
      margin: '0 auto',
    }}
  >
    <div
      className="footer-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '20px 0',
        justifyItems: 'center',
        textAlign: 'left',
        color: '#ffffff',
      }}
    >
      {/* First Column */}
      <div className="col">
        <div className="widget MFWidget1">
          <h4
            className="title"
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '10px',
            }}
          >
            GA Morgan Dynamics Pvt.Ltd
          </h4>
          <hr style={{ borderTop: '2px solid #d92027', width: '50px' }} />
          <p style={{fontFamily: '', fontSize: '0.8em'}}>1421, B-Block</p>
          <p style={{fontFamily: '', fontSize: '0.8em'}}>13th Main, Sahakar Nagar</p>
          <p style={{fontFamily: '', fontSize: '0.8em'}}>Bangalore 560092 India</p>
          <p style={{fontFamily: '', fontSize: '0.8em'}}>info@gamorgan.in</p>
          <a
            className="pt16"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gamorgan.in"
            style={{
              fontSize: '13px',
              color: 'red',
              textDecoration: 'underline',
            }}
          >
            www.gamorgan.in
          </a>
        </div>
      </div>

      {/* Second Column */}
      <div className="col">
        <div className="widget MFWidget2">
          <h4
            className="title"
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '10px',
            }}
          >
            Morgan Tecnica
          </h4>
          <hr style={{ borderTop: '2px solid #d92027', width: '50px' }} />
          <p style={{fontFamily: '', fontSize: '0.8em'}}>Via San Pancrazio, 11/B</p>
          <p style={{fontFamily: '', fontSize: '0.8em'}}>25030 Adro (Brescia), Italy</p>
          <p style={{fontFamily: '', fontSize: '0.8em'}}>Tel +39 030 7704446</p>
          <p style={{fontFamily: '', fontSize: '0.8em'}}>Fax +39 030 7705120</p>
          <a
            className="pt16"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.morgantecnica.com"
            style={{
              fontSize: '13px',
              color: 'red',
              textDecoration: 'underline',
            }}
          >
            www.morgantecnica.com
          </a>
        </div>
      </div>

      {/* Third Column */}
      <div className="col">
        <div className="widget MFWidget3">
          <h4
            className="title"
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '10px',
            }}
          >
            Social Network
          </h4>
          <hr style={{ borderTop: '2px solid #d92027', width: '50px' }} />
          <ul
            className="list-inline social-list"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '0px',
              margin: '10px',
              listStyle: 'none',
              fontSize: '24px',
              gap: '5px'
            }}
          >
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/morgan-tecnica-spa?trk=top_nav_home"
                style={{ color: 'red', width:"10px", height: '5px' }}
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/MorganTecnica/"
                style={{ color: 'red', marginTop: '50px' }}
              >
                 <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/morgantecnica/"
                style={{ color: 'red' }}
              >
                 <FaInstagram /> 
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/results?search_query=ga+morgan+tecnica"
                style={{ color: 'red' }}
              >
                 <FaYoutube /> 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Scroll to Top Button */}
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a
        className="btn btn-sm fade-half back-to-top inner-link"
        style={{
          width: '50px',
          height: '50px',
          lineHeight: '50px',
          border: '1px solid #ffffff',
          color: '#ffffff',
          textDecoration: 'none',
          display: 'flex',
          borderRadius: '10%',
          alignItems: 'center',
      
          justifyContent:'center'
        }}
        href="#Top"
        target="_self"
      >TOP
      </a>
    </div>
  </div>
</footer>


  );
};

export default Footer;
