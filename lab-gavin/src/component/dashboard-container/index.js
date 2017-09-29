import React from 'react';
import uuid from 'uuid/v1';
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
        <NoteCreateForm
          handleSubmit={this.noteCreate}
          submitTitle='Submit Note'
        />
      </div>
    );
  }
}

export default DashboardContainer;
