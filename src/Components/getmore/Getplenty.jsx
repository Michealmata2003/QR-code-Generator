import React from 'react';
import { RiNumber1,RiNumber2,RiNumber3,RiNumber4 } from "react-icons/ri";


const Getplenty = () => {
    return (
        <div className='getplenty'>
            <div className="Container">
                <div className="title">
                    <h2>GET STARTED</h2>
                    <p><strong>Create</strong> your <strong>Custom QR Code with Logo</strong></p>
                </div>
                <div className="content">
                    <div>
                        <span>
                            <div className='number'>
                                <RiNumber1 />
                            </div>
                            <h2>Set QR Content</h2>
                        </span>
                        <p>Select a content type at the top for your QR code (URL, Text, Email...). After selecting your type you will see all available options. Enter all fields that should appear when scanning your QR code. Make sure everything you enter is correct because you can’t change the content once your QR code is printed.</p>
                    </div>
                    <div>
                        <span>
                            <div className='number'>
                                <RiNumber2 />
                            </div>
                            <h2>Set QR Content</h2>
                        </span>
                        <p>Select a content type at the top for your QR code (URL, Text, Email...). After selecting your type you will see all available options. Enter all fields that should appear when scanning your QR code. Make sure everything you enter is correct because you can’t change the content once your QR code is printed.</p>
                    </div>
                    <div>
                        <span>
                            <div className='number'>
                                <RiNumber3 />
                            </div>
                            <h2>Set QR Content</h2>
                        </span>
                        <p>Select a content type at the top for your QR code (URL, Text, Email...). After selecting your type you will see all available options. Enter all fields that should appear when scanning your QR code. Make sure everything you enter is correct because you can’t change the content once your QR code is printed.</p>
                    </div>
                    <div>
                        <span>
                            <div className='number'>
                                <RiNumber4 />
                            </div>
                            <h2>Set QR Content</h2>
                        </span>
                        <p>Select a content type at the top for your QR code (URL, Text, Email...). After selecting your type you will see all available options. Enter all fields that should appear when scanning your QR code. Make sure everything you enter is correct because you can’t change the content once your QR code is printed.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Getplenty