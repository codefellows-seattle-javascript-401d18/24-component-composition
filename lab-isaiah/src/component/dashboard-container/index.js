import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Welcome!</h2>
        <p><strong>Add a note below:</strong></p>
        <NoteForm
          handleSubmit={this.noteCreate}
          buttonLabel='Create Note'
        />
      </div>
    );
  }
}

export default DashboardContainer;
