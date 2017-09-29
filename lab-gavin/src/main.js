import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import DashboardContainer from './component/dashboard-container';
import NoteList from './component/note-list';
import Navbar from './component/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }


  deleteNote(id) {
    let notes = this.state.notes;
    notes = notes.filter(note => note.id !== id);
    this.setState({ notes: notes });
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }



  componentDidUpdate(){
    console.log('___STATE___', this.state);
  }

  render() {
    return (
      <section className="wrapper">
        <Navbar />
        <main className="main">
          <BrowserRouter>
            <section>
              <Route exact path='/' component={() => <DashboardContainer app={this.getApp()} />} />

              <NoteList
                notes={this.state.notes}
                deleteNote={this.deleteNote}
                app={this.getApp()}
              />
            </section>
          </BrowserRouter>
        </main>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
