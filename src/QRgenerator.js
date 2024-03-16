// QRCodeDisplay.js
import React from 'react';

const QRCodeDisplay = ({ data }) => {
  // Logic to generate QR code image using data
  const qrCodeImageSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&amp;size=200x200`;

  return (
    <div className="qrcode-display">
      <img src={qrCodeImageSrc} alt="QR Code" />
    </div>
  );
}

export default QRCodeDisplay;
