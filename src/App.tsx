import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen font-inter">
          <Navbar />
          <MainPage />
          <Footer />
        </div>
        <Analytics />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
