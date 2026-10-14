import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './src/about';
import Contact from './src/contact';
import Education from './src/education';
import Project from './src/project';
import Services from './src/services';
import Layout from './components/Layout';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Jump back to the top whenever the visitor opens a different page
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const MainRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Layout />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
};
export default MainRouter;
