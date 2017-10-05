import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
    };
  }

  getApp() {
    return{
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  componentDidUpdate() {
    console.log(this.state.notesArray);
  }

  render() {
    return (
      <div className="application">
        <header>
          <h1>NoteApp Lab</h1>
        </header>
        <main className="main-content">
          <BrowserRouter>
            <section>
              <Route exact path="/" component={() => <DashboardContainer app={this.getApp()}/>} />
            </section>
          </BrowserRouter>
        </main>
        <footer></footer>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
