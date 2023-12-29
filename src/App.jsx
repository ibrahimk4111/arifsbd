import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar'
import { AnimatePresence } from 'framer-motion';
import TaskProvider from './components/context/Context';
import Home from './Home';
import CompanyLogo from './components/header/CompanyLogo';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import TopButton from './components/TopButton';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <TaskProvider>

      <AnimatePresence>
        <Router>
          <StyledEngineProvider injectFirst>
            <CompanyLogo />
            <Navbar />
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/contact' exact Component={Contact} />
              <Route path='/gallery' exact Component={Gallery} />
            </Routes>
            <TopButton />
            <Footer />
          </StyledEngineProvider>
        </Router>
      </AnimatePresence>

    </TaskProvider>
  );
}

export default App;
