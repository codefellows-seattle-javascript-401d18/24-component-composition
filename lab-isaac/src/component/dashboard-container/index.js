import './dashboard-container.scss';
import React from 'react';
import NoteCreateForm from '../note-form';
import NoteList from '../note-list';
import NoteItem from '../note-item';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Create a note:</h2>
        <NoteCreateForm app={this.props.app}/>
        <h2>Notes:</h2>
        <NoteList app={this.props.app}/>
      </div>
    );
  }
}

export default DashboardContainer;
