import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../note-create-form';
import NoteList from '../note-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.noteCreate = this.noteCreate.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

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

  updateNote(note) {
    this.props.getAppState.setState(prevState => ({
      notes: prevState.notes.map((noteItem) => {
        return noteItem.id === note.id ? note : noteItem;
      })
    }));
  }

  render() {
    return (
      <div className='dashboard-container'>
        <div>
          <NoteForm
            buttonText='Add Note'
            handleSubmit={this.noteCreate}
             />
        </div>
        <div>
          <NoteList notes={this.props.getAppState.state.notes}
          deleteNote={this.deleteNote} updateNote={this.updateNote}
          />
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
