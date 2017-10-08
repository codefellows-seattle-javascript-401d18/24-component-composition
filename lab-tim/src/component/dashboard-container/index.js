import './_dashboard-container.scss';

import React from 'react';
import NoteCreateForm from '../notes-form';
import NoteList from '../notes-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.noteCreate = this.noteCreate.bind(this);
    console.log('__DASHBOARD_STATE__', this.state);
    console.log('__DASHBOARD_PROPS__', this.props);
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state);
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Your list of notes:</h2>
        <NoteCreateForm app={this.props.app}/>
        <NoteList notes={this.props.app}/>
      </div>
    );
  }
}

export default DashboardContainer;
