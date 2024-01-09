import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import { AnimatePresence } from 'framer-motion';
import TaskProvider from './components/context/Context';
import Home from './Home';
import CompanyLogo from './components/header/CompanyLogo';
import Footer from './components/footer/Footer';
import TopButton from './components/TopButton';
import { StyledEngineProvider } from '@mui/material';
import ProductCompany from './components/products/ProductCompany';
import CompanyProfile from './components/About/CompanyProfile';
import Mission from './components/Mission/Mission';
import CompanyAchievement from './components/About/CompanyAchievement';
import CompanyEmployee from './components/About/CompanyEmployee';
import GalleryPage from './components/gallery/GalleryPage';

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
              <Route path='/about/profile' exact Component={CompanyProfile} />
              <Route path='/about/achievement' exact Component={CompanyAchievement} />
              <Route path='/about/employee' exact Component={CompanyEmployee} />
              <Route path='/mission' exact Component={Mission} />
              <Route path='/gallerypage' exact Component={GalleryPage} />
              <Route path='/products_company/:name' exact Component={ProductCompany} />
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
