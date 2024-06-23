import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage'
import ContactMePage from './components/ContactMePage'
import AutmationForm from './components/AutomationForm'
import Navbar from './components/Navbar'
import AutocompleteComponent from './SujjestMe';
function App() {
    return (
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<AutmationForm />}/>
                    {/* <Route path="/" element={<AutocompleteComponent />}/> */}
                    <Route path="/About" element={<AboutPage />}/>
                    <Route path="/contact" element={<ContactMePage />}/>
                </Routes>
            </Router>
    
    );
}

export default App;
