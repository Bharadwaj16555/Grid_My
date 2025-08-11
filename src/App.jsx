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
            <img src='/Grid_My/1.jpeg' alt='' />
            <label>Project One</label>
          </div>

          <div className='card'>
            <img src='/Grid_My/2.jpeg' alt='' />
            <label>Project Two</label>
          </div>

          <div className='card'>
            <img src='/Grid_My/3.jpeg' alt='' />
            <label>Project Three</label>
          </div>

          <div className='card'>
            <img src='/Grid_My/4.jpeg' alt='' />
            <label>Project Four</label>
          </div>

          <div className='card'>
            <img src='/Grid_My/5.jpeg' alt='' />
            <label>Project Five</label>
          </div>

          <div className='card'>
            <img src='/Grid_My/6.jpeg' alt='' />
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