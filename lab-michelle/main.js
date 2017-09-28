import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import NoteCreateForm from './component/note-create-form';
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
    this.noteMaker = this.noteMaker.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  noteMaker(string) {
    let note = {
      id: uuid(),
      editing: false,
      completed: false,
      content: string,
    };
    this.setState(prevState => ({
      notesArr: [...prevState.notesArr, note],
    })
  );
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
              <Route exact path="/" component = {() => <NoteCreateForm handleNoteMaker={this.noteMaker} app={this.appStateGet()} /> }/>
            </section>
            </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
