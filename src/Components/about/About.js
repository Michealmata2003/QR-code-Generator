import React from 'react';
import './About.css';
import faceqr from '../../assets/facebookqr.svg';
import youtubeqr from '../../assets/youtubeqr.svg';
import ninjaqr from '../../assets/ninjaqr.svg';
import twitterqr from '../../assets/twitterqr.svg';
import rainqr from '../../assets/rainqr.svg';
import jungleqr from '../../assets/jungleqr.svg';

const About = () => {
    return (
        <div className='aboutcomp'>
            <div className='Container'>
                <div className='title'>
                    <h6>ABOUT</h6>
                    <h5>The <strong>Free QR Code Generator </strong> for High Quality QR Codes</h5>
                    <p>QRCode Monkey is one of the most popular free online qr code generators with millions of already created QR codes. The high resolution of the QR codes and the powerful design options make it one of the best free QR code generators on the web that can be used for commercial and print purposes.</p>
                </div>
                <div className='aboutimgcomp'>
                    <div>
                        <img src={faceqr} alt='' />
                    </div>
                    <div>
                        <img src={youtubeqr} alt='' />
                    </div>
                    <div>
                        <img src={ninjaqr} alt='' />
                    </div>
                    <div>
                        <img src={twitterqr} alt='' />
                    </div>
                    <div>
                        <img src={rainqr} alt='' />

                    </div>
                    <div>
                        <img src={jungleqr} alt='' />

                    </div>
                </div>
                <div className='aboutblogs'>
                    <div className='blog'>
                        <h3>Endless lifetime with unlimited scans</h3>
                        <p>QRCode Monkey also has no limitations. All generated QR codes will work forever, do not expire and have no scanning limits like you see at other commercial QR code generators. The created QR codes are static so the only limitation is that you can't edit the QR code again.</p>
                    </div>
                    <div className='blog'>
                        <h3>High resolution QR Codes for Print</h3>
                        <p>QRCode Monkey offers print quality QR codes with high resolutions. When creating your QR code set the pixel size to the highest resolution to create .png files in print quality. You can also download vector formats like .svg, .eps, .pdf for best possible quality. We recommend the .svg format because it includes all design settings and gives you the perfect print format that can be used with most vector graphic software.</p>
                    </div>
                    <div className='blog'>
                        <h3> QR Codes with Logo</h3>
                        <p>Put a custom brand on your QR code. With QRCode Monkey it is very simple and straightforward to add a logo to your QR Code. The QR codes are still readable. Every QR code can have an error correction up to 30%. This means 30% of the QR code (excluding the corner elements) can be removed and the QR code is still working. We can put a logo image on the QR code that covers up to 30%.</p>
                    </div>
                    <div className='blog'>
                        <h3>QR Code Vector Formats</h3>
                        <p>Most free QR code makers only allow creating QR codes in low resolutions and do not offer vector formats. Use the offered vector formats to print QR Codes in huge resolutions without losing quality. We recommend the .svg format for further editing. The offered .pdf and .eps formats only support classic QR codes without the design and logo options.</p>
                    </div>
                    <div className='blog'>
                        <h3>Custom Design and Colors</h3>
                        <p>Make your QR code look really unique with our design and color options. You can customize the shape and form of the corner elements and the body of the QR code. You can also set your own colors for all QR code elements. Add a gradient color to the QR code body and make it really stand out. Attractive QR codes can increase the amount of scans.</p>
                    </div>
                    <div className='blog'>
                        <h3>Free for commercial usage</h3>
                        <p>All generated QR Codes are 100% free and can be used for whatever you want. This includes all commercial purposes.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About