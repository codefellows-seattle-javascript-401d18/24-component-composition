import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form';
import NoteList from '../note-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>We're in the dashboard</h2>
        <NoteForm handleNoteCreate={this.noteCreate}/>
        <NoteList notes={this.props.app.state.notes}/>
      </div>
    );
  }
}
export default DashboardContainer;
