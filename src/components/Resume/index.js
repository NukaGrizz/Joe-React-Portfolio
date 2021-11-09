import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function Resume() {
  return (
    <section className="resumeCenter">
        <h3>Proficiencies</h3>
        <section>
        <h4 className="mx-2">Languages:</h4>
                <p className="resumePara">JavaScript ES6+, CSS3, HTML5, SQL, NoSQL</p>
        </section>
        <section>
        <h4 className="mx-2">Applications:</h4>
                <p className="resumePara">GitHub, MongoDB, JawsDB, MySQL, Figma, Heroku, Canva, Adobe Creative Cloud (Photoshop, Illustrator, InDesign, Lightroom, Premier, After Effects, XD), WordPress, Wix, GoDaddy Domain Management, Trello, Slack, Word, Excel, Powerpoint, Outlook, Microsoft Enterprise 365 Administration, LastPass enterprise password management, Google Search Console</p>
        </section>
        <section>
        <h4 className="mx-2">Tools:</h4>
                <p className="resumePara">Express, React, Node, Handlebars, Query, Bootstrap, Bulma, Coudinary, Google reCaptcha, Font Awesome, Stripe,  Hubspot, MERN Stack, Object Oriented Programing OOP, API, JSON, AJAX, Test Driven Development TDD</p>
        </section>


        <a href="https://drive.google.com/file/d/1syUQPLGLrOwbViEtcemw61xI_2WOHSys/view?usp=sharing" className="resumeCenter">
            <FontAwesomeIcon className="fa-3x"icon={faFileDownload} />
            <p>Click To Download Resume</p>
        </a>
    </section>
  );
}
export default Resume;
