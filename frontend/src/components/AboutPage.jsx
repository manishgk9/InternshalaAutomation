import React from 'react';

function AboutPage() {
    return (
        <div className="container mx-auto p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">About Internshala Automation Project</h1>
                <p className="text-lg mt-4">Automating Internshala to streamline internship applications and management.</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-4">
                    The Internshala Automation Project is designed to simplify and enhance the process of finding, applying for, and managing internships on the Internshala platform. This project aims to save time and effort for students and professionals by automating repetitive tasks, improving efficiency, and ensuring that users don't miss out on valuable opportunities.
                </p>
                <p className="text-gray-700">
                    By leveraging cutting-edge technologies, the automation tools can seamlessly interact with Internshala, providing users with an optimized experience tailored to their preferences and career goals.
                </p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>
                <p className="text-gray-700 mb-4">
                    This project utilizes the following technologies to deliver a robust and efficient automation solution:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li className="mb-2">Frontend: React.js for a responsive and dynamic user interface.</li>
                    <li className="mb-2">Backend: Django for scalable and efficient server-side logic.</li>
                    <li className="mb-2">Automation: Selenium for web automation and interaction.</li>
                </ul>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-semibold mb-4">Meet the Developer</h2>
                <p className="text-gray-700 mb-4">
                    The Internshala Automation Project is designed and developed by a dedicated individual passionate about leveraging technology to solve real-world problems. Bringing a wealth of experience and expertise, the developer is committed to ensuring the success of this project and continuously improving the solution.
                </p>
                <p className="text-gray-700">
                    Feedback is always welcome to better meet the needs of the users.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
