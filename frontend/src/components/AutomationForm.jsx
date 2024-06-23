import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

// Sample data for autocomplete
const keywords = ['.NET Development', '3D Printing', 'ASP.NET Development', 'Accounts', 'Acting', 'Aerospace Engineering', 'Agriculture & Food Engineering', 'Analytics', 'Anchoring', 'Android App Development', 'Angular.js Development', 'Animation', 'Architecture', 'Artificial Intelligence (AI)', 'Audio Making/Editing', 'Auditing', 'Automobile Engineering', 'Backend Development', 'Bank', 'Big Data', 'Bioinformatics', 'Biology', 'Biotechnology Engineering', 'Blockchain Development', 'Blogging', 'Brand Management', 'Business Development', 'Business/MBA', 'CA Articleship', 'CAD Design', 'CS Articleship', 'Campus Ambassador', 'Chartered Accountancy (CA)', 'Chemical Engineering', 'Chemistry', 'Cinematography', 'Civil Engineering', 'Client Servicing', 'Cloud Computing', 'Commerce', 'Company Secretary (CS)', 'Computer Science', 'Computer Vision', 'Content Writing', 'Copywriting', 'Creative Design', 'Creative Writing', 'Culinary Arts', 'Customer Service', 'Cyber Security', 'Data Entry', 'Data Science', 'Database Building', 'Design', 'Dietetics/Nutrition', 'Digital Marketing', 'E-commerce', 'Editorial', 'Electrical Engineering', 'Electronics Engineering', 'Embedded Systems', 'Energy Science & Engineering', 'Engineering', 'Engineering Design', 'Engineering Physics', 'Environmental Sciences', 'Event Management', 'Facebook Marketing', 'Fashion Design', 'Film Making', 'Finance', 'Flutter Development', 'Front End Development', 'Full Stack Development', 'Fundraising', 'Game Design', 'Game Development', 'General Management', 'Government', 'Graphic Design', 'Hospitality',
    'Hotel Management', 'Human Resources (HR)', 'Humanities', 'Image Processing', 'Industrial & Production Engineering', 'Industrial Design', 'Information Technology', 'Instrumentation & Control Engineering', 'Interior Design', 'International', 'Internet of Things (IoT)', 'Java Development', 'Javascript Development', 'Journalism', 'Law', 'Legal Research', 'Machine Learning', 'Manufacturing Engineering', 'Market/Business Research', 'Marketing', 'Material Science', 'Mathematics', 'Mathematics & Computing', 'Mechanical Engineering', 'Mechatronics', 'Media', 'Medicine', 'Merchandise Design', 'Mobile App Development', 'Motion Graphics', 'Music', 'NGO', 'Network Engineering', 'Node.js Development', 'Operations', 'PHP Development', 'Petroleum Engineering', 'Pharmaceutical', 'Photography', 'Physics', 'Political/Economics/Policy Research', 'Product Management', 'Programming', 'Project Management', 'Proofreading', 'Psychology', 'Public Relations (PR)', 'Python/Django Development', 'Quality Analyst', 'Recruitment', 'Robotics', 'Ruby on Rails', 'Sales', 'Science', 'Search Engine Optimization (SEO)', 'Social Media Marketing', 'Social Work', 'Software Development', 'Software Testing', 'Sports', 'Statistics', 'Stock/Market Trading', 'Strategy', 'Subject Matter Expert (SME)', 'Supply Chain Management (SCM)', 'Talent Acquisition', 'Teaching', 'Telecalling', 'Transcription', 'Translation', 'Travel & Tourism', 'UI/UX Design', 'Video Making/Editing', 'Videography', 'Volunteering', 'Web Development', 'Wordpress Development', 'iOS App Development'];


const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : keywords.filter(
        keyword => keyword.toLowerCase().includes(inputValue)
    );
};

    // Function to get suggestion value
const getSuggestionValue = suggestion => suggestion;

// Function to render suggestions
const renderSuggestion = suggestion => (
    <div>
        {suggestion}
    </div>
);

function AutomationForm () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/', {
            username,
            password,
            keyword,
            location
        })
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const onKeywordChange = (event, { newValue }) => {
        setKeyword(newValue);
    };

    const inputProps = {
        placeholder: 'Enter keyword',
        value: keyword,
        onChange: onKeywordChange,
        className: 'w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200' // Match the class of other input fields
    };

    return (
        <div className="flex items-center justify-center mt-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Internshala Automation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            required
                            id='username'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            required
                            id='password'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Profile</label>
                        <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                            theme={{
                                container: 'relative',
                                suggestionsContainer: 'absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-1',
                                suggestionsList: 'list-none p-0 m-0',
                                suggestion: 'p-2 cursor-pointer hover:bg-gray-200',
                                suggestionHighlighted: 'bg-gray-200'
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Location</label>
                        <input
                            required
                            id='location'
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter location"
                        />
                    </div>
                    <button
                        id='submit'
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Automate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AutomationForm;
