import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {aboutSelected ? (
          <>
          <About></About>
          </>
        ) : (<></>)}
        {portfolioSelected ? (
          <>
            <Gallery></Gallery>
          </>
        ) : (<></>)}
        {contactSelected ? (
          <>
          <ContactForm></ContactForm>
          </>
        ) : (<></>)}
        {resumeSelected ? (
          <>
          <Resume></Resume>
          </>
        ) : (<></>)}
        
      </main>
      <footer>
            <a className="mx-2 onHover" href="https://github.com/NukaGrizz">GitHub</a>
            <a className="mx-2 onHover" href="https://www.linkedin.com/in/joetremols/">LinkedIn</a>
            <a className="mx-2 onHover" href="https://www.facebook.com/joetremols">Facebook</a>
            <p>
            &copy; 2021 Joe Tremols
            </p>

        </footer>
    </div>
  );
}

export default App;
