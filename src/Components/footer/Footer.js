
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li><a href="/">QR Code API</a></li>
          <li><a href="/">English</a></li>
          <li><a href="/">Deutsch</a></li>
          <li><a href="/">Español</a></li>
          <li><a href="/">Français</a></li>
          <li><a href="/">Italiano</a></li>
          <li><a href="/">Português</a></li>
          <li><a href="/">Indonesian</a></li>
          <li><a href="/">Русский</a></li>
          <li><a href="/">ไทย</a></li>
          <li><a href="/">عربى</a></li>
          <li><a href="/">Imprint</a></li>
        </ul>
        <div className="social-media">
          <a href="/"><i className=""></i></a>
          <a href="/"><i className=""></i></a>
          <a href="/"><i className=""></i></a>
          <p>QR Code is a registered trademark of DENSO WAVE INCORPORATED in the United States and other countries.</p>
        </div>
      </div>
      <div className='privacy'></div>
    </footer>
  );
}

export default Footer;
