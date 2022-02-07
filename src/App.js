import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Project from './pages/Project';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ContactPage />
      <AboutPage />
      <Project />
      <ResumePage />
    </div>
  );
}

export default App;
