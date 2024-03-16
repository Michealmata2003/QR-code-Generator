import React from 'react';
import './GetMore.css';
import { FaPencil, FaRegFolder } from "react-icons/fa6";
import { FaChartBar, FaList, FaPaintBrush } from "react-icons/fa";



const GetMore = () => {
    return (
        <div className='getmore'>
            <div className="Container">
                <div className="title">
                    <h2>GET MORE</h2>
                    <p>The professional <strong>QR Code Management </strong> platform to create, track and edit all your QR codes in one place.</p>

                </div>
                <div className="content">
                    <div>
                        <div><FaPencil /></div>
                        <h6>Dynamic QR Codes</h6>
                        <p>Edit and change your QR codes anytime.</p>
                    </div>
                    <div>
                        <div>
                            <FaChartBar />
                        </div>

                        <h6>Scan Statistics</h6>
                        <p>Track your QR codes and get insights about scans.</p>
                    </div>
                    <div>
                        <div>                    <FaList />
                        </div>
                        <h6>Bulk Creation and Editing</h6>
                        <p>Create and edit many QR codes in no time.</p>
                    </div>
                    <div>
                        <div>                        <FaRegFolder />
                        </div>                        <h6>Campaign Folders</h6>
                        <p>Structure and organize your QR codes in campaign folders.</p>
                    </div>
                    <div>
                        <div>                        <FaPaintBrush />
                        </div>
                        <h6>More Design Options</h6>
                        <p>Create transparent QR codes and reusable design templates.</p>
                    </div>

                </div>
                <div className='btn'>
                    <button>Get Started Now</button>
                </div>
            </div>
        </div>
    )
}

export default GetMore;