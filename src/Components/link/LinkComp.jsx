import React from 'react'
import Accordion from './Accordion'
import SampleContent from './Accorddata'
import { BiWorld } from 'react-icons/bi'
import { HiMiniPaintBrush } from 'react-icons/hi2'
import { FaRegImage } from "react-icons/fa";
import { MdOutlineQrCode } from "react-icons/md";
import qrcode from '../../assets/qrcode.svg';



const LinkComp = () => {
  return (
    <div className='link'>
      <div className="leftside">
        <div className="contentspace">
          <div className="head">
            <div>
              <BiWorld />

              <h4>ENTER CONTENT</h4>
            </div>
            <h1>+</h1>

          </div>
          <div className="content">
            <h5>Your URL</h5>
            <input type="text" placeholder='https://www.qrcode-monkey.com' />
          </div>
        </div>
        <div className="colorspace">
          <div className="head">
            <div>
              <HiMiniPaintBrush />
              <h4>SET COLORS</h4>
            </div>
            <h1>+</h1>
          </div>
          <div className="content">
            <h5>Your URL</h5>
            <input type="text" placeholder='https://www.qrcode-monkey.com' />
          </div>
        </div>
        <div className="logospace">
          <div className="head">
            <div>
            <FaRegImage />
              <h4>ADD LOGO IMAGE</h4>
            </div>
            <h1>+</h1>
          </div>
          <div className="content">
            <h5>Your URL</h5>
            <input type="text" placeholder='https://www.qrcode-monkey.com' />
          </div>
        </div>
        <div className="customspace">
          <div className="head">
            <div>
            <MdOutlineQrCode />
              <h4>CUSTOMIZE DESIGN</h4>
            </div>
            <h1>+</h1>

          </div>
          <div className="content">
            <h5>Your URL</h5>
            <input type="text" placeholder='https://www.qrcode-monkey.com' />
          </div>
        </div>
      </div>
      <div className="rightside">
        <div className='qrcode'>
          <img src={qrcode} alt="" />

        </div>
        <div>
          <input type="range" name="" id="" />
          <div className='firstclick'>
            <button>Create QR Code</button>
            <button>Download PNG</button>
          </div>
          <div className='secondclick'>
            <button>.SVG</button>
            <button>.PDF*</button>
            <button>.EPS*</button>
            </div>
        </div>
        <p>* no support for color gradients</p>
      </div>
    </div>
  )
}

export default LinkComp

 // QRCodeGenerator.js
// import React, { useState } from 'react';
// import QRCodeDisplay from '../../QRgenerator';

// const LinkComp = () => {
//   const [data, setData] = useState('');
//   const [qrCodeGenerated, setQRCodeGenerated] = useState(false);

//   const handleChange = (e) => {
//     setData(e.target.value);
//   };

//   const handleGenerate = () => {
//     // Logic to generate QR code using data
//     setQRCodeGenerated(true);
//   };

//   return (
//     <div className="qrcode-generator">
//       <input type="text" placeholder="Enter text or URL" value={data} onChange={handleChange} />
//       <button onClick={handleGenerate}>Generate QR Code</button>
//       {qrCodeGenerated && <QRCodeDisplay data={data} />}
//     </div>
//   );
// }

// export default LinkComp;
