import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';
import uuid from 'uuid/v4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{id: uuid(), content: 'this is a note'}],
    };
    this.getApp = this.getApp.bind(this);
    console.log('__APP_STATE__', this.state);
    console.log('__APP_PROPS__', this.props);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state.notes);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <div className="application">
        <header>
          <nav>
            <ul>
              <li><a href="/">Notes</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <BrowserRouter>
            <section>
              <Route exact path="/" component={() => <DashboardContainer app={this.getApp()}/>}/>
              <Route exact path="/about" component={AboutContainer}/>
            </section>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
