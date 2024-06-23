import React from 'react';

function ContactMePage () {
    return (
        <div className="container mx-auto p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Contact Me</h1>
                <p className="text-lg mt-4">Get in touch with me through the following channels.</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-semibold mb-4">Social Media</h2>
                <ul className="text-gray-700 mb-4">
                    <li className="mb-2">
                        <strong>Instagram:</strong> <a href="https://www.instagram.com/manizh_hr/" target="_blank" rel="noopener noreferrer">Manizh_hr</a>
                    </li>
                    <li className="mb-2">
                        <strong>Twitter:</strong> <a href="https://x.com/manishGk9" target="_blank" rel="noopener noreferrer">manishGk9</a>
                    </li>
                    <li className="mb-2">
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/manish-yadav-717278222/" target="_blank" rel="noopener noreferrer">Manish Yadav</a>
                    </li>
                </ul>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-semibold mb-4">Email</h2>
                <p className="text-gray-700 mb-4">
                    You can also reach me via email:
                </p>
                <ul className="text-gray-700">
                    <li className="mb-2">
                        <strong>Gmail:</strong> <a href="mailto:emanish365@gmail.com">emanish365@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactMePage;
