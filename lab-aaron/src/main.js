import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import NoteCreateForm from './component/note-create-form/index.js';
import uuid from 'uuid/v4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
    };
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

  appStateGet() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <div className = "application">
        <header>
          <ul>
            <li><a href="/">home</a></li>
          </ul>
        </header>
        <main className="main">
          <BrowserRouter>
            <section>
              <Route exact path="/" component = {() => <NoteCreateForm handleNoteMaker={this.noteMaker} app={this.appStateGet()} /> }/>
            </section>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
