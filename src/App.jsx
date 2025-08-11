// Importing React library and Component class
import React, { Component } from 'react';
// Importing external CSS file to style the component
import './App.css';

class App extends Component {
  // The render method returns the JSX (UI structure) to be displayed
  render() {
    return (
      <>
        {/* Header section containing a logo */}
        <header>
          <div className='logo'>My Projects</div>
          {/* .logo class styles the text to look like a bold site/project title */}
        </header>

        {/* Main content section displaying project cards in a grid layout */}
        <section>
          {/* Each card displays an image and a label/title below it */}
          <div className='card'>
            <img src='/1.jpeg' alt='image 1' />
            <label>Project One</label>
          </div>

          <div className='card'>
            <img src='/2.jpeg' alt='image 2' />
            <label>Project Two</label>
          </div>

          <div className='card'>
            <img src='/3.jpeg' alt='image 3' />
            <label>Project Three</label>
          </div>

          <div className='card'>
            <img src='/4.jpeg' alt='image 4' />
            <label>Project Four</label>
          </div>

          <div className='card'>
            <img src='/5.jpeg' alt='image 5' />
            <label>Project Five</label>
          </div>

          <div className='card'>
            <img src='/6.jpeg' alt='image 6' />
            <label>Project Six</label>
          </div>
        </section>

        {/* Footer section with copyright notice */}
        <footer>
          Copyright @ 2025. All rights reserved.
        </footer>
      </>
    );
  }
}

// Exporting the App component so it can be used in other parts of the application
export default App;