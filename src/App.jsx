import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AdmissionsPage from './pages/AdmissionsPage';
import Header from './components/Header/Header';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import "./styles/pages.css";
import { useState } from 'react';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';

const App=()=>{
const [showPopup, setShowPopup] = useState(true);
  
const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Samruddhi Madhukar Sarode"
          studentPhotoUrl="/images/photo.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
  <div className='app-wrapper'>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
       
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admissions" element={<AdmissionsPage/>}/>
      </Routes>
      <ChatbotComponent/>
    </BrowserRouter>
  </div>
  </>
  );
}
export default App;