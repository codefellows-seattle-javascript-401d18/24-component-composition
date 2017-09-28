import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import NoteCreateForm from './component/NoteCreateForm';
import NoteList from './component/NoteList';
import uuid from 'uuid/v4';
// import COMPONENT from './FILEPATH'
//ex: import DashboardContainer from './component/dashboard-container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
    };
    //BIND STUFF
    this.appStateGet = this.appStateGet.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  //A function to pass state to notes//
  appStateGet() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    //a function for the Notes doing whatever they do
    return (
      <div className = "application">
        <header>
          <ul>
            <li><a href="/">home</a></li>
            //We could add more routes
            // <li><a href="/about">about</a></li>
          </ul>
        </header>
        <main className="main">
          <BrowserRouter>
            <section>
            //We could add more routes
              <Route exact path="/" component = {() => <NoteCreateForm app={this.appStateGet()} /> }/>
            </section>
            </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
