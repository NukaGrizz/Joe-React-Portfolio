import React from 'react';

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/" className="leftHeader">
          <span role="img" aria-label="camera"> <img src={require(`../../assets/Images/Joe.jpg`).default} alt="JOE TREMOLS, Software Developer" className="leftImg"></img></span> 
          <h1 className="leftName">Joe Tremols</h1>
        </a>
      </h2>
      <nav className="navAlign">
        <ul className="flex-row">
          <li className={`mx-2 onHover ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {
                setAboutSelected(true);
                setPortfolioSelected(false); 
                setContactSelected(false); 
                setResumeSelected(false);
              }}
            >
              About me
            </span>
          </li>
          <li className={`mx-2 onHover ${portfolioSelected && 'navActive'}`}>
            <span 
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(true); 
                setContactSelected(false); 
                setResumeSelected(false);
              }}
            >
              Portfolio
            </span>
          </li>
          <li className={`mx-2 onHover ${contactSelected && 'navActive'}`}>
            <span
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(false); 
                setContactSelected(true); 
                setResumeSelected(false);
              }}
            >
              Contact
            </span>
          </li>
          <li className={`mx-2 onHover ${resumeSelected && 'navActive'}`}>
            <span
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(false); 
                setContactSelected(false); 
                setResumeSelected(true);
              }}
            >
              Resume
            </span>
          </li>


          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
