import React from 'react';
import NoteCreateForm from '../NoteCreateForm';
import NoteList from '../NoteList';

let renderIf = (test, componentTrue, componentFalse = undefined) => test ? componentTrue : componentFalse;

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: false,
    };
  }

  componentDidUpdate() {
    console.log('__DASHBOARD_APP_STATE__', this.props.app.state);
  }

  render() {
    return (
      <div className = "dashboard-container">
        <h2>TakeNote!</h2>
        <p>An app for busy humans</p>

        <NoteCreateForm app = {this.props.app}/>
        <NoteList app = {this.props.app}/>
      </div>
    );
  }
}

export default DashboardContainer;
