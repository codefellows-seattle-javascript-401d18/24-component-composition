import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from './component/dashboard-container';
import AboutContainer from './component/about-container';
import Navbar from './component/navbar';
import NoteList from './component/note-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  deleteNote(id) {
    let notes = this.state.notes;
    notes = notes.filter(note => note.id !== id);
    this.setState({ notes: notes});
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <div className="application">
        <main className="main-content">
          <BrowserRouter>
            <section>
              <Navbar />
              <Route exact path="/" component={() => <DashboardContainer app={this.getApp()}/>}/>
              <Route exact path="/about" component={AboutContainer}/>
              <NoteList
                notes={this.state.notes}
                deleteNote={this.deleteNote}
                app={this.getApp()}
              />
            </section>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
