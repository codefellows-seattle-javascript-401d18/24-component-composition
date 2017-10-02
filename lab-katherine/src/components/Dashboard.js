import React from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state);
  }

  render () {
    return (
      <div className="dashboard-container">
        <h1>Notes</h1>
        <NoteForm app={this.props.app}/>
        <NoteList app={this.props.app}/>
      </div>
    );
  }
}

export default Dashboard;
