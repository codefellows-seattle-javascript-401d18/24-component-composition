import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../note-create-form';
import NoteList from '../note-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.noteCreate = this.noteCreate.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.getAppState.setState(state => ({
      notes: [...state.notes, note]
    }));
  }

  deleteNote(note) {
    this.props.getAppState.setState(prevState => ({
      notes: prevState.notes.filter((noteItem) => {
        return noteItem.id !== note.id;
      })
    }));
  }

  render() {
    console.log('GETAPPSTATE?:', this.props.getAppState);
    return (
      <div className='dashboard-container'>
        <div>
          <NoteForm handleNoteCreate={this.noteCreate} />
        </div>
        <div>
          <NoteList notes={this.props.getAppState.state.notes}
          deleteNote={this.deleteNote}
          />
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
