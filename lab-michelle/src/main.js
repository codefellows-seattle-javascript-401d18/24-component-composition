import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from './component/dashboard-container';
import NoteCreateForm from './component/NoteCreateForm';
import NoteList from './component/NoteList';
import uuid from 'uuid/v4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
    };
    this.appStateGet = this.appStateGet.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
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
            <Route exact path="/" component={() => <DashboardContainer app={this.getApp()}/>} />
            </section>
            </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
