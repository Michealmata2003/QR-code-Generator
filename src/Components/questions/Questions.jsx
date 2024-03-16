import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questionscomp'>
           <div className="Container">
           <h3>FREQUENTLY ASKED QUESTIONS</h3>
            <div className="questions">
                <div className="question">
                    <h4>What is a QR code?</h4>
                    <p>QR code stands for <strong>Quick Response Code</strong> and is barcode type that was invented by Denso Wave in 1994. Get more information at Wikipedia.</p>
                </div>

                <div className="question">
                    <h4>Can I use the generated QR Codes for commercial purposes?</h4>
                    <p>Yes, all QR codes you created with this QR generator are free and can be used for whatever you want.</p>
                </div>
                <div className="question">
                    <h4>Are the created qr codes expiring?</h4>
                    <p>They do not expire and will work forever! QR Codes created with QRCode Monkey are static and do not stop working after a certain time. You just can’t edit the content of the QR Codes again.</p>
                </div>
                <div className="question">
                    <h4>Is there a scan limit for the QR codes</h4>
                    <p>There is no limit and the created QR code will work forever. Scan it is many times as you wish!</p>
                </div>
                <div className="question">
                    <h4>Is QRCode Monkey saving my data?</h4>
                    <p>We do not save or reuse your data in any form. We cache your qr code image files for 24h on our server to optimize the performance of QRCode Monkey.</p>
                </div>
                <div className="question">
                    <h4>Why is my vCard QR code not showing the correct fields?</h4>
                    <p>Not all QR code scanners follow the official vCard standard which results in mixed up contact fields. Please try another QR code scanner app for better results.

                    </p>
                </div>

                <div className="question">
                    <h4>My QR code is not working, what can I do?</h4>
                    <p>There are many reasons why a QR code is not working correctly. At first check your entered data. Sometimes there are little typos in your URL that break your QR code. Some QR codes (like vCard) contain a lot of data. Try reducing the data you entered for your QR code when possible. This can make it easier for QR code scanner apps to read your code. Try to remove the logo in your QR code and check if this helps. Also make sure that there is enough contrast between the background and foreground of the QR code. The foreground should always be darker than the background. Here is an article about reasons why your QR codes are not working.</p>
                </div>
                <div className="question">
                    <h4>Does QRCode Monkey work in all browsers?</h4>
                    <p>QRCode Monkey needs a modern HTML5 capable browser and is officially supporting Chrome, Firefox, Safari, Edge and Internet Explorer 11.</p>
                </div>

            </div>
           </div>


        </div>
    )
}

export default Questions