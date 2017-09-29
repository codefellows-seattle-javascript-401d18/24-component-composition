// import './styles/main.scss'

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
    };
  }

  render() {
    return (
      <div className="application">
        <h1>NoteApp Creation</h1>
        <main className="main-content">
          <BrowserRouter>
            <section>

            </section>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
