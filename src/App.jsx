import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Projects from './components/3-projects/Projects';
import ContactUs from './components/4-contactUs/ContactUs';
import Footer from './components/5-footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [showScrolBtn, setShowScrolBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowScrolBtn(true);
      } else {
        setShowScrolBtn(false);
      }
    });
  }, []);

  return (
    <div className='container' id='up'>
      <Header />
      <Hero />
      <div className='divider' />
      <Projects />
      <div className='divider' />
      <ContactUs />
      <div className='divider' />
      <Footer />
      <a href='#up'>
        <button
          style={{ opacity: showScrolBtn ? 1 : 0, transition: '0.5s' }}
          className='icon-chevron-up scroll2Top'
        />
      </a>
    </div>
  );
}

export default App;
