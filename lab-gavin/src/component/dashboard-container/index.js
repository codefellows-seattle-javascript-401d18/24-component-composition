import React from 'react';
import uuid from 'uuid';
import './_dashboard-container.scss';

import NoteCreateForm from '../note-create-form';

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
      <div>
        <h1>Create a new note here!</h1>
        <NoteCreateForm
          handleSubmit={this.noteCreate}
          buttonLabel='Submit Note'
        />
      </div>
    );
  }
}

export default DashboardContainer;
